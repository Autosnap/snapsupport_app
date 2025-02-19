
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function FilterModal() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Filter Cases</SheetTitle>
      </SheetHeader>
      <div className="mt-6 space-y-6">
        <div className="space-y-2">
          <Label>Status</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="status-open" />
              <label htmlFor="status-open">Open</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-in-progress" />
              <label htmlFor="status-in-progress">In Progress</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-closed" />
              <label htmlFor="status-closed">Closed</label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Priority</Label>
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

        <div className="space-y-2">
          <Label>Assignee</Label>
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

        <Button className="w-full">Apply Filters</Button>
      </div>
    </SheetContent>
  );
}
