import { AboutUs } from "~/components/AboutUs";

export function meta() {
  return [
    { title: "About Us - Contract Easily" },
    { name: "description", content: "Learn about our team of expert lawyers and legal professionals who have been revolutionizing legal services with technology since 2020." },
    { name: "keywords", content: "about us, legal experts, lawyers, legal technology, document drafting, legal innovation" },
  ];
}

export default function AboutPage() {
  return <AboutUs />;
}
