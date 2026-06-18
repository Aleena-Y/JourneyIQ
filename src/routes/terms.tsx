import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Logo } from "@/components/app-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms · JourneyIQ" }] }),
  component: Terms,
});

function Terms() {
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
        <p className="text-sm font-medium text-primary">Terms of service</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">The working agreement for JourneyIQ.</h1>
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
    id: "accounts",
    title: "Accounts",
    body: "You are responsible for the access you grant to your workspace and for the accuracy of the data you upload.",
  },
  {
    id: "usage",
    title: "Acceptable use",
    body: "Use the product in ways that align with your internal policies and the laws that apply to your organization.",
  },
  {
    id: "changes",
    title: "Changes",
    body: "We may update these terms as the product evolves. The page will continue to be reachable from the footer.",
  },
];
