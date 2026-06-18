import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BarChart3, GitBranch, Mail, ShoppingBag, Smartphone, Sparkles, Users, Globe, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/app-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JourneyIQ — Customer Journey Intelligence for Marketing Teams" },
      { name: "description", content: "JourneyIQ unifies customer interactions across ads, websites, email, and apps to reveal which touchpoints actually drive conversions." },
      { property: "og:title", content: "JourneyIQ — Customer Journey Intelligence" },
      { property: "og:description", content: "Understand every customer journey. Personalize every experience." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#product" className="hover:text-foreground">Product</a>
            <a href="#journey" className="hover:text-foreground">Journeys</a>
            <a href="#attribution" className="hover:text-foreground">Attribution</a>
            <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
            <Link to="/docs" className="hover:text-foreground">Docs</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/signin" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline">Sign in</Link>
            <Link
              to="/dashboard"
              className="inline-flex h-9 items-center rounded-lg bg-foreground px-3.5 text-sm font-medium text-background transition hover:opacity-90"
            >
              Open app
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-20 pb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            New · Cross-channel attribution v2 is live
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Understand every customer journey.
            <span className="block text-muted-foreground">Personalize every experience.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            JourneyIQ unifies customer interactions across ads, websites, email, and apps to create
            seamless experiences and reveal which touchpoints actually drive conversions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              View Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/journeys"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              See Customer Journey
            </Link>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Used by marketing teams at growth-stage commerce, SaaS, and fintech brands.
          </p>
        </div>

        {/* Dashboard mock */}
        <div className="relative mx-auto max-w-[1180px] px-6 pb-24">
          <DashboardMock />
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span>Northwind Run Co.</span>
          <span>·</span>
          <span>Halcyon Labs</span>
          <span>·</span>
          <span>Meridian Fitness</span>
          <span>·</span>
          <span>Parable Coffee</span>
          <span>·</span>
          <span>Polestar Skincare</span>
          <span>·</span>
          <span>Atlas Outdoors</span>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">One platform</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Every touchpoint, joined to the customer who made it.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stop reconciling dashboards. JourneyIQ stitches ad impressions, site sessions, email
            opens, and app events into a single timeline per customer — then explains what moved
            them to convert.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey explainer */}
      <section id="journey" className="border-t border-border bg-surface-muted">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-primary">Customer Journeys</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Watch how a stranger becomes a customer.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each journey shows the touchpoints, the moment intent changed, and the channel that
              tipped the decision. No more guessing whether the email or the ad did the work.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Step-level conversion probability and dropoff risk",
                "Sentiment estimation from on-site and message behavior",
                "Plain-English explanations next to every step",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <JourneyMock />
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section id="attribution" className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <AttributionMock />
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Attribution Intelligence</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              When Meta, GA4, and Shopify disagree — we tell you who's right.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The AI Attribution Investigator compares numbers across your stack, finds the cause
              of the discrepancy (windows, dedup, cross-device), and gives you a single
              defensible number to plan against.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Your customer is one timeline. Your tools should be too.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              View Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/insights"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Explore Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface-muted">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <Logo />
          <p>© 2026 JourneyIQ, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/security" className="hover:text-foreground">Security</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  { icon: Users, title: "Unified Customer Profiles", body: "Every interaction, every channel, stitched to one identity. No more 7 dashboards for 1 person." },
  { icon: GitBranch, title: "Journey Visualization", body: "See the path from first impression to checkout — with conversion probability at every step." },
  { icon: BarChart3, title: "Multi-Touch Attribution", body: "Move past last-click. Credit Instagram, email, and search for the share they actually earned." },
  { icon: Sparkles, title: "AI Insights", body: "A senior marketing analyst, always on. Surfaces what changed, why, and what to do about it." },
  { icon: Globe, title: "Every Channel", body: "Meta, Google, Email, SMS, Website, Mobile App. Connect once, query forever." },
  { icon: ShoppingBag, title: "Revenue Truth", body: "Reconcile Meta, GA4, and Shopify automatically. Plan against a number you can defend." },
];

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
      {/* topbar */}
      <div className="flex h-10 items-center gap-1.5 border-b border-border bg-surface-muted px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground">app.journeyiq.com / dashboard</span>
      </div>
      <div className="grid grid-cols-12 gap-4 p-5">
        <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-8 md:grid-cols-4">
          {[
            { l: "Revenue", v: "$1.84M", d: "+12.4%" },
            { l: "Conversions", v: "4,621", d: "+8.1%" },
            { l: "Journey Completion", v: "68.1%", d: "+3.2%" },
            { l: "ROAS", v: "4.6x", d: "+0.3" },
          ].map((k) => (
            <div key={k.l} className="rounded-xl border border-border bg-surface p-3">
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{k.l}</p>
              <p className="mt-1 text-lg font-semibold">{k.v}</p>
              <p className="text-[11px] font-medium text-success">{k.d}</p>
            </div>
          ))}
          <div className="col-span-2 rounded-xl border border-border bg-surface p-4 md:col-span-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium">Revenue · last 10 weeks</p>
              <span className="text-xs text-muted-foreground">Weekly</span>
            </div>
            <MiniAreaChart />
          </div>
        </div>
        <div className="col-span-12 space-y-3 md:col-span-4">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-sm font-medium">Top journey</p>
            <p className="mt-1 text-xs text-muted-foreground">Instagram → Site → Email → Purchase</p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="rounded-md bg-success/10 px-1.5 py-0.5 font-medium text-success">+42%</span>
              <span className="text-muted-foreground">vs control</span>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-sm font-medium">AI Insight</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Mobile users in Bangalore show 24% higher cart abandonment — investigate Android checkout perf.
            </p>
            <Link to="/insights" className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
              Open insight <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniAreaChart() {
  const pts = [42, 51, 47, 58, 62, 71, 68, 79, 84, 91];
  const max = Math.max(...pts);
  const w = 600;
  const h = 120;
  const step = w / (pts.length - 1);
  const points = pts.map((v, i) => [i * step, h - (v / max) * (h - 10) - 4] as const);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-28 w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function JourneyMock() {
  const steps = [
    { icon: Sparkles, label: "Instagram Ad", t: "Jun 02", p: 18 },
    { icon: Globe, label: "Website Visit", t: "Jun 02", p: 27 },
    { icon: ShoppingBag, label: "Product View", t: "Jun 03", p: 41 },
    { icon: Mail, label: "Email Reminder", t: "Jun 05", p: 83 },
    { icon: CheckCircle2, label: "Purchase", t: "Jun 05", p: 100 },
  ];
  return (
    <div className="space-y-3">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
            <s.icon className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{s.label}</span>
              <span className="text-xs text-muted-foreground">{s.t}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${s.p}%` }}
              />
            </div>
          </div>
          <span className="w-10 text-right text-xs font-medium tabular-nums">{s.p}%</span>
        </div>
      ))}
    </div>
  );
}

function AttributionMock() {
  const rows = [
    { name: "Meta Ads", v: 180, color: "bg-chart-1" },
    { name: "GA4", v: 120, color: "bg-chart-4" },
    { name: "Shopify", v: 110, color: "bg-chart-2" },
  ];
  const max = 200;
  return (
    <div>
      <p className="text-sm font-medium">Summer Runners — conversions reported</p>
      <p className="mt-1 text-xs text-muted-foreground">Three sources, three numbers.</p>
      <div className="mt-5 space-y-3">
        {rows.map((r) => (
          <div key={r.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{r.name}</span>
              <span className="font-semibold tabular-nums">{r.v}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
              <div className={`h-full ${r.color}`} style={{ width: `${(r.v / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-border bg-surface p-3 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Why the gap?</span> Meta uses a 7-day click window
        and counts cross-device. GA4 excludes app sessions. Shopify only counts paid orders.
        Use <span className="font-medium text-foreground">110</span> as truth; credit Meta with ~38% influence.
      </div>
    </div>
  );
}
