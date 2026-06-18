import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { _ as Globe, b as Clock, h as Instagram, l as ShoppingBag, m as Mail, r as TriangleAlert, s as Sparkles, x as CircleCheck } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { c as journeySteps, d as recentJourneys, s as journeyInsights } from "./_ssr/mock-data-BIM7B1_h.mjs";
import { n as StatusPill } from "./_app.dashboard-DrJq3rwF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.journeys-Bf_PXEx4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var iconFor = {
	"Instagram Ad": Instagram,
	"Website Visit": Globe,
	"Product View": ShoppingBag,
	"Email Reminder": Mail,
	Purchase: CircleCheck
};
function Journeys() {
	const [activeId, setActiveId] = (0, import_react.useState)(4);
	const active = journeySteps.find((s) => s.id === activeId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Customer Journeys",
			subtitle: "Reconstructed paths from first impression to conversion",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted",
				children: "All segments"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90",
				children: "New journey rule"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "Journey #j-8421 · Aarav Mehta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Acquired via Instagram · 5 touchpoints over 3 days · $189 revenue"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: "Completed" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-3",
					children: journeySteps.map((step, i) => {
						const Icon = iconFor[step.channel] ?? Globe;
						const isActive = step.id === activeId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveId(step.id),
							onMouseEnter: () => setActiveId(step.id),
							className: cn("group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border p-4 text-left transition", isActive ? "border-primary/40 bg-primary/[0.04] shadow-soft" : "border-border bg-card hover:border-border hover:bg-muted/30"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("grid h-10 w-10 place-items-center rounded-xl transition", isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), i < journeySteps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-6 w-px bg-border" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold",
											children: step.channel
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "-mt-0.5 mr-0.5 inline h-3 w-3" }), step.timestamp]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm text-muted-foreground",
										children: step.label
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden text-right md:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Conv. probability"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-lg font-semibold tabular-nums",
										children: [step.probability, "%"]
									})]
								})
							]
						}) }, step.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: "Step detail"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-base font-semibold",
								children: active.channel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-sm text-muted-foreground",
								children: active.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Conv. prob.",
										value: `${active.probability}%`,
										tone: "primary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Dropoff risk",
										value: `${active.dropoff}%`,
										tone: active.dropoff > 40 ? "warn" : "muted"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Sentiment",
										value: active.sentiment,
										tone: "muted"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: active.note
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI explanation"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed",
							children: active.channel === "Email Reminder" ? "The email reminder increased conversion likelihood by +42% for this customer. Day-2 reminders with a small incentive are the highest-leverage touchpoint in the Running segment." : active.channel === "Instagram Ad" ? "First-touch impressions on Meta typically carry 18–24% conversion probability for the Running segment. This impression is in the normal range." : active.channel === "Product View" ? "Three product views in 48h is a strong intent signal. Customers in this state convert within 4 days 71% of the time when contacted." : active.channel === "Website Visit" ? "A 2-minute session viewing 4 products without an add-to-cart suggests price comparison. Consider showing a price-match badge to similar visitors." : "Completed purchase. Customer is now eligible for the post-purchase onboarding flow and loyalty enrollment."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-warning",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3.5 w-3.5" }), " Risk"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: [
								"Similar journeys drop off most often between ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Website Visit"
								}),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Product View"
								}),
								". A retargeting ad within 24h reduces that risk by 31%."
							]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold uppercase tracking-wide text-muted-foreground",
				children: "Journey-level insights"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-4 md:grid-cols-3",
				children: journeyInsights.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold leading-snug",
							children: i.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: i.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Confidence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold tabular-nums",
								children: [i.confidence, "%"]
							})]
						})
					]
				}, i.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-semibold",
					children: "Recent journeys"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 font-medium",
								children: "ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 font-medium",
								children: "Customer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 font-medium",
								children: "Current stage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 font-medium",
								children: "Steps"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 font-medium",
								children: "Value"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-3 font-medium",
								children: "Status"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: recentJourneys.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0 hover:bg-muted/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 font-mono text-xs text-muted-foreground",
								children: j.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 font-medium",
								children: j.customer
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 text-muted-foreground",
								children: j.stage
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 tabular-nums",
								children: j.steps
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3 tabular-nums",
								children: j.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: j.status })
							})
						]
					}, j.id)) })]
				})
			})]
		})
	] });
}
function Stat({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mt-1 text-sm font-semibold tabular-nums", tone === "primary" && "text-primary", tone === "warn" && "text-warning"),
			children: value
		})]
	});
}
//#endregion
export { Journeys as component };
