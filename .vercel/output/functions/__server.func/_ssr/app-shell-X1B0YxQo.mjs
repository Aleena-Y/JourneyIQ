import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Bell, d as Search, f as Moon, j as Activity, o as Sun } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-X1B0YxQo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/dashboard",
		label: "Dashboard"
	},
	{
		to: "/journeys",
		label: "Journeys"
	},
	{
		to: "/customers",
		label: "Customers"
	},
	{
		to: "/channels",
		label: "Channels"
	},
	{
		to: "/insights",
		label: "Insights"
	},
	{
		to: "/attribution",
		label: "Attribution"
	},
	{
		to: "/metrics",
		label: "Metrics"
	},
	{
		to: "/settings",
		label: "Settings"
	}
];
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-2 font-semibold tracking-tight", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
				className: "h-4 w-4",
				strokeWidth: 2.5
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[15px]",
			children: "JourneyIQ"
		})]
	});
}
function ThemeToggle() {
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setDark((d) => !d),
		className: "grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground",
		"aria-label": "Toggle theme",
		children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
	});
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-14 max-w-[1400px] items-center gap-6 px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: nav.map((item) => {
							const active = pathname === item.to || pathname.startsWith(item.to + "/");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-md px-3 py-1.5 text-sm font-medium transition", active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
								children: item.label
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative hidden md:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "Search customers, journeys…",
									className: "h-9 w-64 rounded-lg border border-input bg-card pl-8 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "relative grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground",
								"aria-label": "Notifications",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-destructive" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-chart-5 text-xs font-semibold text-primary-foreground",
								children: "MR"
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-[1400px] px-6 py-8",
			children
		})]
	});
}
function PageHeader({ title, subtitle, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "truncate text-2xl font-semibold tracking-tight",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: subtitle
			})]
		}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex shrink-0 items-center gap-2",
			children: actions
		})]
	});
}
function Card({ children, className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl border border-border bg-card shadow-soft transition", className),
		...rest,
		children
	});
}
//#endregion
export { PageHeader as i, Card as n, Logo as r, AppShell as t };
