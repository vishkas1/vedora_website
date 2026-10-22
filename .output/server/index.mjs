globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-22T19:37:28.309Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/vedora-icon.png": {
		"type": "image/png",
		"etag": "\"62db-bd9bXocjNS6mCiztttvUjJ0s2E8\"",
		"mtime": "2026-10-22T19:37:28.309Z",
		"size": 25307,
		"path": "../public/vedora-icon.png"
	},
	"/assets/about-BKHoQdJr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"331-kQQAKVMVPbwbFmlfOxOPKkbqVMo\"",
		"mtime": "2026-10-22T19:37:28.106Z",
		"size": 817,
		"path": "../public/assets/about-BKHoQdJr.js"
	},
	"/vedora-logo.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"33c2-cBW5D6Wlfy7ZPaH1C8aYJ/+PdTE\"",
		"mtime": "2026-10-22T19:37:28.309Z",
		"size": 13250,
		"path": "../public/vedora-logo.ico"
	},
	"/assets/approach-BSDti5Hl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14dc-NeRcu1Hz6NwWTsAROVFXg2LZqD0\"",
		"mtime": "2026-10-22T19:37:28.107Z",
		"size": 5340,
		"path": "../public/assets/approach-BSDti5Hl.js"
	},
	"/assets/blueprint-DwXTdKCD.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"42ca-M2Ehtf2kqsb+8hnaGmpXT95YilM\"",
		"mtime": "2026-10-22T19:37:28.107Z",
		"size": 17098,
		"path": "../public/assets/blueprint-DwXTdKCD.css"
	},
	"/assets/contact-hdL2pYJx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2eb-vKYoPoiFKcDSSa5UICYLq4+Q8n0\"",
		"mtime": "2026-10-22T19:37:28.107Z",
		"size": 747,
		"path": "../public/assets/contact-hdL2pYJx.js"
	},
	"/assets/bp-BOOnPTKE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4812a-d/rQ0DOdhKM+Vif21wYax4zxPLY\"",
		"mtime": "2026-10-22T19:37:28.107Z",
		"size": 295210,
		"path": "../public/assets/bp-BOOnPTKE.js"
	},
	"/assets/routes-Cx30NOMv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-yugL9tB4ua2/pSYiJOu3sbQufTg\"",
		"mtime": "2026-10-22T19:37:28.107Z",
		"size": 268,
		"path": "../public/assets/routes-Cx30NOMv.js"
	},
	"/assets/services-D7bMhYI7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e9-x6a0DBtp2ynMG+v204FL6Zd99Sw\"",
		"mtime": "2026-10-22T19:37:28.107Z",
		"size": 1257,
		"path": "../public/assets/services-D7bMhYI7.js"
	},
	"/assets/testimonials-CgbS31NY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15c-DthMSr94UxFze75pBxF7DAy6rw0\"",
		"mtime": "2026-10-22T19:37:28.107Z",
		"size": 348,
		"path": "../public/assets/testimonials-CgbS31NY.js"
	},
	"/assets/index-HI8IW7xw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b0b9-9D2ViQBhkzdTW2A+3WaqEIf2C1E\"",
		"mtime": "2026-10-22T19:37:28.106Z",
		"size": 372921,
		"path": "../public/assets/index-HI8IW7xw.js"
	},
	"/assets/vedora-logo-CA-lA_Kw.png": {
		"type": "image/png",
		"etag": "\"2371b-M64xZrNFpcUBkQSwzIA80D2EVwQ\"",
		"mtime": "2026-10-22T19:37:28.108Z",
		"size": 145179,
		"path": "../public/assets/vedora-logo-CA-lA_Kw.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-22T19:37:28.309Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/styles-Dwoijl8v.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12376-Io9mzc5sawt29I/ISKv7sIDBkdo\"",
		"mtime": "2026-10-22T19:37:28.108Z",
		"size": 74614,
		"path": "../public/assets/styles-Dwoijl8v.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_nPeR5y = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_nPeR5y
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
