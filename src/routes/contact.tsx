import { createFileRoute } from "@tanstack/react-router";
import { BpShell, PageHead, Arrow } from "@/components/bp";
import { BookingDialog } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in touch | Vedora" },
      { name: "description", content: "Book a free, no-obligation consultation with Vedora. We'll tell you honestly whether we can help." },
      { property: "og:title", content: "Get in touch | Vedora" },
      { property: "og:description", content: "Book a free, no-obligation consultation with Vedora. We'll tell you honestly whether we can help." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <BpShell>
      {() => (
        <>
          <PageHead label="Get in touch" title="Let's talk about where AI fits in your business." lede="Fill in the form below, or email us directly at hello@vedora.ie." />
          <section className="wrap" style={{ paddingBottom: 64 }}>
            <BookingDialog inline open onClose={() => {}} />
            <p style={{ marginTop: 16 }}><a className="text-link" href="mailto:hello@vedora.ie?subject=Enquiry%20from%20the%20Vedora%20website"><span>hello@vedora.ie</span> <Arrow /></a></p>
          </section>
        </>
      )}
    </BpShell>
  );
}
