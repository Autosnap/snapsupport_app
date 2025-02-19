
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Search, Zap } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FilterModal } from "@/components/cases/FilterModal";
import { CaseDetailsModal } from "@/components/cases/CaseDetailsModal";
import { mockCases } from "@/data/mockCases";
import { getStatusColor, getPriorityColor, getTagColor } from "@/utils/caseUtils";

const Cases = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Cases</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track all your support cases in one place.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search cases..." />
          </div>
          <Button variant="outline">
            <Zap className="h-4 w-4 mr-2" />
            Add Automation
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <FilterModal />
          </Sheet>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Case Number
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Title
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground min-w-[100px]">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground min-w-[100px]">
                        Priority
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Tags
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Vendors
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Assignee
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {mockCases.map((case_) => (
                      <Sheet key={case_.id}>
                        <SheetTrigger asChild>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer">
                            <td className="p-4 font-medium">
                              {case_.caseNumber}
                            </td>
                            <td className="p-4">
                              <div className="font-medium">{case_.title}</div>
                              <div className="text-muted-foreground text-xs">
                                {case_.description}
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge className={cn("whitespace-nowrap", getStatusColor(case_.status))}>
                                {case_.status}
                              </Badge>
                            </td>
                            <td className="p-4">
                              <Badge className={cn("whitespace-nowrap", getPriorityColor(case_.priority))}>
                                {case_.priority}
                              </Badge>
                            </td>
                            <td className="p-4">
                              <div className="flex gap-1 flex-wrap">
                                {case_.tags.map((tag) => (
                                  <Badge key={tag} className={getTagColor(tag)}>
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="space-y-1">
                                {case_.vendors.map((v, index) => (
                                  <div key={index} className="text-sm">
                                    {v.vendor}
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="p-4">{case_.assignee}</td>
                            <td className="p-4">{case_.createdAt}</td>
                          </tr>
                        </SheetTrigger>
                        <CaseDetailsModal case_={case_} />
                      </Sheet>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Cases;
