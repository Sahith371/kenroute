import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KenRoute" },
      { name: "description", content: "Get in touch with the KenRoute team — book a demo, ask a question or start your travel operations transformation today." },
      { property: "og:title", content: "Contact — KenRoute" },
      { property: "og:description", content: "Get in touch with the KenRoute team — book a demo or ask a question." },
    ],
  }),
  component: ContactPage,
});
