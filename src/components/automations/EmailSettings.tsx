
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function EmailSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Configuration</CardTitle>
        <CardDescription>
          Configure your email signature and writing style for automated responses
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Email Signature</Label>
          <Textarea 
            placeholder="Enter your email signature..."
            className="min-h-[100px]"
          />
          <p className="text-sm text-muted-foreground">
            This signature will be added to all automated emails
          </p>
        </div>

        <div className="space-y-2">
          <Label>Writing Style</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select writing style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            This will affect the tone of automated responses
          </p>
        </div>

        <div className="space-y-2">
          <Label>Response Templates</Label>
          <Textarea 
            placeholder="Enter default response templates..."
            className="min-h-[150px]"
          />
          <p className="text-sm text-muted-foreground">
            Use {"{name}"}, {"{company}"}, {"{issue}"} as variables in your templates
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
