import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Explore from "@/components/pages/Explore";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explorer les animes — NefuSoft" },
      { name: "description", content: "Recherchez et filtrez par genre parmi des milliers d'animes disponibles en streaming." },
      { property: "og:title", content: "Explorer les animes — NefuSoft" },
      { property: "og:description", content: "Recherchez et filtrez par genre parmi des milliers d'animes disponibles en streaming." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Explore />
    </ClientOnly>
  );
}
