import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bp-CYN0c6YW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var vedora_logo_default = "/vedora_website/assets/vedora-logo-CA-lA_Kw.png";
var vedora_mark_png_asset_default = {
	version: 1,
	asset_id: "bbd7a262-1a35-4039-9d38-0fe88ef4db4b",
	project_id: "e484d97d-fb7a-4986-a522-3e176a87d8d2",
	url: "/__l5e/assets-v1/bbd7a262-1a35-4039-9d38-0fe88ef4db4b/vedora-mark.png",
	r2_key: "a/v1/e484d97d-fb7a-4986-a522-3e176a87d8d2/bbd7a262-1a35-4039-9d38-0fe88ef4db4b/vedora-mark.png",
	original_filename: "vedora-mark.png",
	size: 32051,
	content_type: "image/png",
	created_at: "2026-10-18T14:39:36Z"
};
var supabase = createClient("https://rpbjxyabyazbmhfivvaw.supabase.co", "sb_publishable_BiZ1_2GSZC1ykUsq2Ud7wg_xdRaKIN9");
var bookingSchema = objectType({
	name: stringType().trim().min(1, "Please tell us your name").max(100, "Name must be under 100 characters"),
	email: stringType().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
	phone: stringType().trim().min(1, "Please enter your phone number").max(20, "Phone number must be under 20 characters").regex(/^\+?[0-9\s()-]{7,20}$/, "Please enter a valid phone number"),
	company: stringType().trim().min(1, "Please tell us your company name").max(100, "Company name must be under 100 characters"),
	size: stringType().min(1, "Please choose your business size"),
	topic: stringType().trim().max(500, "Please keep this under 500 characters").optional()
});
var emptyForm = {
	name: "",
	email: "",
	phone: "",
	company: "",
	size: "",
	topic: ""
};
var sizeOptions = [
	{
		value: "1-5",
		label: "1–5 people"
	},
	{
		value: "6-20",
		label: "6–20 people"
	},
	{
		value: "21-50",
		label: "21–50 people"
	},
	{
		value: "51-250",
		label: "51–250 people"
	},
	{
		value: "250+",
		label: "More than 250 people"
	}
];
function BookingDialog({ open, onClose, inline = false }) {
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const [consent, setConsent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open || inline) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [
		open,
		onClose,
		inline
	]);
	if (!open && !inline) return null;
	const set = (k) => (e) => {
		setForm((f) => ({
			...f,
			[k]: e.target.value
		}));
		setErrors((er) => ({
			...er,
			[k]: void 0
		}));
	};
	const submit = async (e) => {
		e.preventDefault();
		if (submitting) return;
		setSubmitError("");
		if (!consent) {
			setSubmitError("Please agree to the use of your details to arrange your call.");
			return;
		}
		const result = bookingSchema.safeParse(form);
		if (!result.success) {
			const fieldErrors = {};
			for (const issue of result.error.issues) {
				const key = issue.path[0];
				if (!fieldErrors[key]) fieldErrors[key] = issue.message;
			}
			setErrors(fieldErrors);
			return;
		}
		setErrors({});
		setSubmitting(true);
		try {
			const { error } = await supabase.from("call_requests").insert({
				name: result.data.name,
				email: result.data.email,
				phone: result.data.phone,
				company: result.data.company,
				business_size: result.data.size,
				message: result.data.topic || null,
				consent,
				status: "new"
			});
			if (error) {
				console.error("Supabase submission error:", error);
				setSubmitError("We couldn't submit your request. Please try again.");
				return;
			}
			setSent(true);
		} catch (error) {
			console.error("Unexpected submission error:", error);
			setSubmitError("Something went wrong. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
	const close = () => {
		if (inline) {
			setForm(emptyForm);
			setErrors({});
			setSent(false);
			setConsent(false);
			setSubmitError("");
			return;
		}
		onClose();
		setTimeout(() => {
			setForm(emptyForm);
			setErrors({});
			setSent(false);
			setConsent(false);
			setSubmitError("");
		}, 300);
	};
	const inputClass = "w-full rounded-[10px] border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";
	const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground";
	const errorClass = "mt-1 text-xs text-[#C27B5A]";
	const wrap = (children) => inline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative w-full rounded-[20px] border border-border bg-background p-6 md:p-8",
		children
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "booking-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Close booking form",
			onClick: close,
			className: "dialog-backdrop absolute inset-0 bg-foreground/50"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dialog-panel relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[20px] border border-border bg-background p-6 shadow-2xl md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: close,
				"aria-label": "Close",
				className: "absolute right-4 top-4 p-1 text-muted-foreground transition-colors hover:text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "h-5 w-5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M6 18L18 6M6 6l12 12"
					})
				})
			}), children]
		})]
	});
	return wrap(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "h-6 w-6",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M5 13l4 4L19 7"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "booking-title",
				className: "mt-5 font-display text-2xl font-medium text-primary",
				children: [
					"Thank you, ",
					form.name.split(" ")[0],
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground",
				children: [
					"Your request is noted. We’ll be in touch at ",
					form.email,
					" within one working day to arrange your 20-minute call."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: close,
				className: "mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
				children: "Done"
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold uppercase tracking-widest text-sage",
			children: "Book a call"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id: "booking-title",
			className: "mt-2 font-display text-2xl font-medium text-primary",
			children: "Tell us a little about you"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: "A free 20-minute call. No pressure."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			noValidate: true,
			className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-1 md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "bk-name",
							className: labelClass,
							children: "Name *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "bk-name",
							type: "text",
							value: form.name,
							onChange: set("name"),
							placeholder: "Your full name",
							className: inputClass,
							maxLength: 100
						}),
						errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: errorClass,
							children: errors.name
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-1 md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "bk-email",
							className: labelClass,
							children: "Email *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "bk-email",
							type: "email",
							value: form.email,
							onChange: set("email"),
							placeholder: "you@company.ie",
							className: inputClass,
							maxLength: 255
						}),
						errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: errorClass,
							children: errors.email
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "bk-phone",
							className: labelClass,
							children: "Phone *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "bk-phone",
							type: "tel",
							value: form.phone,
							onChange: set("phone"),
							placeholder: "+353 87 123 4567",
							className: inputClass,
							maxLength: 20,
							autoComplete: "tel"
						}),
						errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: errorClass,
							children: errors.phone
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-1 md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "bk-company",
							className: labelClass,
							children: "Company *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "bk-company",
							type: "text",
							value: form.company,
							onChange: set("company"),
							placeholder: "Your business name",
							className: inputClass,
							maxLength: 100
						}),
						errors.company && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: errorClass,
							children: errors.company
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-1 md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "bk-size",
							className: labelClass,
							children: "Business size *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "bk-size",
							value: form.size,
							onChange: set("size"),
							className: inputClass,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select…"
							}), sizeOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.value,
								children: s.label
							}, s.value))]
						}),
						errors.size && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: errorClass,
							children: errors.size
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 md:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "bk-topic",
							className: labelClass,
							children: ["What would you like to discuss? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-normal normal-case text-muted-foreground",
								children: "(optional)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "bk-topic",
							value: form.topic,
							onChange: set("topic"),
							rows: 2,
							placeholder: "e.g. We spend too long on admin and wonder if AI could help.",
							className: `${inputClass} resize-none`,
							maxLength: 500
						}),
						errors.topic && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: errorClass,
							children: errors.topic
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-2 md:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "bk-consent",
						className: "flex items-start gap-3 text-sm leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "bk-consent",
							type: "checkbox",
							checked: consent,
							onChange: (e) => {
								setConsent(e.target.checked);
								setSubmitError("");
							},
							disabled: submitting,
							required: true,
							className: "mt-1 h-4 w-4 shrink-0 accent-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I agree that Vedora may use the personal details I have provided to respond to my enquiry and arrange my requested call." })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: submitting,
					type: "submit",
					className: "w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2 md:col-span-6",
					children: submitting ? "Submitting..." : "Request my call"
				}),
				submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-sm text-red-600 sm:col-span-2 md:col-span-6",
					children: submitError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted-foreground sm:col-span-2 md:col-span-6",
					children: "We’ll only use these details to arrange your call."
				})
			]
		})
	] }) }));
}
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "arrow",
		width: "15",
		height: "15",
		viewBox: "0 0 16 16",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M3 8h9M8.5 4.5 12 8l-3.5 3.5",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function BpHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 8);
		const key = (e) => e.key === "Escape" && setOpen(false);
		on();
		window.addEventListener("scroll", on, { passive: true });
		document.addEventListener("keydown", key);
		return () => {
			window.removeEventListener("scroll", on);
			document.removeEventListener("keydown", key);
		};
	}, []);
	const close = () => setOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `bp-header${scrolled ? " scrolled" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap nav",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "brand",
					to: "/",
					"aria-label": "Vedora home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: vedora_logo_default,
						alt: "Vedora"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "menu-btn",
					"aria-label": "Menu",
					"aria-expanded": open,
					onClick: () => setOpen((o) => !o),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: `nav-links${open ? " open" : ""}`,
					"aria-label": "Main",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							onClick: close,
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							onClick: close,
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/approach",
							onClick: close,
							children: "Approach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							onClick: close,
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/testimonials",
							onClick: close,
							children: "Testimonials"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "btn btn-primary btn-sm",
							to: "/contact",
							onClick: close,
							children: "Get in touch"
						})
					]
				})
			]
		})
	});
}
function BpFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bp-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "foot-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "foot-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: vedora_logo_default,
							alt: "Vedora"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "foot-about",
							children: "Practical AI consultancy and training for small and medium businesses in Ireland."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "foot-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								children: "AI Readiness Assessment"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								children: "Training & workshops"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								children: "Adoption support"
							}) })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "foot-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Company" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/approach",
								children: "How we work"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/testimonials",
								children: "Testimonials"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Contact"
							}) })
						] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "foot-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Vedora Ltd (placeholder) · CRO no. 000000 · Registered address placeholder"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Privacy · Cookies" })]
			})]
		})
	});
}
function BpShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bp",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BpHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: children(() => setOpen(true)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BpFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDialog, {
				open,
				onClose: () => setOpen(false)
			})
		]
	});
}
function PageHead({ label, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "wrap page-head",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
			lede && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede",
				children: lede
			})
		]
	});
}
function Hero({ book }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "wrap hero",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label",
				children: "AI consultancy for Irish SMEs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Practical AI, adopted properly." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede hero-lede",
				children: "We help your business work out where AI genuinely fits, train your people to use it well, and put it to work safely."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "btn btn-primary",
					onClick: book,
					children: ["Book a free consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "text-link",
					to: "/approach",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "See how we work" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
					]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-panel",
			role: "img",
			"aria-label": "Example page from a Vedora AI Readiness Report",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "panel-tag",
				children: "What you receive · sample report page"
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
		})]
	}) });
}
var services = [
	{
		n: "01",
		t: "AI Readiness Assessment",
		p: "We look at how your business actually runs, then give you a written report: where AI could save time or money, what it would cost, the risks to watch, and a prioritised roadmap.",
		m: [["You get", "Written report + roadmap"], ["Typically", "2 to 3 weeks"]]
	},
	{
		n: "02",
		t: "Training & workshops",
		p: "Hands-on sessions built around your team's real work, from a half-day introduction to multi-session programmes for people ready to build their own tools.",
		m: [["Formats", "Half day to multi-session"], ["Delivered", "On site or online"]]
	},
	{
		n: "03",
		t: "Adoption & build support",
		p: "We help you put the roadmap into practice: setting up the right tools, building small automations and internal apps, and checking that they keep paying their way.",
		m: [["You get", "Working tools + review"], ["Engagement", "Project or retainer"]]
	}
];
function ServicesSec({ head = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec",
		id: "services",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [head && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sec-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						children: "What we do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "h-section",
						children: "Three ways we help, depending on where you are today."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: "Most businesses don't need an AI strategy deck. They need to know which tasks AI can take off their plate, and the confidence to do it."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "services",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "service",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "service-num",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: s.t })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.p }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "service-meta",
						children: s.m.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v })] }, k))
					})] })]
				}, s.n))
			})]
		})
	});
}
function StepsFlow({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "steps-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "steps-flow",
			children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "step-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "step-when",
						children: s.w
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ora-head",
						children: [s.letter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ora-letter",
							"aria-hidden": "true",
							children: s.letter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ora-meta",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: s.t })
						})]
					}),
					s.p && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.p })
				]
			}, s.w))
		})
	});
}
function AboutSec({ head = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec",
		id: "about",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [head && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sec-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					children: "Who you'll work with"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "h-section",
					children: "A small team, and the same people from first call to handover."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "people",
				children: ["AB", "CD"].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "person",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "avatar",
						"aria-hidden": "true",
						children: i
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Director name" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "role",
							children: "Director · role placeholder"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Two or three lines on background and what this person leads on. Photo replaces the initials." })
					] })]
				}, i))
			})]
		})
	});
}
function PrinciplesSec() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec sec-ruled",
		id: "principles",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sec-head",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "h-section",
					children: "Advice you can trust, and skills your team keeps."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "facts",
				children: [
					["Model-agnostic", "We don't resell any AI platform. We recommend whatever suits the job, including options that run entirely on your own machines."],
					["Your team stays in control", "We teach rather than create dependency. The aim is a team that can run, adapt and extend its own tools."],
					["Safety built in", "Data protection, GDPR and responsible-use guidance are part of every engagement, not an afterthought."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: d })] }, t))
			})]
		})
	});
}
function CtaSec({ book }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec",
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cta-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "h-section",
					children: "Not sure where AI fits in your business?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start with a free, no-obligation conversation. We'll tell you honestly whether we can help." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "btn btn-light",
					onClick: book,
					children: ["Book a free consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
				})]
			})
		})
	});
}
var reviews = [
	{
		q: "The free AI intro workshop was the perfect way in. No sales pitch, just clear explanations we could actually follow. We booked the assessment the same week.",
		n: "Marie O'Connor",
		r: "Owner, retail business, Cork"
	},
	{
		q: "The assessment told us the two things worth doing and, just as importantly, the five to skip. That kind of honesty saved us money and a lot of wasted effort.",
		n: "Declan Byrne",
		r: "Managing Director, logistics firm, Galway"
	},
	{
		q: "Our team uses what they learned every week. The training was built around our own processes, not a generic slide deck, and it shows.",
		n: "Aoife Kelly",
		r: "Operations Manager, professional services, Dublin"
	}
];
function TestimonialsSec({ head = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec sec-alt",
		id: "testimonials",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [head && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sec-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					children: "Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "h-section",
					children: "What businesses say after working with us."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reviews",
				children: reviews.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "review",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "stars",
							"aria-label": "5 out of 5 stars",
							children: "★★★★★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
							"“",
							t.q,
							"”"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.r })] })
					]
				}, t.n))
			})]
		})
	});
}
function MoreLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		className: "text-link",
		to,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
		]
	});
}
function Glimpses() {
	const featured = reviews[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "sec",
			id: "services",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glimpse-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						children: "What we do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "h-section",
						children: "Three ways we help."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
						to: "/services",
						children: "Explore our services"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glimpse-grid",
					children: [
						[
							"01",
							"AI Readiness Assessment",
							"A written report and roadmap of where AI fits."
						],
						[
							"02",
							"Training & workshops",
							"Hands-on sessions built around your team's real work."
						],
						[
							"03",
							"Adoption & build support",
							"Help putting the roadmap into practice."
						]
					].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "glimpse-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "service-num",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d })
						]
					}, n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "sec sec-alt sec-snug",
			id: "approach",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glimpse-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						children: "How we work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "h-section",
						children: "Start small, prove value, then build."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
						to: "/approach",
						children: "See our approach"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepsFlow, { steps: [
					[
						"Optimisation",
						"Measure and refine",
						"O"
					],
					[
						"Readiness",
						"Understand where you are",
						"R"
					],
					[
						"Adoption",
						"Start with quick wins",
						"A"
					]
				].map(([w, t, letter]) => ({
					w,
					t,
					letter
				})) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "sec",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap glimpse-split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glimpse-card static",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label",
							children: "Who you'll work with"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "A small team, and the same people from first call to handover." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Independent of any AI vendor, focused on teaching rather than dependency." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
							to: "/about",
							children: "Meet the team"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glimpse-card static",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label",
							children: "Testimonials"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "stars",
							children: "★★★★★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
							"“",
							featured.q,
							"”"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							featured.n,
							", ",
							featured.r
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
							to: "/testimonials",
							children: "Read more reviews"
						})
					]
				})]
			})
		})
	] });
}
function DetailList({ label, title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "sec sec-ruled",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sec-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "h-section",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glimpse-grid",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glimpse-card static",
					children: [it.letter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ora-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ora-letter",
							"aria-hidden": "true",
							children: it.letter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ora-meta",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: it.t })
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: it.t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "ticks",
						children: it.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pt }, pt))
					})]
				}, it.t))
			})]
		})
	});
}
//#endregion
export { CtaSec as a, Hero as c, ServicesSec as d, TestimonialsSec as f, BpShell as i, PageHead as l, Arrow as n, DetailList as o, vedora_mark_png_asset_default as p, BookingDialog as r, Glimpses as s, AboutSec as t, PrinciplesSec as u };
