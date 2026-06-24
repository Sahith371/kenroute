import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — KenRoute" },
      { name: "description", content: "Simple, transparent pricing for travel businesses of every size. Pick the plan that fits and upgrade as you grow." },
      { property: "og:title", content: "Pricing — KenRoute" },
      { property: "og:description", content: "Simple, transparent pricing for travel businesses of every size." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageLayout
      eyebrow="Pricing"
      title={<>Simple, <span className="text-brand">transparent pricing.</span></>}
      description="Plans designed for the way travel businesses scale — from your first ten buses to your thousandth route."
    />
  );
}
