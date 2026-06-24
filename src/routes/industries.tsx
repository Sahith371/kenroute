import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — KenRoute" },
      { name: "description", content: "Trusted across the mobility ecosystem — bus operators, tours, school transport, employee and corporate mobility." },
      { property: "og:title", content: "Industries — KenRoute" },
      { property: "og:description", content: "Trusted across the mobility ecosystem — bus operators, tours, school transport, employee and corporate mobility." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageLayout
      eyebrow="Industries"
      title={<>Built for the way <span className="text-brand">mobility moves.</span></>}
      description="From bus operators and tour companies to school and corporate transport, KenRoute powers operators of every shape and size."
    />
  );
}
