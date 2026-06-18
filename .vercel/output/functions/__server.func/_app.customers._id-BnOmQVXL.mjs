import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, _ as Globe, c as Smartphone, h as Instagram, m as Mail, p as MessageSquare, s as Sparkles } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { a as customerTimeline } from "./_ssr/mock-data-BIM7B1_h.mjs";
import { t as Route } from "./_app.customers._id-CgIiQOsk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.customers._id-BnOmQVXL.js
var import_jsx_runtime = require_jsx_runtime();
var channelIcon = {
	Email: Mail,
	Website: Globe,
	Instagram,
	"Mobile App": Smartphone,
	SMS: MessageSquare
};
function CustomerDetail() {
	const { customer } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/customers",
			className: "mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " All customers"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: customer.name,
			subtitle: `${customer.email} · ${customer.location}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted",
				children: "Send email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90",
				children: "Add to segment"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold",
							children: "Activity timeline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Cross-channel interactions, newest first"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-5 space-y-4",
							children: customerTimeline.map((e, i) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[auto_1fr_auto] items-start gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-9 w-9 place-items-center rounded-lg bg-secondary text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(channelIcon[e.channel] ?? Globe, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: e.action
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: e.channel
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "pt-1 text-xs text-muted-foreground",
											children: e.time
										})
									]
								}, i);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "Purchase history"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "mt-4 w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Item"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Channel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 text-right font-medium",
									children: "Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 text-right font-medium",
									children: "Date"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
							{
								o: "#10248",
								i: "Velocity Pro 3 running shoes",
								c: "Website",
								a: "$164",
								d: "Apr 18, 2026"
							},
							{
								o: "#09812",
								i: "Trail Socks (3-pack)",
								c: "Mobile App",
								a: "$28",
								d: "Feb 04, 2026"
							},
							{
								o: "#09120",
								i: "Running cap + visor bundle",
								c: "Website",
								a: "$42",
								d: "Nov 22, 2025"
							}
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 font-mono text-xs text-muted-foreground",
									children: r.o
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: r.i
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-muted-foreground",
									children: r.c
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-right tabular-nums",
									children: r.a
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-right text-muted-foreground",
									children: r.d
								})
							]
						}, r.o)) })]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: "Lifetime value"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl font-semibold",
								children: customer.ltv
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "across 3 purchases"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Interests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: customer.interests.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-secondary px-2 py-1 text-xs font-medium",
								children: i
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Predictions"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Next purchase probability (30d)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1.5 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-2 flex-1 overflow-hidden rounded-full bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-primary",
											style: { width: `${customer.nextPurchaseProb}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-semibold tabular-nums",
										children: [customer.nextPurchaseProb, "%"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Predicted next interest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium",
									children: customer.predictedInterest
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Channel reach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								"Email · subscribed",
								"Instagram · matched",
								"Mobile App · installed",
								"SMS · not opted in"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: c.split(" · ")[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium",
									children: c.split(" · ")[1]
								})]
							}, c))
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { CustomerDetail as component };
