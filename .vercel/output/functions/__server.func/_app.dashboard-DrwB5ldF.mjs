import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { O as ArrowUpRight, a as TrendingDown, i as TrendingUp, s as Sparkles } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { d as recentJourneys, f as revenueTrend, r as channelMix, s as journeyInsights, u as overviewMetrics } from "./_ssr/mock-data-BIM7B1_h.mjs";
import { a as XAxis, c as CartesianGrid, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Bar, n as BarChart, o as Area, t as AreaChart, u as Cell } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-DrwB5ldF.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Dashboard",
			subtitle: "Last 30 days · All channels · 4,621 conversions across 12,408 journeys",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted",
				children: "Last 30 days"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90",
				children: "Export"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
			children: overviewMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: m.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-2xl font-semibold tracking-tight",
						children: m.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-1.5 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-0.5 rounded-md bg-success/10 px-1.5 py-0.5 font-medium text-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }), m.delta]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: m.hint
						})]
					})
				]
			}, m.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "Revenue & Conversions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Weekly · attributed to tracked journeys"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
							color: "var(--color-primary)",
							label: "Revenue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
							color: "var(--color-chart-2)",
							label: "Conversions"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: revenueTrend,
							margin: {
								top: 10,
								right: 10,
								left: -10,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "rev",
									x1: "0",
									x2: "0",
									y1: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--color-primary)",
										stopOpacity: .25
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--color-primary)",
										stopOpacity: 0
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "con",
									x1: "0",
									x2: "0",
									y1: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--color-chart-2)",
										stopOpacity: .2
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--color-chart-2)",
										stopOpacity: 0
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--color-border)",
									strokeDasharray: "3 3",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "date",
									stroke: "var(--color-muted-foreground)",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "var(--color-muted-foreground)",
									fontSize: 11,
									tickLine: false,
									axisLine: false,
									tickFormatter: (v) => `$${v / 1e3}k`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--color-card)",
									border: "1px solid var(--color-border)",
									borderRadius: 12,
									fontSize: 12
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "revenue",
									stroke: "var(--color-primary)",
									strokeWidth: 2,
									fill: "url(#rev)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "conversions",
									stroke: "var(--color-chart-2)",
									strokeWidth: 2,
									fill: "url(#con)"
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "Revenue by channel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Multi-touch attribution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: channelMix,
								layout: "vertical",
								margin: {
									left: 0,
									right: 10
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--color-border)",
										horizontal: false,
										strokeDasharray: "3 3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										type: "number",
										hide: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										type: "category",
										dataKey: "channel",
										stroke: "var(--color-muted-foreground)",
										fontSize: 11,
										tickLine: false,
										axisLine: false,
										width: 110
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "var(--color-card)",
											border: "1px solid var(--color-border)",
											borderRadius: 12,
											fontSize: 12
										},
										formatter: (v) => `$${(v / 1e3).toFixed(0)}k`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "revenue",
										radius: [
											6,
											6,
											6,
											6
										],
										barSize: 14,
										children: channelMix.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: `var(--color-chart-${i % 5 + 1})` }, i))
									})
								]
							})
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "Recent journeys"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Latest customer activity"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/journeys",
						className: "inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
									children: "Started"
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
									className: "px-6 py-3 text-muted-foreground",
									children: j.started
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: j.status })
								})
							]
						}, j.id)) })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI Insight"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-base font-semibold leading-snug",
							children: journeyInsights[0].title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: journeyInsights[0].body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Confidence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold tabular-nums",
								children: [journeyInsights[0].confidence, "%"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-warning",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3.5 w-3.5" }), " Watch"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-base font-semibold leading-snug",
							children: journeyInsights[2].title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: journeyInsights[2].body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Confidence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold tabular-nums",
								children: [journeyInsights[2].confidence, "%"]
							})]
						})
					]
				})]
			})]
		})
	] });
}
function Legend({ color, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-2 w-2 rounded-full",
			style: { background: color }
		}), label]
	});
}
function StatusPill({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-md px-2 py-0.5 text-xs font-medium", {
			Completed: "bg-success/10 text-success",
			Active: "bg-primary/10 text-primary",
			"At risk": "bg-warning/15 text-warning-foreground",
			Dropped: "bg-destructive/10 text-destructive"
		}[status] ?? "bg-muted text-muted-foreground"),
		children: status
	});
}
//#endregion
export { StatusPill, Dashboard as component };
