
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

const accountFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  customEmail: z.string().email("Invalid email address").optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function AccountSettings() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: "Roger Steel",
      email: "RogerSteel@musiccityaudi.com",
      customEmail: "RogerSteel_MusicCityAudi_AS5732_support@autosnaplive.com",
    },
  });

  const onSubmit = (data: AccountFormValues) => {
    console.log(data);
    toast.success("Account settings updated");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>
            Update your account settings and email preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Personal Contact Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormDescription>
                      Send any emails or threads to this address to start a new case. This email address serves as your personal support assistant and will be the sender on any email support threads for your user account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="customEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="custom@yourdomain.com" />
                    </FormControl>
                    <FormDescription>
                      This email will be used for sending communications to your clients
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button type="submit">Save Changes</Button>
                <Button variant="outline">Open Email Inbox</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>
            Manage your subscription and billing details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="font-medium">Current Plan</div>
            <div className="text-sm text-muted-foreground mt-1">Free Plan</div>
          </div>
          <Button variant="outline">Upgrade Plan</Button>
        </CardContent>
      </Card>
    </div>
  );
}
