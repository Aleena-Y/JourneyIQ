import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/app-shell";
import { attributionConflicts } from "@/lib/mock-data";
import { Sparkles, Info } from "lucide-react";

export const Route = createFileRoute("/_app/attribution")({
  head: () => ({ meta: [{ title: "Attribution · JourneyIQ" }] }),
  component: Attribution,
});

function Attribution() {
  return (
    <>
      <PageHeader
        title="AI Attribution Investigator"
        subtitle="When your tools disagree on revenue, we find out who's right — and why."
      />

      <div className="space-y-6">
        {attributionConflicts.map((c) => {
          const max = Math.max(...c.sources.map((s) => s.value));
          return (
            <Card key={c.title} className="overflow-hidden">
              <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
                <div className="border-b border-border p-6 md:border-b-0 md:border-r">
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Conversion count per source · last 30 days</p>

                  <div className="mt-5 space-y-3">
                    {c.sources.map((s, i) => (
                      <div key={s.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{s.name}</span>
                          <span className="font-semibold tabular-nums">{s.value} {s.label}</span>
                        </div>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(s.value / max) * 100}%`,
                              background: `var(--color-chart-${(i % 5) + 1})`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
                    <Sparkles className="h-3.5 w-3.5" /> AI explanation
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">{c.explanation}</p>

                  <div className="mt-4 rounded-xl border border-border bg-surface p-4">
                    <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-success">
                      <Info className="h-3.5 w-3.5" /> Recommendation
                    </p>
                    <p className="mt-2 text-sm leading-relaxed">{c.recommendation}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-semibold tabular-nums">{c.confidence}%</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
