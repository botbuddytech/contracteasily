import { Blog } from "~/components/Blog";

export function meta() {
  return [
    { title: "Legal Blog - Contract Easily" },
    { name: "description", content: "Expert legal insights, guidance, and industry updates from our team of legal professionals. Stay informed with the latest in legal education and best practices." },
    { name: "keywords", content: "legal blog, legal education, legal insights, legal guidance, legal articles, legal updates, contract law, employment law" },
  ];
}

export default function BlogPage() {
  return <Blog />;
}
