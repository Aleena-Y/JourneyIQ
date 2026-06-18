import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/app-shell";
import { channels } from "@/lib/mock-data";
import { ArrowUpRight, Facebook, Globe, Mail, Search, Smartphone } from "lucide-react";

export const Route = createFileRoute("/_app/channels")({
  head: () => ({ meta: [{ title: "Channels · JourneyIQ" }] }),
  component: ChannelsPage,
});

const iconMap: Record<string, typeof Facebook> = {
  "Meta Ads": Facebook,
  "Google Ads": Search,
  "Website (Organic)": Globe,
  Email: Mail,
  "Mobile App": Smartphone,
};

function ChannelsPage() {
  return (
    <>
      <PageHeader
        title="Channels"
        subtitle="Revenue, conversions, and attribution confidence across every connected channel"
        actions={
          <button className="h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Connect channel
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {channels.map((c) => {
          const Icon = iconMap[c.name] ?? Globe;
          return (
            <Card key={c.name} className="cursor-pointer p-6 transition hover:shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{c.name}</h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                <Stat label="Revenue" value={c.revenue} />
                <Stat label="ROI" value={c.roi} />
                <Stat label="Conversions" value={c.conversions.toLocaleString()} />
                <Stat label="Assisted" value={c.assisted.toLocaleString()} />
              </div>

              <div className="mt-5">
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Attribution confidence</span>
                  <span className="font-semibold tabular-nums">{c.confidence}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${c.confidence}%`,
                      background:
                        c.confidence >= 90
                          ? "var(--color-success)"
                          : c.confidence >= 80
                          ? "var(--color-primary)"
                          : "var(--color-warning)",
                    }}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-sm font-semibold tabular-nums">{value}</p>
    </div>
  );
}
