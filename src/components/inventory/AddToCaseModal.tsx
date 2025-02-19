
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NewCaseModal } from "@/components/cases/NewCaseModal";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { toast } from "sonner";

interface AddToCaseModalProps {
  selectedVehicles: string[];
  open: boolean;
  onClose: () => void;
}

export function AddToCaseModal({ selectedVehicles, open, onClose }: AddToCaseModalProps) {
  const [selectedCase, setSelectedCase] = useState<string>();

  const handleAddToCase = () => {
    if (!selectedCase) return;
    toast.success(`${selectedVehicles.length} vehicle${selectedVehicles.length > 1 ? 's' : ''} added to case`);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add to Case</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <Select value={selectedCase} onValueChange={setSelectedCase}>
            <SelectTrigger>
              <SelectValue placeholder="Select a case" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="case1">Case #12345 - Photo Issues</SelectItem>
              <SelectItem value="case2">Case #12346 - Pricing Update</SelectItem>
              <SelectItem value="case3">Case #12347 - Description Review</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex justify-between">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Create New Case</Button>
              </SheetTrigger>
              <NewCaseModal />
            </Sheet>
            <Button onClick={handleAddToCase} disabled={!selectedCase}>
              Add to Case
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
