
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Camera, Eye, FolderPlus, MoreVertical, PlusCircle } from "lucide-react";
import { Vehicle } from "@/types/inventory";

interface VehicleRowProps {
  vehicle: Vehicle;
  isSelected: boolean;
  onToggleSelect: () => void;
  onViewDetails: (vehicle: Vehicle) => void;
  onAddToCase: (vehicleId: string) => void;
  onNewCase: () => void;
}

export function VehicleRow({
  vehicle,
  isSelected,
  onToggleSelect,
  onViewDetails,
  onAddToCase,
  onNewCase,
}: VehicleRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox 
          checked={isSelected}
          onCheckedChange={onToggleSelect}
        />
      </TableCell>
      <TableCell>
        <img 
          src={vehicle.thumbnail} 
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-20 h-14 object-cover rounded-md"
        />
      </TableCell>
      <TableCell>
        <div className="text-sm">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </div>
      </TableCell>
      <TableCell className="font-medium">{vehicle.vin}</TableCell>
      <TableCell>{vehicle.stockNumber}</TableCell>
      <TableCell>${vehicle.price.toLocaleString()}</TableCell>
      <TableCell>
        <span className="flex items-center gap-2 text-muted-foreground">
          <Camera className="h-4 w-4" />
          {vehicle.photoCount}
        </span>
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem 
              className="gap-2"
              onClick={() => onViewDetails(vehicle)}
            >
              <Eye className="h-4 w-4" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="gap-2"
              onClick={() => onAddToCase(vehicle.id)}
            >
              <FolderPlus className="h-4 w-4" />
              Add to Case
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="gap-2"
              onClick={onNewCase}
            >
              <PlusCircle className="h-4 w-4" />
              Start New Case
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
