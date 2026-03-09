// components/ContactFormClient.jsx
"use client";
import { useActionState } from "react";

async function submitForm(prevState, formData) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-submissions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phoneNumber: formData.get("phoneNumber"),
            companyName: formData.get("companyName"),
            message: formData.get("message"),
            acceptedPolicy: formData.get("acceptedPolicy") === "on",
          },
        }),
      }
    );

    if (res.ok) return { status: "success" };
    return { status: "error" };
  } catch {
    return { status: "error" };
  }
}

export default function ContactFormClient({ f }) {
  const [state, formAction, isPending] = useActionState(submitForm, null);

  return (
    <div className="contact-form">
      <h3 className="contact-form__title">{f?.title}</h3>
      <p className="contact-form__subtitle">{f?.subtitle}</p>

      {state?.status === "success" && (
        <p className="contact-form__success">{f?.successMessage}</p>
      )}

      {state?.status === "error" && (
        <p className="contact-form__error">{f?.errorMessage}</p>
      )}

      <form action={formAction} className="contact-form__form">
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__label">{f?.fullNameLabel}</label>
            <input
              type="text"
              name="fullName"
              placeholder={f?.fullNamePlaceholder}
              className="contact-form__input"
              required
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label">{f?.emailLabel}</label>
            <input
              type="email"
              name="email"
              placeholder={f?.emailPlaceholder}
              className="contact-form__input"
              required
            />
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__label">{f?.phoneNumberLabel}</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder={f?.phoneNumberPlaceholder}
              className="contact-form__input"
            />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label">{f?.companyNameLabel}</label>
            <input
              type="text"
              name="companyName"
              placeholder={f?.companyNamePlaceholder}
              className="contact-form__input"
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label">{f?.messageLabel}</label>
          <textarea
            name="message"
            placeholder={f?.messagePlaceholder}
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
            className="contact-form__checkbox-input"
            required
          />
          <label htmlFor="policy" className="contact-form__checkbox-label">
            {f?.policyText}{" "}
            <a href="/privacy-policy" className="contact-form__policy-link">
              {f?.privacyPolicyLabel}
            </a>{" "}
            {f?.andText}{" "}
            <a href="/terms-of-service" className="contact-form__policy-link">
              {f?.termsLabel}
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="contact-form__submit"
          disabled={isPending}
        >
          {isPending ? f?.sendingLabel : f?.submitLabel}
        </button>
      </form>
    </div>
  );
}