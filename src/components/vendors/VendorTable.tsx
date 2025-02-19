
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, Mail, MapPin, MoreVertical, Phone, Trash } from "lucide-react"

interface Vendor {
  id: number;
  name: string;
  type: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
}

interface VendorTableProps {
  vendors: Vendor[];
  onEdit: (vendor: Vendor) => void;
  onDelete: (vendor: Vendor) => void;
}

export function VendorTable({ vendors, onEdit, onDelete }: VendorTableProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b">
              <tr className="text-left">
                <th className="h-12 px-4 text-muted-foreground font-medium">Name</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Type</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Primary Contact</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Email</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Phone</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Location</th>
                <th className="h-12 px-4 text-muted-foreground font-medium w-[50px]"></th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-muted/50">
                  <td className="p-4 align-middle font-medium">{vendor.name}</td>
                  <td className="p-4 align-middle text-muted-foreground">{vendor.type}</td>
                  <td className="p-4 align-middle text-muted-foreground">{vendor.contactPerson}</td>
                  <td className="p-4 align-middle">
                    <a href={`mailto:${vendor.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Mail className="h-4 w-4" />
                      {vendor.email}
                    </a>
                  </td>
                  <td className="p-4 align-middle">
                    <a href={`tel:${vendor.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Phone className="h-4 w-4" />
                      {vendor.phone}
                    </a>
                  </td>
                  <td className="p-4 align-middle">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {vendor.location}
                    </span>
                  </td>
                  <td className="p-4 align-middle">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem 
                          className="flex items-center gap-2"
                          onClick={() => onEdit(vendor)}
                        >
                          <Edit className="h-4 w-4" />
                          Edit vendor
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-destructive"
                          onClick={() => onDelete(vendor)}
                        >
                          <Trash className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
