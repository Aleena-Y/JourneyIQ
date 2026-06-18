import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Card, r as Logo } from "./app-shell-X1B0YxQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/security-De1cQsaz.js
var import_jsx_runtime = require_jsx_runtime();
function Security() {
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
			className: "mx-auto max-w-4xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					children: "Security"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-semibold tracking-tight",
					children: "Controls that keep the product usable and the route working."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted-foreground",
					children: "The footer link now lands on a real page, and the page itself points back into the app so the navigation loop stays intact."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-4",
					children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: section.id,
						className: "scroll-mt-24 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: section.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: section.body
						})]
					}, section.id))
				})
			]
		})]
	});
}
var sections = [
	{
		id: "access",
		title: "Access control",
		body: "The settings page exposes workspace, team, and identity controls so administrators can manage access from a single place."
	},
	{
		id: "monitoring",
		title: "Monitoring",
		body: "Application errors are reported through the existing error capture flow, and failed routes still have a home link."
	},
	{
		id: "support",
		title: "Support",
		body: "If you need a different path, the sign-in and docs pages are now reachable from the homepage and footer."
	}
];
//#endregion
export { Security as component };
