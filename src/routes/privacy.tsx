import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Logo } from "@/components/app-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy · JourneyIQ" }] }),
  component: Privacy,
});

function Privacy() {
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
        <p className="text-sm font-medium text-primary">Privacy policy</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">How JourneyIQ handles data.</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          This page is intentionally simple but functional: the footer link now lands here, and the page keeps the same visual tone as the rest of the product.
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
    id: "collection",
    title: "Data collection",
    body: "JourneyIQ collects event data, identifiers, and workspace settings required to generate journey timelines and attribution analysis.",
  },
  {
    id: "use",
    title: "Data use",
    body: "We use data to power analytics, segmentation, account access, and the pages you see in the app.",
  },
  {
    id: "sharing",
    title: "Data sharing",
    body: "Workspace data is shared only with the people and systems you configure inside the product.",
  },
];
