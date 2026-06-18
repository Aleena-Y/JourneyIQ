import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, PageHeader } from "@/components/app-shell";
import { aiInsights } from "@/lib/mock-data";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/insights")({
  head: () => ({ meta: [{ title: "AI Insights · JourneyIQ" }] }),
  component: Insights,
});

function Insights() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader
        title="AI Insights"
        subtitle="Like having a senior marketing analyst always reading your data"
        actions={
          <>
            <button className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted">All impact</button>
            <button className="h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90">Re-run analysis</button>
          </>
        }
      />

      <div className="space-y-3">
        {aiInsights.map((insight, i) => {
          const isOpen = open === i;
          return (
            <Card key={insight.title} className={cn("overflow-hidden transition", isOpen && "shadow-card")}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-6 py-5 text-left"
              >
                <span className={cn(
                  "grid h-9 w-9 place-items-center rounded-lg",
                  insight.impact === "high" && "bg-primary/10 text-primary",
                  insight.impact === "medium" && "bg-warning/15 text-warning",
                  insight.impact === "low" && "bg-secondary text-muted-foreground",
                )}>
                  <Sparkles className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold sm:text-base">{insight.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{insight.evidence}</p>
                </div>
                <div className="hidden text-right md:block">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Confidence</p>
                  <p className="text-sm font-semibold tabular-nums">{insight.confidence}%</p>
                </div>
                <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition", isOpen && "rotate-180")} />
              </button>
              {isOpen && (
                <div className="border-t border-border bg-surface px-6 py-5">
                  <div className="grid gap-5 md:grid-cols-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Supporting evidence</p>
                      <p className="mt-1.5 text-sm leading-relaxed">{insight.evidence}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[11px] uppercase tracking-wide text-primary">Suggested action</p>
                      <p className="mt-1.5 text-sm leading-relaxed">{insight.action}</p>
                      <div className="mt-4 flex gap-2">
                        <button className="h-8 rounded-lg bg-primary px-3 text-xs font-medium text-primary-foreground hover:opacity-90">Apply suggestion</button>
                        <button className="h-8 rounded-lg border border-border bg-card px-3 text-xs font-medium hover:bg-muted">Dismiss</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
}
