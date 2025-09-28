import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/legal-documents", "routes/legal-documents.tsx"),
  route("/client-reminder", "routes/client-reminder.tsx"),
  route("/about", "routes/about.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/privacy", "routes/privacy.tsx"),
  route("/terms", "routes/terms.tsx"),
  route("/disclaimer", "routes/disclaimer.tsx"),
  route("/agreements/employment/employment-agreement", "routes/agreements.employment-agreement.tsx"),
] satisfies RouteConfig;
