import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Donghua from "@/components/pages/Donghua";

export const Route = createFileRoute("/donghua")({
  head: () => ({
    meta: [
      { title: "Donghua en streaming — NefuSoft" },
      { name: "description", content: "Regardez les donghua chinois les plus récents, en cours et terminés." },
      { property: "og:title", content: "Donghua en streaming — NefuSoft" },
      { property: "og:description", content: "Regardez les donghua chinois les plus récents, en cours et terminés." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Donghua />
    </ClientOnly>
  );
}
