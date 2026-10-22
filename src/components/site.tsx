import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import logo from "@/assets/vedora-logo.png";
import { supabase } from "@/lib/supabaseClient";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ————— Booking popup ————— */

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  phone: z.string().trim().min(1, "Please enter your phone number").max(20, "Phone number must be under 20 characters").regex(/^\+?[0-9\s()-]{7,20}$/, "Please enter a valid phone number"),
  company: z.string().trim().min(1, "Please tell us your company name").max(100, "Company name must be under 100 characters"),
  size: z.string().min(1, "Please choose your business size"),
  topic: z.string().trim().max(500, "Please keep this under 500 characters").optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const emptyForm: BookingForm = { name: "", email: "", phone: "", company: "", size: "", topic: "" };

const sizeOptions = [
  { value: "1-5", label: "1–5 people" },
  { value: "6-20", label: "6–20 people" },
  { value: "21-50", label: "21–50 people" },
  { value: "51-250", label: "51–250 people" },
  { value: "250+", label: "More than 250 people" },
];

export function BookingDialog({ open, onClose, inline = false }: { open: boolean; onClose: () => void; inline?: boolean }) {
  const [form, setForm] = useState<BookingForm>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (!open || inline) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, inline]);

  if (!open && !inline) return null;

  const set = (k: keyof BookingForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };


  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (submitting) return;
  
    setSubmitError("");
  
    // Consent is required
    if (!consent) {
      setSubmitError(
        "Please agree to the use of your details to arrange your call."
      );
      return;
    }
  
    // Validate form fields
    const result = bookingSchema.safeParse(form);
  
    if (!result.success) {
      const fieldErrors: Partial<
        Record<keyof BookingForm, string>
      > = {};
  
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof BookingForm;
  
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
  
      setErrors(fieldErrors);
      return;
    }
  
    setErrors({});
    setSubmitting(true);
  
    try {
      const { error } = await supabase
        .from("call_requests")
        .insert({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          company: result.data.company,
          business_size: result.data.size,
          message: result.data.topic || null,
          consent: consent,
          status: "new",
        });
  
      if (error) {
        console.error("Supabase submission error:", error);
        setSubmitError(
          "We couldn't submit your request. Please try again."
        );
        return;
      }
  
      setSent(true);
    } catch (error) {
      console.error("Unexpected submission error:", error);
      setSubmitError(
        "Something went wrong. Please try again."
      );
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

  const inputClass =
    "w-full rounded-[10px] border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";
  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground";
  const errorClass = "mt-1 text-xs text-[#C27B5A]";

  const wrap = (children: React.ReactNode) =>
    inline ? (
      <div className="relative w-full rounded-[20px] border border-border bg-background p-6 md:p-8">{children}</div>
    ) : (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button aria-label="Close booking form" onClick={close} className="dialog-backdrop absolute inset-0 bg-foreground/50" />
        <div className="dialog-panel relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[20px] border border-border bg-background p-6 shadow-2xl md:p-8">
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 p-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    );

  return wrap(
    <>
        {sent ? (
          <div className="py-6 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <h2 id="booking-title" className="mt-5 font-display text-2xl font-medium text-primary">
              Thank you, {form.name.split(" ")[0]}.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your request is noted. We&rsquo;ll be in touch at {form.email} within one working day to arrange your 20-minute call.
            </p>
            <button
              onClick={close}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-widest text-sage">Book a call</p>
            <h2 id="booking-title" className="mt-2 font-display text-2xl font-medium text-primary">
              Tell us a little about you
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A free 20-minute call. No pressure.
            </p>

            <form onSubmit={submit} noValidate className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
              <div className="sm:col-span-1 md:col-span-2">
                <label htmlFor="bk-name" className={labelClass}>Name *</label>
                <input id="bk-name" type="text" value={form.name} onChange={set("name")} placeholder="Your full name" className={inputClass} maxLength={100} />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>
              <div className="sm:col-span-1 md:col-span-2">
                <label htmlFor="bk-email" className={labelClass}>Email *</label>
                <input id="bk-email" type="email" value={form.email} onChange={set("email")} placeholder="you@company.ie" className={inputClass} maxLength={255} />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
              <div className="sm:col-span-2 md:col-span-2">
                <label htmlFor="bk-phone" className={labelClass}>Phone *</label>
                <input id="bk-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+353 87 123 4567" className={inputClass} maxLength={20} autoComplete="tel" />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>
              <div className="sm:col-span-1 md:col-span-3">
                <label htmlFor="bk-company" className={labelClass}>Company *</label>
                <input id="bk-company" type="text" value={form.company} onChange={set("company")} placeholder="Your business name" className={inputClass} maxLength={100} />
                {errors.company && <p className={errorClass}>{errors.company}</p>}
              </div>
              <div className="sm:col-span-1 md:col-span-3">
                <label htmlFor="bk-size" className={labelClass}>Business size *</label>
                <select id="bk-size" value={form.size} onChange={set("size")} className={inputClass}>
                  <option value="">Select…</option>
                  {sizeOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                {errors.size && <p className={errorClass}>{errors.size}</p>}
              </div>
              <div className="sm:col-span-2 md:col-span-6">
                <label htmlFor="bk-topic" className={labelClass}>What would you like to discuss? <span className="font-normal normal-case text-muted-foreground">(optional)</span></label>
                <textarea id="bk-topic" value={form.topic} onChange={set("topic")} rows={2} placeholder="e.g. We spend too long on admin and wonder if AI could help." className={`${inputClass} resize-none`} maxLength={500} />
                {errors.topic && <p className={errorClass}>{errors.topic}</p>}
              </div>

              <div className="sm:col-span-2 md:col-span-6">
                <label
                  htmlFor="bk-consent"
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <input
                    id="bk-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      setSubmitError("");
                    }}
                    disabled={submitting}
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-primary"
                  />

                  <span>
                    I agree that Vedora may use the personal details I have
                    provided to respond to my enquiry and arrange my requested
                    call.
                    {/* I understand that my details will be handled in
                    accordance with the{" "} */}
                    {/* <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 text-primary"
                    >
                      Privacy Policy
                    </a> */}
                  </span>
                </label>
              </div>

              <button
                disabled={submitting}
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2 md:col-span-6"
              >
                {submitting ? "Submitting..." : "Request my call"}
              </button>
              {submitError && (
                <p
                  role="alert"
                  className="text-sm text-red-600 sm:col-span-2 md:col-span-6"
                >
                  {submitError}
                </p>
              )}
              <p className="text-center text-xs text-muted-foreground sm:col-span-2 md:col-span-6">
                We&rsquo;ll only use these details to arrange your call.
              </p>
            </form>
          </>
        )}
    </>
  );
}

