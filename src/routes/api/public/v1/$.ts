import { createFileRoute } from "@tanstack/react-router";

const UPSTREAM = "https://apisoft.tiyan.biz.id/v1";

async function proxy({ request, params }: { request: Request; params: { _splat?: string } }) {
  const url = new URL(request.url);
  const target = `${UPSTREAM}/${params._splat ?? ""}${url.search}`;
  const upstream = await fetch(target, { headers: { accept: "application/json" } });
  const body = await upstream.text();
  return new Response(body, {
    status: upstream.status,
    headers: {
      "content-type": upstream.headers.get("content-type") ?? "application/json",
      "cache-control": "public, max-age=60",
    },
  });
}

export const Route = createFileRoute("/api/public/v1/$")({
  server: { handlers: { GET: proxy } },
});
