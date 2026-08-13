import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import History from "@/components/pages/History";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Historique de visionnage — NefuSoft" },
      { name: "description", content: "Reprenez vos animes là où vous vous étiez arrêté grâce à votre historique." },
      { property: "og:title", content: "Historique de visionnage — NefuSoft" },
      { property: "og:description", content: "Reprenez vos animes là où vous vous étiez arrêté grâce à votre historique." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <History />
    </ClientOnly>
  );
}
