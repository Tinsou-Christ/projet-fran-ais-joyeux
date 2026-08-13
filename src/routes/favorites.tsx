import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Favorites from "@/components/pages/Favorites";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Mes favoris — NefuSoft" },
      { name: "description", content: "Retrouvez tous les animes que vous avez ajoutés à vos favoris." },
      { property: "og:title", content: "Mes favoris — NefuSoft" },
      { property: "og:description", content: "Retrouvez tous les animes que vous avez ajoutés à vos favoris." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Favorites />
    </ClientOnly>
  );
}
