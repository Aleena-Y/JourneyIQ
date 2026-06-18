import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Card, Logo } from "@/components/app-shell";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Sign in · JourneyIQ" }] }),
  component: SignIn,
});

function SignIn() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6">
          <Logo />
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-primary">Welcome back</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Sign in to review journeys, attribution, and revenue signals.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            JourneyIQ keeps the same visual language across marketing and product surfaces, so you can move between the landing site and the app without a jarring reset.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Sparkles, label: "AI insights" },
              { icon: ShieldCheck, label: "Team access" },
              { icon: ArrowRight, label: "Fast routing" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <item.icon className="h-4 w-4 text-primary" />
                <p className="mt-3 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="p-6 shadow-elevated">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                defaultValue="marina@northwindrun.com"
                className="mt-1.5 h-11 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                defaultValue="journeyiq"
                className="mt-1.5 h-11 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <Link
              to="/dashboard"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              Continue to dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/docs" className="block text-center text-sm font-medium text-muted-foreground hover:text-foreground">
              Need help? Read the docs
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
}
