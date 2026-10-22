import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as BpShell, l as PageHead, n as Arrow, p as vedora_mark_png_asset_default, u as PrinciplesSec } from "./bp-CYN0c6YW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approach-BXIDQKPk.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		id: "optimisation",
		num: "1",
		letter: "O",
		label: "Optimisation",
		title: "Find what's worth improving.",
		intro: "We start with where your business loses time and money, so AI is aimed at real problems and not at hype.",
		happens: [
			"A first conversation about your goals",
			"A look at where time and money are lost",
			"A shortlist of what's worth tackling first"
		],
		get: "Clear priorities and a shortlist.",
		link: "Free AI Intro Workshop"
	},
	{
		id: "readiness",
		num: "2",
		letter: "R",
		label: "Readiness",
		title: "Get your business ready.",
		intro: "A structured look at your processes, data and team, so recommendations fit your business.",
		happens: [
			"Structured review of processes, data and team",
			"A readiness score",
			"Opportunities ranked with estimated time saved"
		],
		get: "A written readiness report and roadmap.",
		link: "AI Assessment"
	},
	{
		id: "adoption",
		num: "3",
		letter: "A",
		label: "Adoption",
		title: "Put it to work.",
		intro: "Hands-on training and set-up built around your team's real work, so the change sticks.",
		happens: [
			"Training for the people who will use it",
			"One or two well-chosen tools put live",
			"Quick wins before bigger commitments"
		],
		get: "A trained team and working workflows.",
		link: "AI Essentials and AI Implementation & Setup"
	}
];
function OraStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec ora-strip-sec",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ora-strip",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ora-strip-item",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "ora-strip-card",
						href: `#${s.id}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ora-strip-num",
								children: s.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ora-letter",
								"aria-hidden": "true",
								children: s.letter
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ora-strip-label",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ora-strip-desc",
								children: s.title
							})
						]
					}), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ora-strip-line",
						"aria-hidden": "true"
					})]
				}, s.id))
			})
		})
	});
}
function OraStep({ s, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `sec${alt ? " sec-alt" : ""}`,
		id: s.id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap ora-step",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ora-step-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ora-letter ora-letter-xl",
						"aria-hidden": "true",
						children: s.letter
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "label",
						children: [
							s.letter,
							" · ",
							s.label
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "h-section",
						children: s.title
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: s.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ora-step-body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glimpse-card static",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "What happens" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "ticks",
							children: s.happens.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p }, p))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glimpse-card static",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "What you get" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.get }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ora-step-link",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ora-step-link-label",
									children: "Links to"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									className: "btn btn-primary btn-sm",
									to: "/services",
									children: [
										s.link,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
									]
								})]
							})
						]
					})]
				})
			]
		})
	});
}
function SampleOutput() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec sec-ruled",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sec-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					children: "What you receive"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "h-section",
					children: "A sample page from an AI Readiness Report."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sample-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-panel",
					role: "img",
					"aria-label": "Sample page from a Vedora AI Readiness Report",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "panel-tag",
						children: "Sample · AI Readiness Report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "doc",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "doc-head",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: vedora_mark_png_asset_default.url,
										alt: "",
										style: {
											width: 22,
											height: "auto"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "AI Readiness Report" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sample client · p.4" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "doc-score",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "62" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Overall readiness score (out of 100)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bar",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Top opportunities" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
								[
									"Drafting quotes from site notes",
									"~6 hrs / wk",
									"low"
								],
								[
									"Matching supplier invoices",
									"~4 hrs / wk",
									"med"
								],
								[
									"Triage of customer emails",
									"~3 hrs / wk",
									"low"
								],
								[
									"Monthly management summary",
									"~2 hrs / mo",
									"low"
								]
							].map(([a, b, c]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: a }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: b }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `pill pill-${c}`,
									children: c === "low" ? "Low effort" : "Medium"
								}) })
							] }, a)) }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "doc-sign",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reviewed and approved" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Director" })]
							})
						]
					})]
				})
			})]
		})
	});
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BpShell, { children: (book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			label: "How we work",
			title: "Optimise first. Get ready. Then adopt.",
			lede: "We start with where your business loses time and money, not with the technology."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OraStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OraStep, {
			s: steps[0],
			alt: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OraStep, {
			s: steps[1],
			alt: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OraStep, {
			s: steps[2],
			alt: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleOutput, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrinciplesSec, {})
	] }) });
}
//#endregion
export { Page as component };
