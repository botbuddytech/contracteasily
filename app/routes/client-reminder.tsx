import { ClientReminderSystem } from "~/components/ClientReminderSystem";

export function meta() {
  return [
    { title: "Client Reminder Bot - Contract Easily" },
    { name: "description", content: "Subscribe to our free WhatsApp reminder bot for AI-powered insights on business transactions, banking laws, income tax, GST, TDS, and state-specific compliances." },
    { name: "keywords", content: "client reminder bot, WhatsApp subscription, business compliance, income tax, GST, TDS, banking laws, legal reminders" },
  ];
}

export default function ClientReminderPage() {
  return <ClientReminderSystem />;
}
