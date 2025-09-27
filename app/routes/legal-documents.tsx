import { LegalDocumentLibrary } from "~/components/LegalDocumentLibrary";

export function meta() {
  return [
    { title: "Legal Document Library - Contract Easily" },
    { name: "description", content: "Browse our comprehensive library of legal documents including agreements, affidavits, forms, and more." },
    { name: "keywords", content: "legal documents, agreements, affidavits, forms, legal templates, contract library" },
  ];
}

export default function LegalDocumentsPage() {
  return <LegalDocumentLibrary />;
}
