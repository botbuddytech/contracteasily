import type { Route } from "./+types/disclaimer";
import { DisclaimerPage } from "../components/DisclaimerPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Disclaimer - Contract Easily" },
    { name: "description", content: "Read Contract Easily's disclaimer. Important legal notices about the use of our legal document services and platform." },
    { name: "keywords", content: "disclaimer, legal notice, contract easily, legal services, terms of use, liability, legal documents, legal advice" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Disclaimer - Contract Easily" },
    { property: "og:description", content: "Read Contract Easily's disclaimer. Important legal notices about the use of our legal document services and platform." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://contracteasily.com/disclaimer" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Disclaimer - Contract Easily" },
    { name: "twitter:description", content: "Read Contract Easily's disclaimer. Important legal notices about the use of our legal document services and platform." },
  ];
}

export default function Disclaimer() {
  return <DisclaimerPage />;
}
