import { createFileRoute } from "@tanstack/react-router";
import { FeaturesPage } from "@/components/site/FeaturesPage";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — KenRoute" },
      { name: "description", content: "Every tool modern travel operators need — bus and route management, bookings, OTA integrations, analytics and more." },
      { property: "og:title", content: "Features — KenRoute" },
      { property: "og:description", content: "Every tool modern travel operators need — bus and route management, bookings, OTA integrations, analytics and more." },
    ],
  }),
  component: FeaturesPage,
});
