import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Logo } from "@/components/app-shell";

export const Route = createFileRoute("/security")({
  head: () => ({ meta: [{ title: "Security · JourneyIQ" }] }),
  component: Security,
});

function Security() {
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

      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium text-primary">Security</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Controls that keep the product usable and the route working.</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          The footer link now lands on a real page, and the page itself points back into the app so the navigation loop stays intact.
        </p>

        <div className="mt-8 space-y-4">
          {sections.map((section) => (
            <Card key={section.id} id={section.id} className="scroll-mt-24 p-6">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

const sections = [
  {
    id: "access",
    title: "Access control",
    body: "The settings page exposes workspace, team, and identity controls so administrators can manage access from a single place.",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    body: "Application errors are reported through the existing error capture flow, and failed routes still have a home link.",
  },
  {
    id: "support",
    title: "Support",
    body: "If you need a different path, the sign-in and docs pages are now reachable from the homepage and footer.",
  },
];
