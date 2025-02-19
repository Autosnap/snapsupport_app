
import { Home, InboxIcon, Settings, Users, Bot, LogOut, Package } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Inventory", icon: Package, url: "/inventory" },
  { title: "Cases", icon: InboxIcon, url: "/cases" },
  { title: "Vendors & Contacts", icon: Users, url: "/contacts" },
  { title: "Automations", icon: Bot, url: "/automations" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

const mockDealerships = [
  { id: "1", name: "Music City Audi" },
  { id: "2", name: "Downtown Motors" },
  { id: "3", name: "Westside Auto" },
  { id: "4", name: "Valley Dealership" },
];

export function AppSidebar() {
  const location = useLocation();
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDealership, setSelectedDealership] = useState("1");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  const handleDealershipChange = (value: string) => {
    setSelectedDealership(value);
    console.log("Switching to dealership:", value);
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <div className="px-4 py-6">
          <Link to="/" className="block">
            <img 
              src="/lovable-uploads/6a955348-51f8-4cdd-b83f-37d0a71e0f35.png"
              alt="Support Logo"
              className="h-12 w-auto"
            />
          </Link>
          <div className="mt-4">
            <Select value={selectedDealership} onValueChange={handleDealershipChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select dealership" />
              </SelectTrigger>
              <SelectContent>
                {mockDealerships.map((dealership) => (
                  <SelectItem key={dealership.id} value={dealership.id}>
                    {dealership.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url} 
                      className={`flex items-center gap-3 ${
                        location.pathname === item.url ? "bg-primary/10 text-primary" : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 border-t">
          {user ? (
            <div className="space-y-4">
              <div className="text-sm">
                <div className="font-medium">{user.name}</div>
                <div className="text-muted-foreground text-xs">{user.email}</div>
              </div>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={logout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
