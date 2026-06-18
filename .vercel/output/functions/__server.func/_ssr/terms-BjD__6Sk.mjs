import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Card, r as Logo } from "./app-shell-X1B0YxQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-BjD__6Sk.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
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
					children: "Terms of service"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-semibold tracking-tight",
					children: "The working agreement for JourneyIQ."
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
		id: "accounts",
		title: "Accounts",
		body: "You are responsible for the access you grant to your workspace and for the accuracy of the data you upload."
	},
	{
		id: "usage",
		title: "Acceptable use",
		body: "Use the product in ways that align with your internal policies and the laws that apply to your organization."
	},
	{
		id: "changes",
		title: "Changes",
		body: "We may update these terms as the product evolves. The page will continue to be reachable from the footer."
	}
];
//#endregion
export { Terms as component };
