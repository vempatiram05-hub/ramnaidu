import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";




export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
} 