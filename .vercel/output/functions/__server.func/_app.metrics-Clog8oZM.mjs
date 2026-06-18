import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { i as TrendingUp } from "./_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./_ssr/app-shell-X1B0YxQo.mjs";
import { l as metricTrend, p as successMetrics } from "./_ssr/mock-data-BIM7B1_h.mjs";
import { a as XAxis, c as CartesianGrid, d as ResponsiveContainer, f as Tooltip, i as YAxis, o as Area, r as LineChart, s as Line, t as AreaChart } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.metrics-Clog8oZM.js
var import_jsx_runtime = require_jsx_runtime();
function Metrics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Success Metrics",
			subtitle: "The numbers your team is measured on — explained in plain English.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted",
				children: "Last 90 days"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
			children: successMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 inline-flex items-center gap-1 rounded-md bg-success/10 px-1.5 py-0.5 text-xs font-medium text-success",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }), m.trend]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted-foreground",
						children: m.explain
					})
				]
			}, m.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "ROAS trend"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Weekly · paid Meta + Google"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: metricTrend,
								margin: {
									left: -10,
									right: 10,
									top: 10
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "r",
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
									}) }),
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
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "var(--color-card)",
										border: "1px solid var(--color-border)",
										borderRadius: 12,
										fontSize: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										dataKey: "roas",
										stroke: "var(--color-primary)",
										strokeWidth: 2,
										fill: "url(#r)"
									})
								]
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "LTV & Journey completion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Tracking how loyal customers are getting"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: metricTrend,
								margin: {
									left: -10,
									right: 10,
									top: 10
								},
								children: [
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
										yAxisId: "left",
										stroke: "var(--color-muted-foreground)",
										fontSize: 11,
										tickLine: false,
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										yAxisId: "right",
										orientation: "right",
										stroke: "var(--color-muted-foreground)",
										fontSize: 11,
										tickLine: false,
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "var(--color-card)",
										border: "1px solid var(--color-border)",
										borderRadius: 12,
										fontSize: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										yAxisId: "left",
										dataKey: "ltv",
										stroke: "var(--color-chart-2)",
										strokeWidth: 2,
										dot: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										yAxisId: "right",
										dataKey: "completion",
										stroke: "var(--color-chart-4)",
										strokeWidth: 2,
										dot: false
									})
								]
							})
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { Metrics as component };
