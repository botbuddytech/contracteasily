import type { Route } from "./+types/agreements.employment-agreement";
import { AgreementPage } from "../components/AgreementPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Employment Agreement Template - Contract Easily" },
    { name: "description", content: "Download professional employment agreement templates. Comprehensive employment contracts with all essential clauses for employers and employees." },
    { name: "keywords", content: "employment agreement, employment contract, job contract template, employment terms, hiring contract" },
  ];
}

export default function EmploymentAgreement() {
  const agreementData = {
    title: "Employment Agreement",
    category: "Employment",
    description: "A comprehensive employment agreement template that covers all essential terms and conditions for hiring employees, protecting both employer and employee rights.",
    videoUrl: "https://www.youtube.com/embed/X8PkkPiOOe4?start=20",
    overview: "An Employment Agreement is a legally binding contract between an employer and employee that outlines the terms and conditions of employment. This comprehensive template ensures both parties understand their rights, responsibilities, and obligations. It covers essential aspects such as job duties, compensation, benefits, working hours, confidentiality, and termination procedures. Our template is designed to comply with Indian labor laws and can be customized for various industries and positions.",
    keyFeatures: [
      "Comprehensive job description and responsibilities",
      "Clear compensation structure including salary, bonuses, and benefits",
      "Working hours, overtime policies, and leave entitlements",
      "Confidentiality and non-disclosure clauses",
      "Intellectual property rights protection",
      "Termination procedures and notice periods",
      "Non-compete and non-solicitation clauses",
      "Dispute resolution mechanisms",
      "Compliance with Indian labor laws",
      "Customizable for different industries and roles"
    ],
    stepByStepGuide: [
      "Download the employment agreement template from our secure platform",
      "Review the template thoroughly and identify sections that need customization",
      "Fill in company details including name, address, and registration information",
      "Add employee information including name, address, and contact details",
      "Specify the job title, department, and detailed job responsibilities",
      "Define compensation structure including base salary, allowances, and benefits",
      "Set working hours, leave policies, and overtime compensation rules",
      "Customize confidentiality and intellectual property clauses as needed",
      "Add any specific terms relevant to your industry or company policies",
      "Review all clauses with legal counsel if required",
      "Have both parties sign the agreement in the presence of witnesses",
      "Provide copies to both employer and employee for their records"
    ],
    importantClauses: [
      "Job Description and Duties: Clearly defines the employee's role, responsibilities, and reporting structure to avoid confusion and disputes.",
      "Compensation and Benefits: Specifies salary, allowances, bonuses, health insurance, and other benefits to ensure transparency in remuneration.",
      "Working Hours and Overtime: Establishes normal working hours, break times, and overtime compensation as per labor law requirements.",
      "Confidentiality Agreement: Protects company's sensitive information, trade secrets, and client data from unauthorized disclosure.",
      "Intellectual Property Rights: Clarifies ownership of work products, inventions, and creative works developed during employment.",
      "Termination Clause: Outlines conditions for termination, notice periods, and severance pay to protect both parties' interests.",
      "Non-Compete Agreement: Restricts employee from joining competitors or starting competing business for a specified period after termination.",
      "Grievance Procedure: Establishes a formal process for addressing workplace disputes and complaints in a fair manner."
    ],
    faqs: [
      {
        question: "Is this employment agreement template legally valid in India?",
        answer: "Yes, our employment agreement template is designed to comply with Indian labor laws including the Industrial Relations Code, 2020, and other relevant employment legislation. However, we recommend reviewing with legal counsel for specific industry requirements."
      },
      {
        question: "Can I modify the template for different types of employees?",
        answer: "Absolutely! The template is fully customizable and can be adapted for full-time, part-time, contractual, or temporary employees. You can modify clauses based on the nature of employment and industry requirements."
      },
      {
        question: "What happens if an employee violates the confidentiality clause?",
        answer: "Violation of confidentiality clauses can result in immediate termination, legal action for damages, and potential criminal charges depending on the severity. The agreement includes specific remedies and penalties for such breaches."
      },
      {
        question: "How long should the notice period be for termination?",
        answer: "Notice periods typically range from 30 to 90 days depending on the employee's position and industry standards. Senior positions usually require longer notice periods. Our template allows you to customize this based on your requirements."
      },
      {
        question: "Are non-compete clauses enforceable in India?",
        answer: "Non-compete clauses have limited enforceability in India under Section 27 of the Indian Contract Act. However, non-solicitation and confidentiality clauses are generally enforceable. We recommend consulting legal counsel for specific enforceability questions."
      },
      {
        question: "Can I use this template for international employees?",
        answer: "This template is specifically designed for Indian employment law. For international employees, additional clauses regarding visa requirements, tax obligations, and international labor laws may be needed. Consider consulting with international employment law experts."
      }
    ],
    relatedAgreements: [
      { title: "Non-Disclosure Agreement (NDA)", url: "/agreements/business/nda" },
      { title: "Consultant Agreement", url: "/agreements/business/consultant-agreement" },
      { title: "Internship Agreement", url: "/agreements/employment/internship-agreement" },
      { title: "Service Agreement", url: "/agreements/business/service-agreement" }
    ],
    iframeUrl: "https://docs.google.com/document/d/e/2PACX-1vSample/pub?embedded=true"
  };

  return <AgreementPage agreementData={agreementData} />;
}
