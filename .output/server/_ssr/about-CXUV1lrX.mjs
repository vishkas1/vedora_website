import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as BpShell, l as PageHead, o as DetailList, t as AboutSec, u as PrinciplesSec } from "./bp-CYN0c6YW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CXUV1lrX.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BpShell, { children: (book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			label: "Who you'll work with",
			title: "A small team, and the same people from first call to handover."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSec, { head: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailList, {
			label: "Why Vedora",
			title: "What makes working with us different.",
			items: [
				{
					t: "Built for Irish SMEs",
					points: ["We understand the budgets, teams and time of small and mid-sized businesses in Ireland"]
				},
				{
					t: "No hand-offs",
					points: ["You work directly with the practitioners behind the work, from first call to handover"]
				},
				{
					t: "Practical over theoretical",
					points: ["No hype or futuristic promises, just clear steps that save time today"]
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrinciplesSec, {})
	] }) });
}
//#endregion
export { Page as component };
