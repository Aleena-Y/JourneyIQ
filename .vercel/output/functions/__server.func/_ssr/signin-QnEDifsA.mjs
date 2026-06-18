import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowRight, s as Sparkles, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as Card, r as Logo } from "./app-shell-X1B0YxQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signin-QnEDifsA.js
var import_jsx_runtime = require_jsx_runtime();
function SignIn() {
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
			className: "mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					children: "Welcome back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl",
					children: "Sign in to review journeys, attribution, and revenue signals."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
					children: "JourneyIQ keeps the same visual language across marketing and product surfaces, so you can move between the landing site and the app without a jarring reset."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-3",
					children: [
						{
							icon: Sparkles,
							label: "AI insights"
						},
						{
							icon: ShieldCheck,
							label: "Team access"
						},
						{
							icon: ArrowRight,
							label: "Fast routing"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium",
							children: item.label
						})]
					}, item.label))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-6 shadow-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							defaultValue: "marina@northwindrun.com",
							className: "mt-1.5 h-11 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							defaultValue: "journeyiq",
							className: "mt-1.5 h-11 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90",
							children: ["Continue to dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/docs",
							className: "block text-center text-sm font-medium text-muted-foreground hover:text-foreground",
							children: "Need help? Read the docs"
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { SignIn as component };
