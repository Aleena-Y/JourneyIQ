import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/app-shell";
import { Check } from "lucide-react";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings · JourneyIQ" }] }),
  component: Settings,
});

function Settings() {
  const sections = [
    { id: "workspace", label: "Workspace" },
    { id: "integrations", label: "Integrations" },
    { id: "identity-resolution", label: "Identity resolution" },
    { id: "notifications", label: "Notifications" },
    { id: "team", label: "Team" },
    { id: "billing", label: "Billing" },
  ] as const;

  return (
    <>
      <PageHeader title="Settings" subtitle="Workspace, integrations, and team management" />

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <nav className="space-y-1 text-sm">
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`block rounded-lg px-3 py-2 ${i === 1 ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="space-y-4">
          <Card id="workspace" className="scroll-mt-24 p-6">
            <h3 className="text-base font-semibold">Workspace</h3>
            <p className="text-xs text-muted-foreground">Core workspace settings for Northwind Run Co.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Workspace name" value="Northwind Run Co." />
              <Field label="Default timezone" value="Asia/Kolkata (IST)" />
              <Field label="Default currency" value="USD" />
              <Field label="Attribution window" value="30 days" />
            </div>
          </Card>

          <Card id="integrations" className="scroll-mt-24 p-6">
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

          <Card id="identity-resolution" className="scroll-mt-24 p-6">
            <h3 className="text-base font-semibold">Identity resolution</h3>
            <p className="text-xs text-muted-foreground">How JourneyIQ merges anonymous and known activity</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-medium">Matching rules</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Email, device fingerprint, and account ID are matched to the same customer timeline.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-medium">Fallback behavior</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Unresolved events stay anonymous until a known identifier appears later in the journey.
                </p>
              </div>
            </div>
          </Card>

          <Card id="notifications" className="scroll-mt-24 p-6">
            <h3 className="text-base font-semibold">Notifications</h3>
            <p className="text-xs text-muted-foreground">Alerts for key changes in attribution and journey health</p>
            <div className="mt-4 space-y-3">
              {[
                { name: "Weekly summary", detail: "Sent every Monday at 8:00 AM" },
                { name: "Anomaly alerts", detail: "Triggered when conversion drops exceed 15%" },
                { name: "Integration failures", detail: "Immediate Slack and email notifications" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium">On</span>
                </div>
              ))}
            </div>
          </Card>

          <Card id="team" className="scroll-mt-24 p-6">
            <h3 className="text-base font-semibold">Team</h3>
            <p className="text-xs text-muted-foreground">Who can view data, edit settings, and export reports</p>
            <div className="mt-4 divide-y divide-border">
              {[
                { name: "Maya Rao", role: "Admin" },
                { name: "Jordan Lee", role: "Analyst" },
                { name: "Priya Patel", role: "Viewer" },
              ].map((member) => (
                <div key={member.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <button className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium hover:bg-muted">Edit</button>
                </div>
              ))}
            </div>
          </Card>

          <Card id="billing" className="scroll-mt-24 p-6">
            <h3 className="text-base font-semibold">Billing</h3>
            <p className="text-xs text-muted-foreground">Subscription and invoice details</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Plan</p>
                <p className="mt-1.5 text-sm font-medium">Growth</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Next invoice</p>
                <p className="mt-1.5 text-sm font-medium">Jul 01, 2026</p>
              </div>
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
