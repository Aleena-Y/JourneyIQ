import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, LineChart, ShieldCheck, Workflow } from "lucide-react";
import { Card, Logo } from "@/components/app-shell";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: "Docs · JourneyIQ" }] }),
  component: Docs,
});

function Docs() {
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

      <main className="mx-auto grid max-w-[1240px] gap-8 px-6 py-16 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-3 text-sm">
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="block rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
              {item.label}
            </a>
          ))}
          <Link to="/dashboard" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90">
            Open dashboard <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>

        <div className="space-y-4">
          <Card id="getting-started" className="scroll-mt-24 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" /> Getting started
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Connect your sources, open the dashboard, and review the first set of journeys.
            </p>
          </Card>

          <Card id="tracking" className="scroll-mt-24 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Workflow className="h-4 w-4" /> Tracking setup
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Use the same UI language as the rest of the product, but keep the documentation focused on the implementation steps that actually matter.
            </p>
          </Card>

          <Card id="attribution" className="scroll-mt-24 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <LineChart className="h-4 w-4" /> Attribution model
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Compare sources side by side, then validate the number you want to plan against.
            </p>
          </Card>

          <Card id="security" className="scroll-mt-24 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" /> Security and access
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Team access, identity resolution, and other administrative controls live in the app and are reachable from the settings page.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}

const toc = [
  { id: "getting-started", label: "Getting started" },
  { id: "tracking", label: "Tracking setup" },
  { id: "attribution", label: "Attribution model" },
  { id: "security", label: "Security and access" },
];
