import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as BpShell, l as PageHead, n as Arrow, r as BookingDialog } from "./bp-CYN0c6YW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C_HZDabY.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BpShell, { children: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
		label: "Get in touch",
		title: "Let's talk about where AI fits in your business.",
		lede: "Fill in the form below, or email us directly at hello@vedora.ie."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "wrap",
		style: { paddingBottom: 64 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDialog, {
			inline: true,
			open: true,
			onClose: () => {}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			style: { marginTop: 16 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "text-link",
				href: "mailto:hello@vedora.ie?subject=Enquiry%20from%20the%20Vedora%20website",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "hello@vedora.ie" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
				]
			})
		})]
	})] }) });
}
//#endregion
export { Page as component };
