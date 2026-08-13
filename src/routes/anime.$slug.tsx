import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/anime/$slug")({
  component: () => <Outlet />,
});
