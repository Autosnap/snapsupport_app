
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Building2, Edit, Mail, MapPin, MoreVertical, Phone, Trash } from "lucide-react"

interface Contact {
  id: number;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  location: string;
}

interface ContactTableProps {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
}

export function ContactTable({ contacts, onEdit, onDelete }: ContactTableProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b">
              <tr className="text-left">
                <th className="h-12 px-4 text-muted-foreground font-medium">Name</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Title</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Company</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Email</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Phone</th>
                <th className="h-12 px-4 text-muted-foreground font-medium">Location</th>
                <th className="h-12 px-4 text-muted-foreground font-medium w-[50px]"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-muted/50">
                  <td className="p-4 align-middle font-medium">{contact.name}</td>
                  <td className="p-4 align-middle text-muted-foreground">{contact.title}</td>
                  <td className="p-4 align-middle">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      {contact.company}
                    </span>
                  </td>
                  <td className="p-4 align-middle">
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Mail className="h-4 w-4" />
                      {contact.email}
                    </a>
                  </td>
                  <td className="p-4 align-middle">
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Phone className="h-4 w-4" />
                      {contact.phone}
                    </a>
                  </td>
                  <td className="p-4 align-middle">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {contact.location}
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
                          onClick={() => onEdit(contact)}
                        >
                          <Edit className="h-4 w-4" />
                          Edit contact
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-destructive"
                          onClick={() => onDelete(contact)}
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
