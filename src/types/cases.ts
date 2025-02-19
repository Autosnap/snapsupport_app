
export interface Communication {
  id: number;
  type: string;
  from: string;
  message: string;
  timestamp: string;
}

export interface VendorContact {
  vendor: string;
  contact: string;
}

export interface Case {
  id: number;
  caseNumber: string;
  title: string;
  description: string;
  status: string;
  vendors: VendorContact[];
  createdAt: string;
  priority: string;
  assignee: string;
  tags: string[];
  notes: string;
  communications: Communication[];
}
