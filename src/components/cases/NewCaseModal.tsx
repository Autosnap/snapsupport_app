
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NewCaseModalProps {
  onClose?: () => void;
}

export function NewCaseModal({ onClose }: NewCaseModalProps) {
  const handleCreate = () => {
    if (onClose) onClose();
  };

  return (
    <SheetContent className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle>Create New Case</SheetTitle>
      </SheetHeader>
      <div className="mt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Enter case title" />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea 
              placeholder="Describe the case..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Urgency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high" className="text-red-600">High</SelectItem>
                <SelectItem value="medium" className="text-yellow-600">Medium</SelectItem>
                <SelectItem value="low" className="text-green-600">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Vendor</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select vendor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vauto">vAuto</SelectItem>
                <SelectItem value="dealer">Dealer.com</SelectItem>
                <SelectItem value="cars">Cars.com</SelectItem>
                <SelectItem value="autofocus">AutoFocus Photography</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full" onClick={handleCreate}>Create Case</Button>
      </div>
    </SheetContent>
  );
}
