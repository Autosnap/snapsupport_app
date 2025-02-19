
import { Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

// Mock data for the rules table
const mockRules = [
  {
    id: 1,
    vendor: "Dealer.com",
    tag: "Website",
    priority: "High",
    assignee: "Sarah Johnson",
    followUp: "After 1 hour"
  },
  {
    id: 2,
    vendor: "vAuto",
    tag: "Inventory",
    priority: "Medium",
    assignee: "Mike Chen",
    followUp: "After 4 hours"
  }
];

const NewRuleForm = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>When vendor is</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select vendor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dealer">Dealer.com</SelectItem>
              <SelectItem value="vauto">vAuto</SelectItem>
              <SelectItem value="autofocus">AutoFocus</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>And tag contains</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="inventory">Inventory</SelectItem>
              <SelectItem value="media">Media</SelectItem>
              <SelectItem value="crm">CRM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>And priority is</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Assign to</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select assignee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sarah">Sarah Johnson</SelectItem>
              <SelectItem value="mike">Mike Chen</SelectItem>
              <SelectItem value="emily">Emily Brown</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Automated Response Template</Label>
        <Textarea 
          placeholder="Enter the template for automated responses..."
          className="min-h-[100px]"
        />
        <p className="text-sm text-muted-foreground">
          Use {"{vendor}"}, {"{priority}"}, {"{tag}"} as variables in your template
        </p>
      </div>

      <div className="space-y-2">
        <Label>Follow-up Schedule</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select follow-up timing" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">After 1 hour</SelectItem>
            <SelectItem value="4">After 4 hours</SelectItem>
            <SelectItem value="24">After 24 hours</SelectItem>
            <SelectItem value="48">After 48 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full">Create Rule</Button>
    </div>
  );
};

export function AutomationRules() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRuleId, setSelectedRuleId] = useState<number | null>(null);
  const [editingRule, setEditingRule] = useState<typeof mockRules[0] | null>(null);

  const handleDeleteClick = (ruleId: number) => {
    setSelectedRuleId(ruleId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Here you would handle the actual deletion
    console.log("Deleting rule:", selectedRuleId);
    setDeleteDialogOpen(false);
    setSelectedRuleId(null);
  };

  const handleEditClick = (rule: typeof mockRules[0]) => {
    setEditingRule(rule);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Automation Rules</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Rule
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Create New Rule</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <NewRuleForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor</TableHead>
                <TableHead>Tag</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Follow-up</TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRules.map((rule) => (
                <TableRow key={rule.id}>
                  <TableCell>{rule.vendor}</TableCell>
                  <TableCell>{rule.tag}</TableCell>
                  <TableCell>{rule.priority}</TableCell>
                  <TableCell>{rule.assignee}</TableCell>
                  <TableCell>{rule.followUp}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleEditClick(rule)}
                          >
                            <Pencil className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </SheetTrigger>
                        <SheetContent className="w-[400px] sm:w-[540px]">
                          <SheetHeader>
                            <SheetTitle>Edit Rule</SheetTitle>
                          </SheetHeader>
                          <div className="mt-6">
                            <NewRuleForm />
                          </div>
                        </SheetContent>
                      </Sheet>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteClick(rule.id)}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the automation rule.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
