import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { getStatusColor, getPriorityColor, getTagColor } from "@/utils/caseUtils";
import { MessageCircleReply, UserPlus, X, Archive, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { Case } from "@/types/cases";

interface CaseDetailsModalProps {
  case_: Case;
}

export function CaseDetailsModal({ case_ }: CaseDetailsModalProps) {
  return (
    <SheetContent className="flex flex-col h-full p-0">
      <SheetHeader className="p-6 border-b sticky top-0 bg-background z-10">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <SheetTitle>{case_.caseNumber}</SheetTitle>
            <p className="text-sm font-normal text-muted-foreground">{case_.title}</p>
          </div>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </div>
      </SheetHeader>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            {case_.tags.map((tag) => (
              <Badge 
                key={tag} 
                className={cn("cursor-pointer group", getTagColor(tag))}
              >
                {tag}
                <X className="h-3 w-3 ml-1 opacity-60 group-hover:opacity-100" />
              </Badge>
            ))}
            <Button variant="outline" size="sm" className="h-6">
              Add Tag
            </Button>
          </div>

          <div className="space-y-1">
            <Label>Description</Label>
            <p className="text-sm text-muted-foreground">{case_.description}</p>
          </div>

          <Button variant="secondary" className="w-full">
            <Car className="mr-2 h-4 w-4" />
            Select Inventory
          </Button>

          <Separator />

          <div className="space-y-1">
            <Label>Details</Label>
            <div className="text-sm grid gap-4 pt-2">
              <div className="space-y-2">
                <span className="text-muted-foreground">Vendors & Contacts</span>
                {case_.vendors.map((v, index) => (
                  <div key={index} className="flex justify-between items-center bg-muted/50 p-2 rounded-md">
                    <div className="space-y-1">
                      <div className="font-medium">{v.vendor}</div>
                      <div className="text-sm text-muted-foreground">{v.contact}</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-2">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Vendor
                </Button>
              </div>
              <div className="flex h-9 items-center justify-between">
                <span className="text-muted-foreground">Priority</span>
                <Select defaultValue={case_.priority}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">
                      <Badge className={getPriorityColor('high')}>High</Badge>
                    </SelectItem>
                    <SelectItem value="medium">
                      <Badge className={getPriorityColor('medium')}>Medium</Badge>
                    </SelectItem>
                    <SelectItem value="low">
                      <Badge className={getPriorityColor('low')}>Low</Badge>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex h-9 items-center justify-between">
                <span className="text-muted-foreground">Status</span>
                <Select defaultValue={case_.status}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">
                      <Badge className={cn("whitespace-nowrap", getStatusColor('open'))}>Open</Badge>
                    </SelectItem>
                    <SelectItem value="in-progress">
                      <Badge className={cn("whitespace-nowrap", getStatusColor('in-progress'))}>In Progress</Badge>
                    </SelectItem>
                    <SelectItem value="closed">
                      <Badge className={cn("whitespace-nowrap", getStatusColor('closed'))}>Closed</Badge>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex h-9 items-center justify-between">
                <span className="text-muted-foreground">Assignee</span>
                <span>{case_.assignee}</span>
              </div>
              <div className="flex h-9 items-center justify-between">
                <span className="text-muted-foreground">Created</span>
                <span>{case_.createdAt}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea 
              placeholder="Add case notes here..."
              defaultValue={case_.notes}
              className="min-h-[100px]"
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <Label>Communications</Label>
            <div className="space-y-4">
              {case_.communications.length > 0 ? (
                case_.communications.map((comm) => (
                  <div key={comm.id} className="rounded-lg border p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{comm.from}</span>
                      <span className="text-muted-foreground">
                        {new Date(comm.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm">{comm.message}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No communications yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-6 sticky bottom-0 bg-background mt-auto">
        <div className="grid grid-cols-3 gap-2">
          <Button className="col-span-2">
            <MessageCircleReply className="mr-2 h-4 w-4" />
            Reply
          </Button>
          <Button variant="outline">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
          <Button variant="secondary" className="col-span-3">
            <Archive className="mr-2 h-4 w-4" />
            Archive Case
          </Button>
        </div>
      </div>
    </SheetContent>
  );
}
