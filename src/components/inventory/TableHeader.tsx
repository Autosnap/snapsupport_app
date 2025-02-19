
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

interface TableHeaderProps {
  allSelected: boolean;
  onToggleAll: () => void;
}

export function InventoryTableHeader({ allSelected, onToggleAll }: TableHeaderProps) {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[50px]">
          <Checkbox 
            checked={allSelected}
            onCheckedChange={onToggleAll}
          />
        </TableHead>
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Vehicle Info</TableHead>
        <TableHead>VIN</TableHead>
        <TableHead>Stock #</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Photos</TableHead>
        <TableHead className="w-[50px]"></TableHead>
      </TableRow>
    </TableHeader>
  );
}
