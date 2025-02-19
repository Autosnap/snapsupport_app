import { Case } from "@/types/cases";

export const mockCases: Case[] = [
  {
    id: 1,
    caseNumber: "CASE-2024-001",
    title: "Website Navigation Issue",
    description: "Users reporting difficulty accessing vehicle pages",
    status: "open",
    vendors: [
      { vendor: "Dealer.com", contact: "Michael Smith" },
      { vendor: "CloudFlare", contact: "Jane Wilson" }
    ],
    createdAt: "2024-02-15",
    priority: "high",
    assignee: "Sarah Johnson",
    tags: ["website"],
    notes: "Initial investigation shows possible DNS issues. Tech team has been notified and is investigating the root cause.",
    communications: [
      {
        id: 1,
        type: "email",
        from: "john.doe@example.com",
        message: "I can't access the vehicle pages on the website. Getting a 404 error.",
        timestamp: "2024-02-15T10:30:00Z"
      },
      {
        id: 2,
        type: "email",
        from: "sarah.johnson@company.com",
        message: "I'll look into this right away. Can you please provide the specific URLs you're trying to access?",
        timestamp: "2024-02-15T10:45:00Z"
      },
      {
        id: 3,
        type: "email",
        from: "tech.support@dealer.com",
        message: "We've identified a DNS propagation issue. Working on a fix now. ETA 2 hours.",
        timestamp: "2024-02-15T11:15:00Z"
      }
    ]
  },
  {
    id: 2,
    caseNumber: "CASE-2024-002",
    title: "Inventory Feed Error",
    description: "Vehicle data not syncing properly with third-party platforms",
    status: "in-progress",
    vendors: [
      { vendor: "vAuto", contact: "Jessica Taylor" }
    ],
    createdAt: "2024-02-14",
    priority: "medium",
    assignee: "Mike Chen",
    tags: ["inventory"],
    notes: "Multiple sync attempts failed. Working with vAuto team to resolve mapping issues.",
    communications: [
      {
        id: 4,
        type: "email",
        from: "mike.chen@company.com",
        message: "Noticed discrepancies in vehicle prices between our system and third-party listings.",
        timestamp: "2024-02-14T09:00:00Z"
      },
      {
        id: 5,
        type: "email",
        from: "jessica.taylor@vauto.com",
        message: "We've identified the issue with the price mapping. Will deploy a fix in the next hour.",
        timestamp: "2024-02-14T14:30:00Z"
      }
    ]
  },
  {
    id: 3,
    caseNumber: "CASE-2024-003",
    title: "Photo Upload Failed",
    description: "Unable to upload vehicle images to the media server",
    status: "closed",
    vendors: [
      { vendor: "AutoFocus", contact: "David Wilson" }
    ],
    createdAt: "2024-02-13",
    priority: "low",
    assignee: "Emily Brown",
    tags: ["media"],
    notes: "Issue resolved - server configuration updated. New monitoring alerts implemented to prevent future occurrences.",
    communications: [
      {
        id: 6,
        type: "email",
        from: "photographer@autofocus.com",
        message: "Getting timeout errors when trying to upload the new vehicle batch photos.",
        timestamp: "2024-02-13T13:20:00Z"
      },
      {
        id: 7,
        type: "email",
        from: "emily.brown@company.com",
        message: "I'll check the server logs and get back to you shortly.",
        timestamp: "2024-02-13T13:25:00Z"
      },
      {
        id: 8,
        type: "email",
        from: "david.wilson@autofocus.com",
        message: "Server configuration has been updated. Please try uploading again.",
        timestamp: "2024-02-13T14:45:00Z"
      }
    ]
  },
  {
    id: 4,
    caseNumber: "CASE-2024-004",
    title: "CRM Integration Issues",
    description: "Customer data not flowing between systems correctly",
    status: "open",
    vendors: [
      { vendor: "SalesForce", contact: "Rachel Green" }
    ],
    createdAt: "2024-02-16",
    priority: "high",
    assignee: "Tom Wilson",
    tags: ["crm"],
    notes: "API endpoints returning errors. SalesForce team investigating potential recent changes in their system.",
    communications: [
      {
        id: 9,
        type: "email",
        from: "sales.manager@company.com",
        message: "Our team can't see the latest customer interactions in SalesForce.",
        timestamp: "2024-02-16T08:15:00Z"
      },
      {
        id: 10,
        type: "email",
        from: "rachel.green@salesforce.com",
        message: "We're investigating the API logs. Will provide an update within the hour.",
        timestamp: "2024-02-16T09:00:00Z"
      }
    ]
  },
  {
    id: 5,
    caseNumber: "CASE-2024-005",
    title: "Lead Router Malfunction",
    description: "New leads not being distributed to sales team",
    status: "in-progress",
    vendors: [
      { vendor: "LeadConnect", contact: "Alan Parker" }
    ],
    createdAt: "2024-02-15",
    priority: "medium",
    assignee: "Lisa Zhang",
    tags: ["leads"],
    notes: "Distribution rules appear to be corrupted. Working with vendor to rebuild routing logic.",
    communications: [
      {
        id: 11,
        type: "email",
        from: "sales.director@company.com",
        message: "Team hasn't received any new leads since this morning. This is urgent.",
        timestamp: "2024-02-15T11:00:00Z"
      },
      {
        id: 12,
        type: "email",
        from: "lisa.zhang@company.com",
        message: "I've identified the issue with the routing rules. Working on a fix now.",
        timestamp: "2024-02-15T11:30:00Z"
      },
      {
        id: 13,
        type: "email",
        from: "alan.parker@leadconnect.com",
        message: "We're implementing a temporary workaround while we rebuild the routing logic.",
        timestamp: "2024-02-15T12:15:00Z"
      }
    ]
  },
  {
    id: 6,
    caseNumber: "CASE-2024-006",
    title: "Payment Gateway Error",
    description: "Credit card processing failing for online deposits",
    status: "closed",
    vendors: [
      { vendor: "Stripe", contact: "Mark Stevens" }
    ],
    createdAt: "2024-02-12",
    priority: "high",
    assignee: "Alex Johnson",
    tags: ["payments"],
    notes: "Issue resolved - SSL certificate was expired and has been renewed. Additional monitoring implemented.",
    communications: [
      {
        id: 14,
        type: "email",
        from: "finance@company.com",
        message: "Customers reporting failed payment attempts for vehicle deposits.",
        timestamp: "2024-02-12T15:20:00Z"
      },
      {
        id: 15,
        type: "email",
        from: "alex.johnson@company.com",
        message: "SSL certificate issue identified. Working with Stripe to resolve.",
        timestamp: "2024-02-12T15:45:00Z"
      },
      {
        id: 16,
        type: "email",
        from: "mark.stevens@stripe.com",
        message: "New SSL certificate implemented. Payments should now process normally.",
        timestamp: "2024-02-12T16:30:00Z"
      },
      {
        id: 17,
        type: "email",
        from: "alex.johnson@company.com",
        message: "Confirmed all payments are now processing correctly. Case can be closed.",
        timestamp: "2024-02-12T17:00:00Z"
      }
    ]
  }
];
