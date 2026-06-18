import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, TrendingDown, Sparkles } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart, Cell } from "recharts";
import { Card, PageHeader } from "@/components/app-shell";
import { overviewMetrics, revenueTrend, channelMix, recentJourneys, journeyInsights } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard · JourneyIQ" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Last 30 days · All channels · 4,621 conversions across 12,408 journeys"
        actions={
          <>
            <button className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted">Last 30 days</button>
            <button className="h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90">Export</button>
          </>
        }
      />

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {overviewMetrics.map((m) => (
          <Card key={m.label} className="p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{m.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{m.value}</p>
            <div className="mt-2 flex items-center gap-1.5 text-xs">
              <span className="inline-flex items-center gap-0.5 rounded-md bg-success/10 px-1.5 py-0.5 font-medium text-success">
                <TrendingUp className="h-3 w-3" />
                {m.delta}
              </span>
              <span className="text-muted-foreground">{m.hint}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Chart + channel mix */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h3 className="text-base font-semibold">Revenue & Conversions</h3>
              <p className="text-xs text-muted-foreground">Weekly · attributed to tracked journeys</p>
            </div>
            <div className="flex gap-4 text-xs">
              <Legend color="var(--color-primary)" label="Revenue" />
              <Legend color="var(--color-chart-2)" label="Conversions" />
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="con" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} fill="url(#rev)" />
                <Area type="monotone" dataKey="conversions" stroke="var(--color-chart-2)" strokeWidth={2} fill="url(#con)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Revenue by channel</h3>
          <p className="text-xs text-muted-foreground">Multi-touch attribution</p>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelMix} layout="vertical" margin={{ left: 0, right: 10 }}>
                <CartesianGrid stroke="var(--color-border)" horizontal={false} strokeDasharray="3 3" />
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="channel" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} width={110} />
                <Tooltip
                  contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }}
                  formatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
                />
                <Bar dataKey="revenue" radius={[6, 6, 6, 6]} barSize={14}>
                  {channelMix.map((_, i) => (
                    <Cell key={i} fill={`var(--color-chart-${(i % 5) + 1})`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent + insights */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>
              <h3 className="text-base font-semibold">Recent journeys</h3>
              <p className="text-xs text-muted-foreground">Latest customer activity</p>
            </div>
            <Link to="/journeys" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
              View all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Current stage</th>
                  <th className="px-6 py-3 font-medium">Steps</th>
                  <th className="px-6 py-3 font-medium">Value</th>
                  <th className="px-6 py-3 font-medium">Started</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentJourneys.map((j) => (
                  <tr key={j.id} className="border-b border-border last:border-0 hover:bg-muted/40">
                    <td className="px-6 py-3 font-medium">{j.customer}</td>
                    <td className="px-6 py-3 text-muted-foreground">{j.stage}</td>
                    <td className="px-6 py-3 tabular-nums">{j.steps}</td>
                    <td className="px-6 py-3 tabular-nums">{j.value}</td>
                    <td className="px-6 py-3 text-muted-foreground">{j.started}</td>
                    <td className="px-6 py-3"><StatusPill status={j.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI Insight
            </div>
            <h3 className="mt-2 text-base font-semibold leading-snug">{journeyInsights[0].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{journeyInsights[0].body}</p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Confidence</span>
              <span className="font-semibold tabular-nums">{journeyInsights[0].confidence}%</span>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-warning">
              <TrendingDown className="h-3.5 w-3.5" /> Watch
            </div>
            <h3 className="mt-2 text-base font-semibold leading-snug">{journeyInsights[2].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{journeyInsights[2].body}</p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Confidence</span>
              <span className="font-semibold tabular-nums">{journeyInsights[2].confidence}%</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Completed: "bg-success/10 text-success",
    Active: "bg-primary/10 text-primary",
    "At risk": "bg-warning/15 text-warning-foreground",
    Dropped: "bg-destructive/10 text-destructive",
  };
  return (
    <span className={cn("inline-flex rounded-md px-2 py-0.5 text-xs font-medium", map[status] ?? "bg-muted text-muted-foreground")}>
      {status}
    </span>
  );
}
