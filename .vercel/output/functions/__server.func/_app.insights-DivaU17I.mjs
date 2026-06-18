import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { S as ChevronDown, s as Sparkles } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { t as aiInsights } from "./_ssr/mock-data-BIM7B1_h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.insights-DivaU17I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Insights() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "AI Insights",
		subtitle: "Like having a senior marketing analyst always reading your data",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted",
			children: "All impact"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90",
			children: "Re-run analysis"
		})] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: aiInsights.map((insight, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: cn("overflow-hidden transition", isOpen && "shadow-card"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(isOpen ? null : i),
					className: "grid w-full grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-6 py-5 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-9 w-9 place-items-center rounded-lg", insight.impact === "high" && "bg-primary/10 text-primary", insight.impact === "medium" && "bg-warning/15 text-warning", insight.impact === "low" && "bg-secondary text-muted-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "truncate text-sm font-semibold sm:text-base",
								children: insight.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: insight.evidence
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden text-right md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-wide text-muted-foreground",
								children: "Confidence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold tabular-nums",
								children: [insight.confidence, "%"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 text-muted-foreground transition", isOpen && "rotate-180") })
					]
				}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-surface px-6 py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 md:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wide text-muted-foreground",
							children: "Supporting evidence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm leading-relaxed",
							children: insight.evidence
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-wide text-primary",
									children: "Suggested action"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed",
									children: insight.action
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "h-8 rounded-lg bg-primary px-3 text-xs font-medium text-primary-foreground hover:opacity-90",
										children: "Apply suggestion"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "h-8 rounded-lg border border-border bg-card px-3 text-xs font-medium hover:bg-muted",
										children: "Dismiss"
									})]
								})
							]
						})]
					})
				})]
			}, insight.title);
		})
	})] });
}
//#endregion
export { Insights as component };
