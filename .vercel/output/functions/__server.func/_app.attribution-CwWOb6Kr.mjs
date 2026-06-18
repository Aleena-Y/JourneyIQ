import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { g as Info, s as Sparkles } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { n as attributionConflicts } from "./_ssr/mock-data-BIM7B1_h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.attribution-CwWOb6Kr.js
var import_jsx_runtime = require_jsx_runtime();
function Attribution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "AI Attribution Investigator",
		subtitle: "When your tools disagree on revenue, we find out who's right — and why."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: attributionConflicts.map((c) => {
			const max = Math.max(...c.sources.map((s) => s.value));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-0 md:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-6 md:border-b-0 md:border-r",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Conversion count per source · last 30 days"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-3",
								children: c.sources.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: s.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold tabular-nums",
										children: [
											s.value,
											" ",
											s.label
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 h-2 overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full",
										style: {
											width: `${s.value / max * 100}%`,
											background: `var(--color-chart-${i % 5 + 1})`
										}
									})
								})] }, s.name))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI explanation"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed",
								children: c.explanation
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-xl border border-border bg-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3.5 w-3.5" }), " Recommendation"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed",
									children: c.recommendation
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Confidence"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold tabular-nums",
									children: [c.confidence, "%"]
								})]
							})
						]
					})]
				})
			}, c.title);
		})
	})] });
}
//#endregion
export { Attribution as component };
