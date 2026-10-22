import { createFileRoute } from "@tanstack/react-router";
import { BpShell, DetailList, PageHead, ServicesSec, CtaSec } from "@/components/bp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Vedora" },
      { name: "description", content: "Three ways Vedora helps Irish SMEs: AI readiness assessments, training and workshops, and adoption and build support." },
      { property: "og:title", content: "Services | Vedora" },
      { property: "og:description", content: "Three ways Vedora helps Irish SMEs: AI readiness assessments, training and workshops, and adoption and build support." },
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
          <PageHead label="What we do" title="Three ways we help, depending on where you are today." lede="Most businesses don't need an AI strategy deck. They need to know which tasks AI can take off their plate, and the confidence to do it." />
          <ServicesSec head={false} />
          <DetailList label="What's included" title="What each service involves." items={[
            { t: "AI Readiness Assessment", points: ["Conversations with owners and key staff", "Review of your processes, data and tools", "Opportunities ranked by time saved and effort", "Risks, costs and GDPR considerations", "A prioritised, plain-English roadmap"] },
            { t: "Training & workshops", points: ["Free AI intro workshop to get started", "Sessions built on your team's real tasks", "Leadership and team-level formats", "On site or online", "Practical exercises, not slide decks"] },
            { t: "Adoption & build support", points: ["Choosing and setting up the right tools", "Small automations and internal apps", "Hands-on support while habits form", "Regular reviews of what is paying its way", "Run as a project or ongoing retainer"] },
          ]} />
          {/* <CtaSec book={book} /> */}
        </>
      )}
    </BpShell>
  );
}
