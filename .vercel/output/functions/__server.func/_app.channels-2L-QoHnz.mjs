import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { O as ArrowUpRight, _ as Globe, c as Smartphone, d as Search, m as Mail, y as Facebook } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { i as channels } from "./_ssr/mock-data-BIM7B1_h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.channels-2L-QoHnz.js
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	"Meta Ads": Facebook,
	"Google Ads": Search,
	"Website (Organic)": Globe,
	Email: Mail,
	"Mobile App": Smartphone
};
function ChannelsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Channels",
		subtitle: "Revenue, conversions, and attribution confidence across every connected channel",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90",
			children: "Connect channel"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
		children: channels.map((c) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "cursor-pointer p-6 transition hover:shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-secondary text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(iconMap[c.name] ?? Globe, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: c.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-2 gap-x-4 gap-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Revenue",
								value: c.revenue
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "ROI",
								value: c.roi
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Conversions",
								value: c.conversions.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Assisted",
								value: c.assisted.toLocaleString()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1.5 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Attribution confidence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold tabular-nums",
								children: [c.confidence, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full",
								style: {
									width: `${c.confidence}%`,
									background: c.confidence >= 90 ? "var(--color-success)" : c.confidence >= 80 ? "var(--color-primary)" : "var(--color-warning)"
								}
							})
						})]
					})
				]
			}, c.name);
		})
	})] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[11px] uppercase tracking-wide text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-0.5 text-sm font-semibold tabular-nums",
		children: value
	})] });
}
//#endregion
export { ChannelsPage as component };
