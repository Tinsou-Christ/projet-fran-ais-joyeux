import { createFileRoute } from "@tanstack/react-router";
import ClientOnly from "@/components/ClientOnly";
import Manga from "@/components/pages/Manga";

export const Route = createFileRoute("/manga")({
  head: () => ({
    meta: [
      { title: "Mangas et manhwas en ligne — NefuSoft" },
      { name: "description", content: "Lisez gratuitement les derniers chapitres de mangas, manhwas et manhuas." },
      { property: "og:title", content: "Mangas et manhwas en ligne — NefuSoft" },
      { property: "og:description", content: "Lisez gratuitement les derniers chapitres de mangas, manhwas et manhuas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Manga />
    </ClientOnly>
  );
}
