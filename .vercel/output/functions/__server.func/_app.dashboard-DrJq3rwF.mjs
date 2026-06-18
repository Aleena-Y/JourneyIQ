import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-DrJq3rwF.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./_app.dashboard-DrwB5ldF.mjs");
var Route = createFileRoute("/_app/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard · JourneyIQ" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
export { StatusPill as n, Route as t };
