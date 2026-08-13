import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Schedule from "@/components/pages/Schedule";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Planning de diffusion — NefuSoft" },
      { name: "description", content: "Le calendrier hebdomadaire des sorties d'épisodes d'anime." },
      { property: "og:title", content: "Planning de diffusion — NefuSoft" },
      { property: "og:description", content: "Le calendrier hebdomadaire des sorties d'épisodes d'anime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Schedule />
    </ClientOnly>
  );
}
