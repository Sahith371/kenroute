import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KenRoute — Travel Operations, Simplified" },
      {
        name: "description",
        content:
          "Manage buses, routes, bookings, agents, conductors and analytics from one powerful platform built for modern travel businesses.",
      },
      { property: "og:title", content: "KenRoute — Travel Operations, Simplified" },
      {
        property: "og:description",
        content:
          "One platform for buses, routes, bookings, agents and conductors. Built for modern travel businesses.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
