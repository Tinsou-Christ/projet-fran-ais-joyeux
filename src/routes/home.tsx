import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Home from "@/components/pages/Home";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Accueil — NefuSoft" },
      { name: "description", content: "Les animes en cours de diffusion, le planning du jour et les titres les plus populaires du moment." },
      { property: "og:title", content: "Accueil — NefuSoft" },
      { property: "og:description", content: "Les animes en cours de diffusion, le planning du jour et les titres les plus populaires du moment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Home />
    </ClientOnly>
  );
}
