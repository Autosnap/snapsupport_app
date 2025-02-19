import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AddVendorForm } from "@/components/vendors/AddVendorForm";
import { AddContactForm } from "@/components/contacts/AddContactForm";
import { VendorTable } from "@/components/vendors/VendorTable";
import { ContactTable } from "@/components/contacts/ContactTable";
import { DeleteConfirmationDialog } from "@/components/shared/DeleteConfirmationDialog";
import { toast } from "sonner";

const vendors = [
  {
    id: 1,
    name: "vAuto",
    type: "Inventory Management",
    contactPerson: "Sarah Mitchell",
    email: "sarah.mitchell@vauto.com",
    phone: "(555) 123-4567",
    location: "Austin, TX"
  },
  {
    id: 2,
    name: "Dealer.com",
    type: "Website Provider",
    contactPerson: "Michael Chen",
    email: "mchen@dealer.com",
    phone: "(555) 234-5678",
    location: "Burlington, VT"
  },
  {
    id: 3,
    name: "Cars.com",
    type: "Listing Platform",
    contactPerson: "Jessica Brown",
    email: "jbrown@cars.com",
    phone: "(555) 345-6789",
    location: "Chicago, IL"
  },
  {
    id: 4,
    name: "AutoFocus Photography",
    type: "Photography Service",
    contactPerson: "David Wilson",
    email: "david@autofocus.com",
    phone: "(555) 456-7890",
    location: "Los Angeles, CA"
  }
];

const contacts = [
  {
    id: 1,
    name: "John Smith",
    title: "Account Manager",
    company: "vAuto",
    email: "john.smith@vauto.com",
    phone: "(555) 111-2233",
    location: "Austin, TX"
  },
  {
    id: 2,
    name: "Emily Johnson",
    title: "Support Specialist",
    company: "Dealer.com",
    email: "emily.j@dealer.com",
    phone: "(555) 222-3344",
    location: "Burlington, VT"
  },
  {
    id: 3,
    name: "Robert Lee",
    title: "Technical Lead",
    company: "Cars.com",
    email: "rlee@cars.com",
    phone: "(555) 333-4455",
    location: "Chicago, IL"
  },
  {
    id: 4,
    name: "Amanda Martinez",
    title: "Client Success Manager",
    company: "vAuto",
    email: "amanda.m@vauto.com",
    phone: "(555) 444-5566",
    location: "Austin, TX"
  },
  {
    id: 5,
    name: "Mark Thompson",
    title: "Integration Specialist",
    company: "Dealer.com",
    email: "mark.t@dealer.com",
    phone: "(555) 555-6677",
    location: "Burlington, VT"
  }
];

const Contacts = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("vendors");
  const [editingItem, setEditingItem] = useState<any>(null);
  const [deletingItem, setDeletingItem] = useState<any>(null);

  const handleAddNew = () => {
    setEditingItem(null);
    setShowAddForm(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setShowAddForm(true);
  };

  const handleDelete = (item: any) => {
    setDeletingItem(item);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (deletingItem) {
      console.log("Deleting item:", deletingItem);
      // Here you would typically make an API call to delete the item
      toast.success("Item deleted successfully");
      setShowDeleteDialog(false);
      setDeletingItem(null);
    }
  };

  const handleAddVendor = (data: any) => {
    if (editingItem) {
      console.log("Updating vendor:", { ...editingItem, ...data });
      toast.success("Vendor updated successfully");
    } else {
      console.log("Adding vendor:", data);
      toast.success("Vendor added successfully");
    }
    setShowAddForm(false);
    setEditingItem(null);
  };

  const handleAddContact = (data: any) => {
    if (editingItem) {
      console.log("Updating contact:", { ...editingItem, ...data });
      toast.success("Contact updated successfully");
    } else {
      console.log("Adding contact:", data);
      toast.success("Contact added successfully");
    }
    setShowAddForm(false);
    setEditingItem(null);
  };

  return (
    <AppLayout>
      <div className="space-y-8 fade-in">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Vendors & Contacts</h1>
          <p className="text-muted-foreground mt-2">
            Manage your vendor partnerships and contacts
          </p>
        </div>

        <Tabs defaultValue="vendors" className="space-y-6" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>
            <Button className="gap-2" onClick={handleAddNew}>
              <PlusCircle className="h-4 w-4" />
              Add New
            </Button>
          </div>

          <TabsContent value="vendors" className="mt-0">
            <VendorTable 
              vendors={vendors}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </TabsContent>

          <TabsContent value="contacts" className="mt-0">
            <ContactTable 
              contacts={contacts}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </TabsContent>
        </Tabs>

        <Sheet open={showAddForm} onOpenChange={setShowAddForm}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {editingItem 
                  ? `Edit ${activeTab === "vendors" ? "Vendor" : "Contact"}`
                  : `Add New ${activeTab === "vendors" ? "Vendor" : "Contact"}`}
              </SheetTitle>
            </SheetHeader>
            {activeTab === "vendors" ? (
              <AddVendorForm 
                onSubmit={handleAddVendor} 
                onCancel={() => {
                  setShowAddForm(false);
                  setEditingItem(null);
                }}
                defaultValues={editingItem}
              />
            ) : (
              <AddContactForm 
                onSubmit={handleAddContact} 
                onCancel={() => {
                  setShowAddForm(false);
                  setEditingItem(null);
                }}
                defaultValues={editingItem}
              />
            )}
          </SheetContent>
        </Sheet>

        <DeleteConfirmationDialog
          open={showDeleteDialog}
          onOpenChange={(open) => {
            setShowDeleteDialog(open);
            if (!open) setDeletingItem(null);
          }}
          onConfirm={handleConfirmDelete}
          itemType={activeTab === "vendors" ? "vendor" : "contact"}
        />
      </div>
    </AppLayout>
  );
};

export default Contacts;
