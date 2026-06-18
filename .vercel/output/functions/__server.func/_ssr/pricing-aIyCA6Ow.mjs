import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, k as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Card, r as Logo } from "./app-shell-X1B0YxQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-aIyCA6Ow.js
var import_jsx_runtime = require_jsx_runtime();
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/docs",
						className: "text-sm font-medium text-muted-foreground hover:text-foreground",
						children: "Docs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm font-medium text-muted-foreground hover:text-foreground",
						children: "Back home"
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-[1240px] px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-semibold tracking-tight md:text-5xl",
						children: "Simple plans for teams that need a real answer on attribution."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: "Every plan keeps the same polished interface and gives you a path into the app so the page itself is a working destination, not a dead end."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-3",
				children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: `p-6 ${plan.featured ? "border-primary shadow-elevated" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-muted-foreground",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-end gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl font-semibold tracking-tight",
								children: plan.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pb-1 text-sm text-muted-foreground",
								children: "/mo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: plan.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
							}, feature))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/signin",
							className: `mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition hover:opacity-90 ${plan.featured ? "bg-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:bg-muted"}`,
							children: [
								"Start with ",
								plan.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						})
					]
				}, plan.name))
			})]
		})]
	});
}
var plans = [
	{
		name: "Starter",
		price: "$39",
		description: "For teams validating the story before rolling it out broadly.",
		features: [
			"1 workspace",
			"3 data sources",
			"Basic dashboards"
		],
		featured: false
	},
	{
		name: "Growth",
		price: "$129",
		description: "For marketing teams who need the full journey and attribution workflow.",
		features: [
			"Unlimited dashboards",
			"AI insights",
			"Multi-touch attribution"
		],
		featured: true
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "For teams with governance, security, and scale requirements.",
		features: [
			"SSO and RBAC",
			"Custom retention",
			"Priority support"
		],
		featured: false
	}
];
//#endregion
export { Pricing as component };