/* ————— Page sections ————— */

export function Header({ onBookCall }: { onBookCall: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-[0vw] pt-[4vw] pb-[1vw]">
        <div className="flex items-center rounded-full bg-[#F1F0EE] px-6 py-[22px]">
          <a href="/" aria-label="Vedora home">
            <img src={logo} alt="Vedora" className="h-9 w-auto md:h-10" />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-foreground md:flex ml-8">
            <Link to="/services" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>Services</Link>
            <Link to="/approach" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>Approach</Link>
            <Link to="/about" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>About</Link>
            <Link to="/contact" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>Get in touch</Link>
          </nav>
        </div>
        <button
          onClick={onBookCall}
          className="inline-flex items-center justify-center bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 rounded-full"
        >
          Book a call
        </button>
      </div>
      <nav className="flex gap-6 overflow-x-auto border-t border-border px-6 py-2.5 text-sm font-medium text-foreground md:hidden">
        <Link to="/services" className="shrink-0 hover:text-primary" activeProps={{ className: "text-primary" }}>Services</Link>
        <Link to="/approach" className="shrink-0 hover:text-primary" activeProps={{ className: "text-primary" }}>Approach</Link>
        <Link to="/about" className="shrink-0 hover:text-primary" activeProps={{ className: "text-primary" }}>About</Link>
        <Link to="/contact" className="shrink-0 hover:text-primary" activeProps={{ className: "text-primary" }}>Get in touch</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <a href="/" aria-label="Vedora home">
          <img src={logo} alt="Vedora" className="h-9 w-auto" />
        </a>
        <p>AI advisory &amp; learning &amp; development for Irish businesses.</p>
      </div>
    </footer>
  );
}
