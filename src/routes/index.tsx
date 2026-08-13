import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Welcome from "@/components/pages/Welcome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NefuSoft — Streaming d'anime en VOSTFR gratuit" },
      { name: "description", content: "Regardez des milliers d'animes sous-titrés en français gratuitement et en haute qualité sur NefuSoft." },
      { property: "og:title", content: "NefuSoft — Streaming d'anime en VOSTFR gratuit" },
      { property: "og:description", content: "Regardez des milliers d'animes sous-titrés en français gratuitement et en haute qualité sur NefuSoft." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Welcome />
    </ClientOnly>
  );
}
