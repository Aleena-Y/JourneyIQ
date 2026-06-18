import { createFileRoute } from "@tanstack/react-router";
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, PageHeader } from "@/components/app-shell";
import { successMetrics, metricTrend } from "@/lib/mock-data";
import { TrendingUp } from "lucide-react";

export const Route = createFileRoute("/_app/metrics")({
  head: () => ({ meta: [{ title: "Success Metrics · JourneyIQ" }] }),
  component: Metrics,
});

function Metrics() {
  return (
    <>
      <PageHeader
        title="Success Metrics"
        subtitle="The numbers your team is measured on — explained in plain English."
        actions={
          <button className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted">Last 90 days</button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {successMetrics.map((m) => (
          <Card key={m.label} className="p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{m.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{m.value}</p>
            <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-success/10 px-1.5 py-0.5 text-xs font-medium text-success">
              <TrendingUp className="h-3 w-3" />
              {m.trend}
            </span>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.explain}</p>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-base font-semibold">ROAS trend</h3>
          <p className="text-xs text-muted-foreground">Weekly · paid Meta + Google</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metricTrend} margin={{ left: -10, right: 10, top: 10 }}>
                <defs>
                  <linearGradient id="r" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
                <Area dataKey="roas" stroke="var(--color-primary)" strokeWidth={2} fill="url(#r)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-base font-semibold">LTV & Journey completion</h3>
          <p className="text-xs text-muted-foreground">Tracking how loyal customers are getting</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metricTrend} margin={{ left: -10, right: 10, top: 10 }}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis yAxisId="left" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
                <Line yAxisId="left" dataKey="ltv" stroke="var(--color-chart-2)" strokeWidth={2} dot={false} />
                <Line yAxisId="right" dataKey="completion" stroke="var(--color-chart-4)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </>
  );
}
