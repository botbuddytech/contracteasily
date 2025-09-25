import type { Route } from "./+types/terms";
import { TermsAndConditionsPage } from "../components/TermsAndConditionsPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms and Conditions - Contract Easily" },
    { name: "description", content: "Read Contract Easily's terms and conditions. Understand your rights and obligations when using our legal document services and platform." },
    { name: "keywords", content: "terms and conditions, user agreement, legal terms, contract easily, legal services, terms of use, user rights, obligations" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Terms and Conditions - Contract Easily" },
    { property: "og:description", content: "Read Contract Easily's terms and conditions. Understand your rights and obligations when using our legal document services and platform." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://contracteasily.com/terms" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Terms and Conditions - Contract Easily" },
    { name: "twitter:description", content: "Read Contract Easily's terms and conditions. Understand your rights and obligations when using our legal document services and platform." },
  ];
}

export default function Terms() {
  return <TermsAndConditionsPage />;
}
