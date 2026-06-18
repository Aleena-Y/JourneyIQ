import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Instagram, Globe, ShoppingBag, Mail, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { Card, PageHeader } from "@/components/app-shell";
import { journeySteps, journeyInsights, recentJourneys } from "@/lib/mock-data";
import { StatusPill } from "./_app.dashboard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/journeys")({
  head: () => ({ meta: [{ title: "Journeys · JourneyIQ" }] }),
  component: Journeys,
});

const iconFor: Record<string, typeof Instagram> = {
  "Instagram Ad": Instagram,
  "Website Visit": Globe,
  "Product View": ShoppingBag,
  "Email Reminder": Mail,
  Purchase: CheckCircle2,
};

function Journeys() {
  const [activeId, setActiveId] = useState<number>(4);
  const active = journeySteps.find((s) => s.id === activeId)!;

  return (
    <>
      <PageHeader
        title="Customer Journeys"
        subtitle="Reconstructed paths from first impression to conversion"
        actions={
          <>
            <button className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted">All segments</button>
            <button className="h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90">New journey rule</button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Card className="p-6">
          <div className="mb-1 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Journey #j-8421 · Aarav Mehta</h3>
              <p className="text-xs text-muted-foreground">Acquired via Instagram · 5 touchpoints over 3 days · $189 revenue</p>
            </div>
            <StatusPill status="Completed" />
          </div>

          <ol className="mt-6 space-y-3">
            {journeySteps.map((step, i) => {
              const Icon = iconFor[step.channel] ?? Globe;
              const isActive = step.id === activeId;
              return (
                <li key={step.id}>
                  <button
                    onClick={() => setActiveId(step.id)}
                    onMouseEnter={() => setActiveId(step.id)}
                    className={cn(
                      "group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border p-4 text-left transition",
                      isActive
                        ? "border-primary/40 bg-primary/[0.04] shadow-soft"
                        : "border-border bg-card hover:border-border hover:bg-muted/30",
                    )}
                  >
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "grid h-10 w-10 place-items-center rounded-xl transition",
                        isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground",
                      )}>
                        <Icon className="h-5 w-5" />
                      </div>
                      {i < journeySteps.length - 1 && (
                        <span className="mt-1 h-6 w-px bg-border" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold">{step.channel}</span>
                        <span className="text-xs text-muted-foreground"><Clock className="-mt-0.5 mr-0.5 inline h-3 w-3" />{step.timestamp}</span>
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">{step.label}</p>
                    </div>
                    <div className="hidden text-right md:block">
                      <p className="text-xs text-muted-foreground">Conv. probability</p>
                      <p className="text-lg font-semibold tabular-nums">{step.probability}%</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </Card>

        {/* Side: step details + AI explanations */}
        <div className="space-y-4">
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Step detail</p>
            <h3 className="mt-1 text-base font-semibold">{active.channel}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{active.label}</p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <Stat label="Conv. prob." value={`${active.probability}%`} tone="primary" />
              <Stat label="Dropoff risk" value={`${active.dropoff}%`} tone={active.dropoff > 40 ? "warn" : "muted"} />
              <Stat label="Sentiment" value={active.sentiment} tone="muted" />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{active.note}</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI explanation
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              {active.channel === "Email Reminder"
                ? "The email reminder increased conversion likelihood by +42% for this customer. Day-2 reminders with a small incentive are the highest-leverage touchpoint in the Running segment."
                : active.channel === "Instagram Ad"
                ? "First-touch impressions on Meta typically carry 18–24% conversion probability for the Running segment. This impression is in the normal range."
                : active.channel === "Product View"
                ? "Three product views in 48h is a strong intent signal. Customers in this state convert within 4 days 71% of the time when contacted."
                : active.channel === "Website Visit"
                ? "A 2-minute session viewing 4 products without an add-to-cart suggests price comparison. Consider showing a price-match badge to similar visitors."
                : "Completed purchase. Customer is now eligible for the post-purchase onboarding flow and loyalty enrollment."}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-warning">
              <AlertTriangle className="h-3.5 w-3.5" /> Risk
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Similar journeys drop off most often between <span className="font-medium text-foreground">Website Visit</span> and <span className="font-medium text-foreground">Product View</span>. A retargeting ad within 24h reduces that risk by 31%.
            </p>
          </Card>
        </div>
      </div>

      {/* Insights row */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Journey-level insights</h3>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {journeyInsights.map((i) => (
            <Card key={i.title} className="p-5">
              <h4 className="text-sm font-semibold leading-snug">{i.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Confidence</span>
                <span className="font-semibold tabular-nums">{i.confidence}%</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Other journeys */}
      <Card className="mt-8">
        <div className="border-b border-border px-6 py-4">
          <h3 className="text-base font-semibold">Recent journeys</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Current stage</th>
                <th className="px-6 py-3 font-medium">Steps</th>
                <th className="px-6 py-3 font-medium">Value</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentJourneys.map((j) => (
                <tr key={j.id} className="border-b border-border last:border-0 hover:bg-muted/40">
                  <td className="px-6 py-3 font-mono text-xs text-muted-foreground">{j.id}</td>
                  <td className="px-6 py-3 font-medium">{j.customer}</td>
                  <td className="px-6 py-3 text-muted-foreground">{j.stage}</td>
                  <td className="px-6 py-3 tabular-nums">{j.steps}</td>
                  <td className="px-6 py-3 tabular-nums">{j.value}</td>
                  <td className="px-6 py-3"><StatusPill status={j.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "primary" | "warn" | "muted" }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={cn(
        "mt-1 text-sm font-semibold tabular-nums",
        tone === "primary" && "text-primary",
        tone === "warn" && "text-warning",
      )}>{value}</p>
    </div>
  );
}
