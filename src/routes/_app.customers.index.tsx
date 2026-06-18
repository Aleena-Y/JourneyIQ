import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/app-shell";
import { customers } from "@/lib/mock-data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/_app/customers/")({
  head: () => ({ meta: [{ title: "Customers · JourneyIQ" }] }),
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <>
      <PageHeader
        title="Customers"
        subtitle="12,408 known profiles · 4,182 with activity this month"
        actions={
          <>
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search by name or email"
                className="h-9 w-64 rounded-lg border border-input bg-card pl-8 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <button className="h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90">Create segment</button>
          </>
        }
      />

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Location</th>
                <th className="px-6 py-3 font-medium">Interests</th>
                <th className="px-6 py-3 font-medium">LTV</th>
                <th className="px-6 py-3 font-medium">Next purchase</th>
                <th className="px-6 py-3 font-medium">Last seen</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/40">
                  <td className="px-6 py-3">
                    <Link to="/customers/$id" params={{ id: c.id }} className="group flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-xs font-semibold">
                        {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium group-hover:underline">{c.name}</span>
                        <span className="block text-xs text-muted-foreground">{c.email}</span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 py-3 text-muted-foreground">{c.location}</td>
                  <td className="px-6 py-3">
                    <div className="flex flex-wrap gap-1">
                      {c.interests.slice(0, 3).map((i) => (
                        <span key={i} className="rounded-md bg-secondary px-2 py-0.5 text-xs">{i}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-3 font-medium tabular-nums">{c.ltv}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${c.nextPurchaseProb}%` }} />
                      </div>
                      <span className="text-xs tabular-nums text-muted-foreground">{c.nextPurchaseProb}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-muted-foreground">{c.lastSeen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
