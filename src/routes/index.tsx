import { createFileRoute } from "@tanstack/react-router";
import { BpShell, Hero, Glimpses, CtaSec } from "@/components/bp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedora | Practical AI for Irish SMEs" },
      { name: "description", content: "Vedora helps small and medium businesses in Ireland work out where AI fits, train their teams to use it well, and put it to work safely." },
      { property: "og:title", content: "Vedora | Practical AI for Irish SMEs" },
      { property: "og:description", content: "Vedora helps small and medium businesses in Ireland work out where AI fits, train their teams to use it well, and put it to work safely." },
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
          <Hero book={book} />
          <Glimpses />
          <CtaSec book={book} />
        </>
      )}
    </BpShell>
  );
}
