import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Ongoing from "@/components/pages/Ongoing";

export const Route = createFileRoute("/ongoing")({
  head: () => ({
    meta: [
      { title: "Animes en cours — NefuSoft" },
      { name: "description", content: "Tous les animes en cours de diffusion, mis à jour chaque semaine." },
      { property: "og:title", content: "Animes en cours — NefuSoft" },
      { property: "og:description", content: "Tous les animes en cours de diffusion, mis à jour chaque semaine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Ongoing />
    </ClientOnly>
  );
}
