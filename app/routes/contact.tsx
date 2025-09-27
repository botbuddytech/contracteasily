import { ContactUs } from "~/components/ContactUs";

export function meta() {
  return [
    { title: "Contact Us - Contract Easily" },
    { name: "description", content: "Get in touch with our legal experts and support team. Submit your inquiry with ticket tracking and we'll respond within 24 hours." },
    { name: "keywords", content: "contact us, legal support, customer service, legal experts, contact form" },
  ];
}

export default function ContactPage() {
  return <ContactUs />;
}
