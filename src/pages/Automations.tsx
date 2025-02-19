
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AutomationRules } from "@/components/automations/AutomationRules";
import { EmailSettings } from "@/components/automations/EmailSettings";

const Automations = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Automations</h1>
          <p className="text-muted-foreground mt-2">
            Configure automated responses and case management rules.
          </p>
        </div>

        <Tabs defaultValue="rules">
          <TabsList>
            <TabsTrigger value="rules">Automation Rules</TabsTrigger>
            <TabsTrigger value="email">Email Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="rules" className="space-y-4">
            <AutomationRules />
          </TabsContent>
          <TabsContent value="email">
            <EmailSettings />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Automations;
