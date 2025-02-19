
import { AppLayout } from "@/components/layout/AppLayout";
import { InventoryTable } from "@/components/inventory/InventoryTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { NewCaseModal } from "@/components/cases/NewCaseModal";
import { AddToCaseModal } from "@/components/inventory/AddToCaseModal";

const Inventory = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddToCaseModal, setShowAddToCaseModal] = useState(false);
  const [showNewCaseModal, setShowNewCaseModal] = useState(false);

  return (
    <AppLayout>
      <div className="space-y-8 fade-in">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Vehicle Inventory</h1>
          <p className="text-muted-foreground mt-2">Select vehicles for a support case.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 flex gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search vehicles..." 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                className="pl-9" 
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          {selectedVehicles.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {selectedVehicles.length} selected
              </span>
              <Button variant="outline" onClick={() => setShowAddToCaseModal(true)}>
                Add to Case
              </Button>
              <Button onClick={() => setShowNewCaseModal(true)}>
                Start New Case
              </Button>
            </div>
          )}
        </div>

        <InventoryTable 
          selectedVehicles={selectedVehicles} 
          onSelectionChange={setSelectedVehicles} 
          searchQuery={searchQuery} 
        />

        {showAddToCaseModal && (
          <AddToCaseModal
            selectedVehicles={selectedVehicles}
            open={showAddToCaseModal}
            onClose={() => setShowAddToCaseModal(false)}
          />
        )}

        {showNewCaseModal && (
          <NewCaseModal onClose={() => setShowNewCaseModal(false)} />
        )}
      </div>
    </AppLayout>
  );
};

export default Inventory;
