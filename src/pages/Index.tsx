import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle2, Clock, InboxIcon, MessageCircle, Bell, X, Archive, Tag } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mockCases } from "@/data/mockCases";
import { CaseDetailsModal } from "@/components/cases/CaseDetailsModal";

const stats = [
  {
    title: "Total Cases",
    value: "156",
    icon: InboxIcon,
    change: "+12%",
    trend: "up",
  },
  {
    title: "Active Cases",
    value: "32",
    icon: Briefcase,
    change: "-2%",
    trend: "down",
  },
  {
    title: "Resolved Cases",
    value: "124",
    icon: CheckCircle2,
    change: "+8%",
    trend: "up",
  },
  {
    title: "Avg. Response Time",
    value: "2.1h",
    icon: Clock,
    change: "-15%",
    trend: "up",
  },
];

const notifications = [
  {
    id: 1,
    title: "Approval Request",
    message: "vAuto requires approval for new inventory feed configuration",
    timestamp: "10 minutes ago",
    isUnread: true,
    icon: CheckCircle2,
    requiresApproval: true,
  },
  {
    id: 2,
    title: "Case Status Update",
    message: "Sarah marked 'Inventory Feed Error' as in-progress",
    timestamp: "1 hour ago",
    isUnread: true,
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "New Comment",
    message: "Mike added a comment to 'Website Navigation Issue'",
    timestamp: "2 hours ago",
    isUnread: false,
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Case Resolved",
    message: "Emily resolved 'SEO Optimization Request'",
    timestamp: "3 hours ago",
    isUnread: false,
    icon: CheckCircle2,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-[#F2FCE2] text-green-700";
    case "in-progress":
      return "bg-[#FEF7CD] text-orange-700";
    case "closed":
      return "bg-[#FFDEE2] text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const recentCases = mockCases.slice(0, 5);

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-8 fade-in">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your support cases. You have saved 8 hours this week by using SnapSupport!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="slide-in">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
                {recentCases.map((case_) => (
                  <Sheet key={case_.id}>
                    <SheetTrigger asChild>
                      <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{case_.title}</p>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                              {case_.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{case_.description}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span>{case_.vendors.map(v => v.vendor).join(", ")}</span>
                            <span className="mx-2">•</span>
                            <span>{case_.createdAt}</span>
                          </div>
                        </div>
                      </div>
                    </SheetTrigger>
                    <CaseDetailsModal case_={case_} />
                  </Sheet>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Notifications</CardTitle>
              <Bell className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 p-3 rounded-lg transition-colors ${
                      notification.isUnread ? "bg-muted/50" : ""
                    }`}
                  >
                    <div className={`rounded-full p-1.5 ${
                      notification.isUnread ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      <notification.icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className={`text-sm font-medium leading-none ${
                        notification.isUnread ? "text-primary" : ""
                      }`}>
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      {notification.requiresApproval && (
                        <div className="flex gap-2 my-4">
                          <Button size="icon" variant="destructive" className="h-8 w-8">
                            <X className="h-4 w-4" />
                          </Button>
                          <Button size="icon" className="h-8 w-8">
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
