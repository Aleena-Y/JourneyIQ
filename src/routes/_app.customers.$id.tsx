import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/app-shell";
import { customers, customerTimeline } from "@/lib/mock-data";
import { ArrowLeft, Mail, MessageSquare, Sparkles, Instagram, Globe, Smartphone } from "lucide-react";

export const Route = createFileRoute("/_app/customers/$id")({
  head: () => ({ meta: [{ title: "Customer · JourneyIQ" }] }),
  loader: ({ params }) => {
    const customer = customers.find((c) => c.id === params.id);
    if (!customer) throw notFound();
    return { customer };
  },
  component: CustomerDetail,
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <p className="text-sm text-muted-foreground">Customer not found.</p>
      <Link to="/customers" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">Back to customers</Link>
    </div>
  ),
});

const channelIcon: Record<string, typeof Mail> = {
  Email: Mail,
  Website: Globe,
  Instagram: Instagram,
  "Mobile App": Smartphone,
  SMS: MessageSquare,
};

function CustomerDetail() {
  const { customer } = Route.useLoaderData();

  return (
    <>
      <Link to="/customers" className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All customers
      </Link>

      <PageHeader
        title={customer.name}
        subtitle={`${customer.email} · ${customer.location}`}
        actions={
          <>
            <button className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted">Send email</button>
            <button className="h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90">Add to segment</button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-base font-semibold">Activity timeline</h3>
            <p className="text-xs text-muted-foreground">Cross-channel interactions, newest first</p>
            <ol className="mt-5 space-y-4">
              {customerTimeline.map((e, i) => {
                const Icon = channelIcon[e.channel] ?? Globe;
                return (
                  <li key={i} className="grid grid-cols-[auto_1fr_auto] items-start gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-foreground">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 pt-1">
                      <p className="text-sm font-medium">{e.action}</p>
                      <p className="text-xs text-muted-foreground">{e.channel}</p>
                    </div>
                    <p className="pt-1 text-xs text-muted-foreground">{e.time}</p>
                  </li>
                );
              })}
            </ol>
          </Card>

          <Card className="p-6">
            <h3 className="text-base font-semibold">Purchase history</h3>
            <table className="mt-4 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="py-2 font-medium">Order</th>
                  <th className="py-2 font-medium">Item</th>
                  <th className="py-2 font-medium">Channel</th>
                  <th className="py-2 text-right font-medium">Amount</th>
                  <th className="py-2 text-right font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {([
                  { o: "#10248", i: "Velocity Pro 3 running shoes", c: "Website", a: "$164", d: "Apr 18, 2026" },
                  { o: "#09812", i: "Trail Socks (3-pack)", c: "Mobile App", a: "$28", d: "Feb 04, 2026" },
                  { o: "#09120", i: "Running cap + visor bundle", c: "Website", a: "$42", d: "Nov 22, 2025" },
                ] as const).map((r) => (
                  <tr key={r.o} className="border-b border-border last:border-0">
                    <td className="py-2 font-mono text-xs text-muted-foreground">{r.o}</td>
                    <td className="py-2">{r.i}</td>
                    <td className="py-2 text-muted-foreground">{r.c}</td>
                    <td className="py-2 text-right tabular-nums">{r.a}</td>
                    <td className="py-2 text-right text-muted-foreground">{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        <aside className="space-y-4">
          <Card className="p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Lifetime value</p>
            <p className="mt-1 text-2xl font-semibold">{customer.ltv}</p>
            <p className="text-xs text-muted-foreground">across 3 purchases</p>
          </Card>

          <Card className="p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Interests</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {customer.interests.map((i: string) => (
                <span key={i} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium">{i}</span>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Predictions
            </div>
            <div className="mt-3">
              <p className="text-xs text-muted-foreground">Next purchase probability (30d)</p>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${customer.nextPurchaseProb}%` }} />
                </div>
                <span className="text-sm font-semibold tabular-nums">{customer.nextPurchaseProb}%</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground">Predicted next interest</p>
              <p className="mt-1 text-sm font-medium">{customer.predictedInterest}</p>
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Channel reach</p>
            <ul className="mt-3 space-y-2 text-sm">
              {["Email · subscribed", "Instagram · matched", "Mobile App · installed", "SMS · not opted in"].map((c) => (
                <li key={c} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{c.split(" · ")[0]}</span>
                  <span className="text-xs font-medium">{c.split(" · ")[1]}</span>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>
    </>
  );
}
