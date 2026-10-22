import { createFileRoute } from "@tanstack/react-router";
import { BpShell, DetailList, PageHead, AboutSec, PrinciplesSec, CtaSec } from "@/components/bp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Vedora" },
      { name: "description", content: "A small team, and the same people from first call to handover. Meet who you'll work with at Vedora." },
      { property: "og:title", content: "About | Vedora" },
      { property: "og:description", content: "A small team, and the same people from first call to handover. Meet who you'll work with at Vedora." },
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
          <PageHead label="Who you'll work with" title="A small team, and the same people from first call to handover." />
          <AboutSec head={false} />
          <DetailList label="Why Vedora" title="What makes working with us different." items={[
            { t: "Built for Irish SMEs", points: ["We understand the budgets, teams and time of small and mid-sized businesses in Ireland"] },
            { t: "No hand-offs", points: ["You work directly with the practitioners behind the work, from first call to handover"] },
            { t: "Practical over theoretical", points: ["No hype or futuristic promises, just clear steps that save time today"] },
          ]} />
          <PrinciplesSec />
          {/* <CtaSec book={book} /> */}
        </>
      )}
    </BpShell>
  );
}
