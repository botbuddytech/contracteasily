import type { Route } from "./+types/home";
import { LandingPage } from "../components/LandingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contract Easily - Legal Document Templates & Legal Solutions" },
    { name: "description", content: "Create legal contracts in minutes with Contract Easily. Access 500+ legal document templates and manage your legal matters easily." },
    { name: "keywords", content: "legal documents, contract templates, legal agreements, contract drafting, legal solutions" },
  ];
}

export default function Home() {
  return <LandingPage />;
}
