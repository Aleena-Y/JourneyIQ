import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { C as Check } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.settings-DrynNbEC.js
var import_jsx_runtime = require_jsx_runtime();
function Settings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Settings",
		subtitle: "Workspace, integrations, and team management"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "space-y-1 text-sm",
			children: [
				{
					id: "workspace",
					label: "Workspace"
				},
				{
					id: "integrations",
					label: "Integrations"
				},
				{
					id: "identity-resolution",
					label: "Identity resolution"
				},
				{
					id: "notifications",
					label: "Notifications"
				},
				{
					id: "team",
					label: "Team"
				},
				{
					id: "billing",
					label: "Billing"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${s.id}`,
				className: `block rounded-lg px-3 py-2 ${i === 1 ? "bg-secondary font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
				children: s.label
			}, s.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					id: "workspace",
					className: "scroll-mt-24 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold",
							children: "Workspace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Core workspace settings for Northwind Run Co."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Workspace name",
									value: "Northwind Run Co."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Default timezone",
									value: "Asia/Kolkata (IST)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Default currency",
									value: "USD"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Attribution window",
									value: "30 days"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					id: "integrations",
					className: "scroll-mt-24 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold",
							children: "Connected integrations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Channels and data sources sending events into JourneyIQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 divide-y divide-border",
							children: [
								{
									name: "Meta Ads",
									desc: "Northwind Run Co. · Ad Account 894...321",
									on: true
								},
								{
									name: "Google Ads",
									desc: "MCC linked · 4 sub-accounts",
									on: true
								},
								{
									name: "GA4",
									desc: "Property 412889102",
									on: true
								},
								{
									name: "Shopify",
									desc: "northwind-run.myshopify.com",
									on: true
								},
								{
									name: "Klaviyo (Email)",
									desc: "API key · refreshed 6 days ago",
									on: true
								},
								{
									name: "Segment",
									desc: "Not connected",
									on: false
								}
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[1fr_auto] items-center gap-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: i.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: i.desc
									})]
								}), i.on ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-md bg-success/10 px-2 py-0.5 text-xs font-medium text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " Connected"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium hover:bg-muted",
									children: "Connect"
								})]
							}, i.name))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					id: "identity-resolution",
					className: "scroll-mt-24 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold",
							children: "Identity resolution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "How JourneyIQ merges anonymous and known activity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Matching rules"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Email, device fingerprint, and account ID are matched to the same customer timeline."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Fallback behavior"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Unresolved events stay anonymous until a known identifier appears later in the journey."
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					id: "notifications",
					className: "scroll-mt-24 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold",
							children: "Notifications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Alerts for key changes in attribution and journey health"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-3",
							children: [
								{
									name: "Weekly summary",
									detail: "Sent every Monday at 8:00 AM"
								},
								{
									name: "Anomaly alerts",
									detail: "Triggered when conversion drops exceed 15%"
								},
								{
									name: "Integration failures",
									detail: "Immediate Slack and email notifications"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: item.detail
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium",
									children: "On"
								})]
							}, item.name))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					id: "team",
					className: "scroll-mt-24 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold",
							children: "Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Who can view data, edit settings, and export reports"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 divide-y divide-border",
							children: [
								{
									name: "Maya Rao",
									role: "Admin"
								},
								{
									name: "Jordan Lee",
									role: "Analyst"
								},
								{
									name: "Priya Patel",
									role: "Viewer"
								}
							].map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between py-3 first:pt-0 last:pb-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: member.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: member.role
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium hover:bg-muted",
									children: "Edit"
								})]
							}, member.name))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					id: "billing",
					className: "scroll-mt-24 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold",
							children: "Billing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Subscription and invoice details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Plan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm font-medium",
									children: "Growth"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Next invoice"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm font-medium",
									children: "Jul 01, 2026"
								})]
							})]
						})
					]
				})
			]
		})]
	})] });
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-medium text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		defaultValue: value,
		className: "mt-1.5 h-9 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
	})] });
}
//#endregion
export { Settings as component };
