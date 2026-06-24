import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KenRoute" },
      { name: "description", content: "KenRoute is the smart travel operations platform from InfoSecDairies Private Limited — built by operators, for operators." },
      { property: "og:title", content: "About — KenRoute" },
      { property: "og:description", content: "KenRoute is the smart travel operations platform from InfoSecDairies Private Limited." },
    ],
  }),
  component: AboutPage,
});
