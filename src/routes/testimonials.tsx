import { createFileRoute } from "@tanstack/react-router";
import { BpShell, PageHead, TestimonialsSec, CtaSec } from "@/components/bp";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Vedora" },
      { name: "description", content: "What Irish small and medium businesses say after working with Vedora on AI assessments and training." },
      { property: "og:title", content: "Testimonials | Vedora" },
      { property: "og:description", content: "What Irish small and medium businesses say after working with Vedora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <BpShell>
      {(book) => (
        <>
          <PageHead label="Testimonials" title="What businesses say after working with us." />
          <div style={{ height: 48 }} />
          <TestimonialsSec head={false} />
          {/* <CtaSec book={book} /> */}
        </>
      )}
    </BpShell>
  );
}
