import type { Route } from "./+types/privacy";
import { PrivacyPolicyPage } from "../components/PrivacyPolicyPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy - Contract Easily" },
    { name: "description", content: "Read Contract Easily's privacy policy to understand how we collect, use, and protect your personal information." },
    { name: "keywords", content: "privacy policy, data protection, personal information, Contract Easily" },
  ];
}

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
