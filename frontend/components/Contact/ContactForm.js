"use client";
import { useState } from "react";
// import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: "",
    acceptedPolicy: false,
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1000);
  }

  return (
    <div className="contact-form">
      <h3 className="contact-form__title">Send Us a Message</h3>
      <p className="contact-form__subtitle">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="contact-form__form">
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="contact-form__input"
              required
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="contact-form__input"
              required
            />
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__label">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="contact-form__input"
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Your Company"
              className="contact-form__input"
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project or inquiry..."
            className="contact-form__textarea"
            rows={5}
            required
          />
        </div>

        <div className="contact-form__checkbox">
          <input
            type="checkbox"
            name="acceptedPolicy"
            id="policy"
            checked={form.acceptedPolicy}
            onChange={handleChange}
            className="contact-form__checkbox-input"
            required
          />
          <label htmlFor="policy" className="contact-form__checkbox-label">
            I agree to the <a href="/privacy-policy" className="contact-form__policy-link">Privacy Policy</a> and Terms of Service
          </label>
        </div>

        <button
          type="submit"
          className="contact-form__submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="contact-form__success">
            ✅ Message sent successfully! We'll get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}