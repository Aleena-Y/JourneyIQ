import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/app-shell";
import { Check } from "lucide-react";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings · JourneyIQ" }] }),
  component: Settings,
});

function Settings() {
  return (
    <>
      <PageHeader title="Settings" subtitle="Workspace, integrations, and team management" />

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <nav className="space-y-1 text-sm">
          {["Workspace", "Integrations", "Identity resolution", "Notifications", "Team", "Billing"].map((s, i) => (
            <a
              key={s}
              href="#"
              className={`block rounded-lg px-3 py-2 ${i === 1 ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              {s}
            </a>
          ))}
        </nav>

        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-base font-semibold">Connected integrations</h3>
            <p className="text-xs text-muted-foreground">Channels and data sources sending events into JourneyIQ</p>
            <div className="mt-4 divide-y divide-border">
              {[
                { name: "Meta Ads", desc: "Northwind Run Co. · Ad Account 894...321", on: true },
                { name: "Google Ads", desc: "MCC linked · 4 sub-accounts", on: true },
                { name: "GA4", desc: "Property 412889102", on: true },
                { name: "Shopify", desc: "northwind-run.myshopify.com", on: true },
                { name: "Klaviyo (Email)", desc: "API key · refreshed 6 days ago", on: true },
                { name: "Segment", desc: "Not connected", on: false },
              ].map((i) => (
                <div key={i.name} className="grid grid-cols-[1fr_auto] items-center gap-4 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{i.name}</p>
                    <p className="text-xs text-muted-foreground">{i.desc}</p>
                  </div>
                  {i.on ? (
                    <span className="inline-flex items-center gap-1 rounded-md bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                      <Check className="h-3 w-3" /> Connected
                    </span>
                  ) : (
                    <button className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium hover:bg-muted">Connect</button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-base font-semibold">Workspace</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Workspace name" value="Northwind Run Co." />
              <Field label="Default timezone" value="Asia/Kolkata (IST)" />
              <Field label="Default currency" value="USD" />
              <Field label="Attribution window" value="30 days" />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        defaultValue={value}
        className="mt-1.5 h-9 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
      />
    </div>
  );
}
