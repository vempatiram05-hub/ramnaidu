// components/ContactForm.jsx
import ContactFormClient from "./ContactFormClient";

async function getContactPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-page?populate=*`,
    { cache: "no-store" }
  );
  const json = await res.json();
  const sections = json.data?.sections;
  return sections?.find((s) => s.__component === "sections.contact-form");
}

export default async function ContactForm() {
  const f = await getContactPage();
  return <ContactFormClient f={f} />;
}