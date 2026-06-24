import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/site/ProductsPage";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — KenRoute" },
      { name: "description", content: "Three products, one powerful ecosystem — Admin Panel, Agent Panel and Conductor App for modern travel businesses." },
      { property: "og:title", content: "Products — KenRoute" },
      { property: "og:description", content: "Three products, one powerful ecosystem — Admin Panel, Agent Panel and Conductor App for modern travel businesses." },
    ],
  }),
  component: ProductsPage,
});
