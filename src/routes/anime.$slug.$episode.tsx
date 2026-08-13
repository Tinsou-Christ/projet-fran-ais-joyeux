import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Watch from "@/components/pages/Watch";

export const Route = createFileRoute("/anime/$slug/$episode")({
  head: () => ({
    meta: [
      { title: "Regarder un épisode — NefuSoft" },
      { name: "description", content: "Lecteur vidéo, liste des épisodes et détails de la série." },
      { property: "og:title", content: "Regarder un épisode — NefuSoft" },
      { property: "og:description", content: "Lecteur vidéo, liste des épisodes et détails de la série." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Watch />
    </ClientOnly>
  );
}
