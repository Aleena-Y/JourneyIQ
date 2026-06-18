import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as ArrowUpRight, T as ChartColumn, _ as Globe, k as ArrowRight, l as ShoppingBag, m as Mail, n as Users, s as Sparkles, v as GitBranch, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { r as Logo } from "./app-shell-X1B0YxQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2zOmbou9.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#product",
									className: "hover:text-foreground",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#journey",
									className: "hover:text-foreground",
									children: "Journeys"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#attribution",
									className: "hover:text-foreground",
									children: "Attribution"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "hover:text-foreground",
									children: "Pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/docs",
									className: "hover:text-foreground",
									children: "Docs"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signin",
								className: "hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline",
								children: "Sign in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "inline-flex h-9 items-center rounded-lg bg-foreground px-3.5 text-sm font-medium text-background transition hover:opacity-90",
								children: "Open app"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid-bg",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-[1240px] px-6 pt-20 pb-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }), "New · Cross-channel attribution v2 is live"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl",
								children: ["Understand every customer journey.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-muted-foreground",
									children: "Personalize every experience."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
								children: "JourneyIQ unifies customer interactions across ads, websites, email, and apps to create seamless experiences and reveal which touchpoints actually drive conversions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard",
									className: "inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90",
									children: ["View Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/journeys",
									className: "inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:bg-muted",
									children: "See Customer Journey"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-xs text-muted-foreground",
								children: "Used by marketing teams at growth-stage commerce, SaaS, and fintech brands."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto max-w-[1180px] px-6 pb-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMock, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-surface-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Northwind Run Co." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Halcyon Labs" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Meridian Fitness" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Parable Coffee" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Polestar Skincare" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atlas Outdoors" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "product",
				className: "mx-auto max-w-[1240px] px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-primary",
							children: "One platform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-semibold tracking-tight md:text-4xl",
							children: "Every touchpoint, joined to the customer who made it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Stop reconciling dashboards. JourneyIQ stitches ad impressions, site sessions, email opens, and app events into a single timeline per customer — then explains what moved them to convert."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-3",
					children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-base font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: f.body
							})
						]
					}, f.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "journey",
				className: "border-t border-border bg-surface-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1240px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-primary",
							children: "Customer Journeys"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-semibold tracking-tight md:text-4xl",
							children: "Watch how a stranger becomes a customer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Each journey shows the touchpoints, the moment intent changed, and the channel that tipped the decision. No more guessing whether the email or the ad did the work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: [
								"Step-level conversion probability and dropoff risk",
								"Sentiment estimation from on-site and message behavior",
								"Plain-English explanations next to every step"
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
							}, b))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyMock, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "attribution",
				className: "mx-auto max-w-[1240px] px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-2 md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttributionMock, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-primary",
							children: "Attribution Intelligence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-semibold tracking-tight md:text-4xl",
							children: "When Meta, GA4, and Shopify disagree — we tell you who's right."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "The AI Attribution Investigator compares numbers across your stack, finds the cause of the discrepancy (windows, dedup, cross-device), and gives you a single defensible number to plan against."
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 py-20 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
						children: "Your customer is one timeline. Your tools should be too."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90",
							children: ["View Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/insights",
							className: "inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:bg-muted",
							children: "Explore Insights"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-surface-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 JourneyIQ, Inc. All rights reserved." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "hover:text-foreground",
									children: "Privacy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "hover:text-foreground",
									children: "Terms"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/security",
									className: "hover:text-foreground",
									children: "Security"
								})
							]
						})
					]
				})
			})
		]
	});
}
var features = [
	{
		icon: Users,
		title: "Unified Customer Profiles",
		body: "Every interaction, every channel, stitched to one identity. No more 7 dashboards for 1 person."
	},
	{
		icon: GitBranch,
		title: "Journey Visualization",
		body: "See the path from first impression to checkout — with conversion probability at every step."
	},
	{
		icon: ChartColumn,
		title: "Multi-Touch Attribution",
		body: "Move past last-click. Credit Instagram, email, and search for the share they actually earned."
	},
	{
		icon: Sparkles,
		title: "AI Insights",
		body: "A senior marketing analyst, always on. Surfaces what changed, why, and what to do about it."
	},
	{
		icon: Globe,
		title: "Every Channel",
		body: "Meta, Google, Email, SMS, Website, Mobile App. Connect once, query forever."
	},
	{
		icon: ShoppingBag,
		title: "Revenue Truth",
		body: "Reconcile Meta, GA4, and Shopify automatically. Plan against a number you can defend."
	}
];
function DashboardMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-border bg-card shadow-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-10 items-center gap-1.5 border-b border-border bg-surface-muted px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 text-xs text-muted-foreground",
					children: "app.journeyiq.com / dashboard"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-12 gap-4 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-12 grid grid-cols-2 gap-3 md:col-span-8 md:grid-cols-4",
				children: [[
					{
						l: "Revenue",
						v: "$1.84M",
						d: "+12.4%"
					},
					{
						l: "Conversions",
						v: "4,621",
						d: "+8.1%"
					},
					{
						l: "Journey Completion",
						v: "68.1%",
						d: "+3.2%"
					},
					{
						l: "ROAS",
						v: "4.6x",
						d: "+0.3"
					}
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wide text-muted-foreground",
							children: k.l
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg font-semibold",
							children: k.v
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium text-success",
							children: k.d
						})
					]
				}, k.l)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 rounded-xl border border-border bg-surface p-4 md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Revenue · last 10 weeks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Weekly"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniAreaChart, {})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-12 space-y-3 md:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Top journey"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Instagram → Site → Email → Purchase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-success/10 px-1.5 py-0.5 font-medium text-success",
								children: "+42%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "vs control"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "AI Insight"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted-foreground",
							children: "Mobile users in Bangalore show 24% higher cart abandonment — investigate Android checkout perf."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/insights",
							className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary",
							children: ["Open insight ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" })]
						})
					]
				})]
			})]
		})]
	});
}
function MiniAreaChart() {
	const pts = [
		42,
		51,
		47,
		58,
		62,
		71,
		68,
		79,
		84,
		91
	];
	const max = Math.max(...pts);
	const w = 600;
	const h = 120;
	const step = w / (pts.length - 1);
	const path = pts.map((v, i) => [i * step, h - v / max * (h - 10) - 4]).map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
	const area = `${path} L ${w} ${h} L 0 ${h} Z`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "h-28 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "g",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "var(--color-primary)",
					stopOpacity: "0.25"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "var(--color-primary)",
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: area,
				fill: "url(#g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path,
				stroke: "var(--color-primary)",
				strokeWidth: "2",
				fill: "none",
				strokeLinecap: "round"
			})
		]
	});
}
function JourneyMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: [
			{
				icon: Sparkles,
				label: "Instagram Ad",
				t: "Jun 02",
				p: 18
			},
			{
				icon: Globe,
				label: "Website Visit",
				t: "Jun 02",
				p: 27
			},
			{
				icon: ShoppingBag,
				label: "Product View",
				t: "Jun 03",
				p: 41
			},
			{
				icon: Mail,
				label: "Email Reminder",
				t: "Jun 05",
				p: 83
			},
			{
				icon: CircleCheck,
				label: "Purchase",
				t: "Jun 05",
				p: 100
			}
		].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: s.t
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary transition-all",
							style: { width: `${s.p}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "w-10 text-right text-xs font-medium tabular-nums",
					children: [s.p, "%"]
				})
			]
		}, s.label))
	});
}
function AttributionMock() {
	const rows = [
		{
			name: "Meta Ads",
			v: 180,
			color: "bg-chart-1"
		},
		{
			name: "GA4",
			v: 120,
			color: "bg-chart-4"
		},
		{
			name: "Shopify",
			v: 110,
			color: "bg-chart-2"
		}
	];
	const max = 200;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: "Summer Runners — conversions reported"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: "Three sources, three numbers."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 space-y-3",
			children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: r.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold tabular-nums",
					children: r.v
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 h-2 overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-full ${r.color}`,
					style: { width: `${r.v / max * 100}%` }
				})
			})] }, r.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-xl border border-border bg-surface p-3 text-xs leading-relaxed text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: "Why the gap?"
				}),
				" Meta uses a 7-day click window and counts cross-device. GA4 excludes app sessions. Shopify only counts paid orders. Use ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: "110"
				}),
				" as truth; credit Meta with ~38% influence."
			]
		})
	] });
}
//#endregion
export { Landing as component };
