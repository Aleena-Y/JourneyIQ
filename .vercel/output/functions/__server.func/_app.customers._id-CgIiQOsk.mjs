import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as customers } from "./_ssr/mock-data-BIM7B1_h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.customers._id-CgIiQOsk.js
var $$splitNotFoundComponentImporter = () => import("./_app.customers._id-C_O87l8h.mjs");
var $$splitComponentImporter = () => import("./_app.customers._id-BnOmQVXL.mjs");
var Route = createFileRoute("/_app/customers/$id")({
	head: () => ({ meta: [{ title: "Customer · JourneyIQ" }] }),
	loader: ({ params }) => {
		const customer = customers.find((c) => c.id === params.id);
		if (!customer) throw notFound();
		return { customer };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
