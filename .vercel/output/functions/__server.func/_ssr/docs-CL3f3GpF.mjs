import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as BookOpen, k as ArrowRight, t as Workflow, u as ShieldCheck, w as ChartLine } from "../_libs/lucide-react.mjs";
import { n as Card, r as Logo } from "./app-shell-X1B0YxQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/docs-CL3f3GpF.js
var import_jsx_runtime = require_jsx_runtime();
function Docs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm font-medium text-muted-foreground hover:text-foreground",
					children: "Back home"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid max-w-[1240px] gap-8 px-6 py-16 lg:grid-cols-[240px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-3 text-sm",
				children: [toc.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${item.id}`,
					className: "block rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
					children: item.label
				}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					className: "mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90",
					children: ["Open dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: "getting-started",
						className: "scroll-mt-24 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" }), " Getting started"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Connect your sources, open the dashboard, and review the first set of journeys."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: "tracking",
						className: "scroll-mt-24 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "h-4 w-4" }), " Tracking setup"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Use the same UI language as the rest of the product, but keep the documentation focused on the implementation steps that actually matter."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: "attribution",
						className: "scroll-mt-24 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-4 w-4" }), " Attribution model"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Compare sources side by side, then validate the number you want to plan against."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: "security",
						className: "scroll-mt-24 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " Security and access"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Team access, identity resolution, and other administrative controls live in the app and are reachable from the settings page."
						})]
					})
				]
			})]
		})]
	});
}
var toc = [
	{
		id: "getting-started",
		label: "Getting started"
	},
	{
		id: "tracking",
		label: "Tracking setup"
	},
	{
		id: "attribution",
		label: "Attribution model"
	},
	{
		id: "security",
		label: "Security and access"
	}
];
//#endregion
export { Docs as component };
