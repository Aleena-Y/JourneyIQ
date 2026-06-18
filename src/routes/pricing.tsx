import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Card, Logo } from "@/components/app-shell";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing · JourneyIQ" }] }),
  component: Pricing,
});

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6">
          <Logo />
          <div className="flex items-center gap-4">
            <Link to="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Back home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Pricing</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Simple plans for teams that need a real answer on attribution.</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every plan keeps the same polished interface and gives you a path into the app so the page itself is a working destination, not a dead end.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`p-6 ${plan.featured ? "border-primary shadow-elevated" : ""}`}>
              <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/signin"
                className={`mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition hover:opacity-90 ${plan.featured ? "bg-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:bg-muted"}`}
              >
                Start with {plan.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$39",
    description: "For teams validating the story before rolling it out broadly.",
    features: ["1 workspace", "3 data sources", "Basic dashboards"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$129",
    description: "For marketing teams who need the full journey and attribution workflow.",
    features: ["Unlimited dashboards", "AI insights", "Multi-touch attribution"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams with governance, security, and scale requirements.",
    features: ["SSO and RBAC", "Custom retention", "Priority support"],
    featured: false,
  },
];
