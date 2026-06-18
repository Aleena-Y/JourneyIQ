import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as Search } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { o as customers } from "./_ssr/mock-data-BIM7B1_h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.customers.index-HZ6rm6ji.js
var import_jsx_runtime = require_jsx_runtime();
function CustomersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Customers",
		subtitle: "12,408 known profiles · 4,182 with activity this month",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				placeholder: "Search by name or email",
				className: "h-9 w-64 rounded-lg border border-input bg-card pl-8 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90",
			children: "Create segment"
		})] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-3 font-medium",
						children: "Customer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-3 font-medium",
						children: "Location"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-3 font-medium",
						children: "Interests"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-3 font-medium",
						children: "LTV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-3 font-medium",
						children: "Next purchase"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-3 font-medium",
						children: "Last seen"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: customers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border last:border-0 hover:bg-muted/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/customers/$id",
							params: { id: c.id },
							className: "group flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-full bg-secondary text-xs font-semibold",
								children: c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium group-hover:underline",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted-foreground",
									children: c.email
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-3 text-muted-foreground",
						children: c.location
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: c.interests.slice(0, 3).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-secondary px-2 py-0.5 text-xs",
								children: i
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-3 font-medium tabular-nums",
						children: c.ltv
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 w-20 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-primary",
									style: { width: `${c.nextPurchaseProb}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs tabular-nums text-muted-foreground",
								children: [c.nextPurchaseProb, "%"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-3 text-muted-foreground",
						children: c.lastSeen
					})
				]
			}, c.id)) })]
		})
	}) })] });
}
//#endregion
export { CustomersPage as component };
