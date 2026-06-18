import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$16 } from "../_app.customers._id-CgIiQOsk.mjs";
import { t as Route$17 } from "../_app.dashboard-DrJq3rwF.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-43fuqk9g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DhiirVoU.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "JourneyIQ" },
			{
				name: "description",
				content: "Customer journey intelligence for marketing teams."
			},
			{
				name: "author",
				content: "JourneyIQ"
			},
			{
				property: "og:title",
				content: "JourneyIQ"
			},
			{
				property: "og:description",
				content: "Customer journey intelligence for marketing teams."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$14 = () => import("./terms-BjD__6Sk.mjs");
var Route$14 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./signin-QnEDifsA.mjs");
var Route$13 = createFileRoute("/signin")({
	head: () => ({ meta: [{ title: "Sign in · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./security-De1cQsaz.mjs");
var Route$12 = createFileRoute("/security")({
	head: () => ({ meta: [{ title: "Security · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./privacy-DHokKizU.mjs");
var Route$11 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./pricing-aIyCA6Ow.mjs");
var Route$10 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./docs-CL3f3GpF.mjs");
var Route$9 = createFileRoute("/docs")({
	head: () => ({ meta: [{ title: "Docs · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_app-DyzQg5q6.mjs");
var Route$8 = createFileRoute("/_app")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./routes-2zOmbou9.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "JourneyIQ — Customer Journey Intelligence for Marketing Teams" },
		{
			name: "description",
			content: "JourneyIQ unifies customer interactions across ads, websites, email, and apps to reveal which touchpoints actually drive conversions."
		},
		{
			property: "og:title",
			content: "JourneyIQ — Customer Journey Intelligence"
		},
		{
			property: "og:description",
			content: "Understand every customer journey. Personalize every experience."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_app.settings-DrynNbEC.mjs");
var Route$6 = createFileRoute("/_app/settings")({
	head: () => ({ meta: [{ title: "Settings · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_app.metrics-Clog8oZM.mjs");
var Route$5 = createFileRoute("/_app/metrics")({
	head: () => ({ meta: [{ title: "Success Metrics · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_app.journeys-Bf_PXEx4.mjs");
var Route$4 = createFileRoute("/_app/journeys")({
	head: () => ({ meta: [{ title: "Journeys · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_app.insights-DivaU17I.mjs");
var Route$3 = createFileRoute("/_app/insights")({
	head: () => ({ meta: [{ title: "AI Insights · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_app.channels-2L-QoHnz.mjs");
var Route$2 = createFileRoute("/_app/channels")({
	head: () => ({ meta: [{ title: "Channels · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_app.attribution-CwWOb6Kr.mjs");
var Route$1 = createFileRoute("/_app/attribution")({
	head: () => ({ meta: [{ title: "Attribution · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_app.customers.index-HZ6rm6ji.mjs");
var Route = createFileRoute("/_app/customers/")({
	head: () => ({ meta: [{ title: "Customers · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermsRoute = Route$14.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$15
});
var SigninRoute = Route$13.update({
	id: "/signin",
	path: "/signin",
	getParentRoute: () => Route$15
});
var SecurityRoute = Route$12.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$15
});
var PrivacyRoute = Route$11.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$15
});
var PricingRoute = Route$10.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$15
});
var DocsRoute = Route$9.update({
	id: "/docs",
	path: "/docs",
	getParentRoute: () => Route$15
});
var AppRoute = Route$8.update({
	id: "/_app",
	getParentRoute: () => Route$15
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AppSettingsRoute = Route$6.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppMetricsRoute = Route$5.update({
	id: "/metrics",
	path: "/metrics",
	getParentRoute: () => AppRoute
});
var AppJourneysRoute = Route$4.update({
	id: "/journeys",
	path: "/journeys",
	getParentRoute: () => AppRoute
});
var AppInsightsRoute = Route$3.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$17.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppChannelsRoute = Route$2.update({
	id: "/channels",
	path: "/channels",
	getParentRoute: () => AppRoute
});
var AppAttributionRoute = Route$1.update({
	id: "/attribution",
	path: "/attribution",
	getParentRoute: () => AppRoute
});
var AppCustomersIndexRoute = Route.update({
	id: "/customers/",
	path: "/customers/",
	getParentRoute: () => AppRoute
});
var AppRouteChildren = {
	AppAttributionRoute,
	AppChannelsRoute,
	AppDashboardRoute,
	AppInsightsRoute,
	AppJourneysRoute,
	AppMetricsRoute,
	AppSettingsRoute,
	AppCustomersIdRoute: Route$16.update({
		id: "/customers/$id",
		path: "/customers/$id",
		getParentRoute: () => AppRoute
	}),
	AppCustomersIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	DocsRoute,
	PricingRoute,
	PrivacyRoute,
	SecurityRoute,
	SigninRoute,
	TermsRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
