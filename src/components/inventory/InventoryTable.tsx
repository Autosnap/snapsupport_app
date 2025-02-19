
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { useState } from "react";
import { VehicleDetailsModal } from "./VehicleDetailsModal";
import { AddToCaseModal } from "./AddToCaseModal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { NewCaseModal } from "@/components/cases/NewCaseModal";
import { Vehicle } from "@/types/inventory";
import { InventoryTableHeader } from "./TableHeader";
import { VehicleRow } from "./VehicleRow";

const mockVehicles: Vehicle[] = [
  {
    id: "1",
    thumbnail: "/lovable-uploads/bad5ea33-de90-48c7-b412-bcc951bead63.png",
    vin: "1HGCM82633A123456",
    stockNumber: "ST12345",
    price: 25999,
    photoCount: 32,
    year: "2024",
    make: "Audi",
    model: "Q5",
  },
  {
    id: "2",
    thumbnail: "/lovable-uploads/3fea50cf-efec-449e-a16d-d9eb490f5e96.png",
    vin: "5TDZA23C13S012345",
    stockNumber: "ST12346",
    price: 32999,
    photoCount: 28,
    year: "2023",
    make: "Audi",
    model: "A4",
  },
];

interface InventoryTableProps {
  selectedVehicles: string[];
  onSelectionChange: (selected: string[]) => void;
  searchQuery: string;
}

export function InventoryTable({ selectedVehicles, onSelectionChange, searchQuery }: InventoryTableProps) {
  const [vehicles] = useState<Vehicle[]>(mockVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAddToCaseModal, setShowAddToCaseModal] = useState(false);
  const [showNewCaseModal, setShowNewCaseModal] = useState(false);

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.vin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.stockNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAll = () => {
    if (selectedVehicles.length === filteredVehicles.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(filteredVehicles.map(v => v.id));
    }
  };

  const toggleOne = (id: string) => {
    if (selectedVehicles.includes(id)) {
      onSelectionChange(selectedVehicles.filter(v => v !== id));
    } else {
      onSelectionChange([...selectedVehicles, id]);
    }
  };

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setShowDetailsModal(true);
  };

  const handleAddSingleVehicleToCase = (vehicleId: string) => {
    onSelectionChange([vehicleId]);
    setShowAddToCaseModal(true);
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <Table>
            <InventoryTableHeader 
              allSelected={selectedVehicles.length === filteredVehicles.length && filteredVehicles.length > 0}
              onToggleAll={toggleAll}
            />
            <TableBody>
              {filteredVehicles.map((vehicle) => (
                <VehicleRow
                  key={vehicle.id}
                  vehicle={vehicle}
                  isSelected={selectedVehicles.includes(vehicle.id)}
                  onToggleSelect={() => toggleOne(vehicle.id)}
                  onViewDetails={handleViewDetails}
                  onAddToCase={handleAddSingleVehicleToCase}
                  onNewCase={() => setShowNewCaseModal(true)}
                />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedVehicle && (
        <VehicleDetailsModal
          vehicle={selectedVehicle}
          open={showDetailsModal}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedVehicle(null);
          }}
        />
      )}

      <Dialog open={showAddToCaseModal} onOpenChange={setShowAddToCaseModal}>
        <DialogContent>
          <AddToCaseModal
            selectedVehicles={selectedVehicles}
            open={showAddToCaseModal}
            onClose={() => setShowAddToCaseModal(false)}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={showNewCaseModal} onOpenChange={setShowNewCaseModal}>
        <DialogContent>
          <NewCaseModal onClose={() => setShowNewCaseModal(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
