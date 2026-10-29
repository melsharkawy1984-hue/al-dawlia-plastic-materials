"use client";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/content";

export default function ContactForm({ locale, product = "" }: { locale: Locale; product?: string }) {
  const ar = locale === "ar";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fields = [
    ["company", ar ? "اسم الشركة" : "Company", "text"],
    ["contactPerson", ar ? "اسم مسؤول الاتصال" : "Contact name", "text"],
    ["email", ar ? "البريد الإلكتروني" : "Email", "email"],
    ["phone", ar ? "رقم الهاتف" : "Phone", "tel"],
    ["country", ar ? "الدولة" : "Country", "text"],
    ["product", ar ? "المنتج المطلوب" : "Product", "text"],
    ["quantity", ar ? "الكمية التقديرية" : "Estimated quantity", "text"],
  ];
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    const body = new URLSearchParams();
    new FormData(form).forEach((value,key) => body.set(key,String(value)));
    try {
      const stored = sessionStorage.getItem("aldawlia-source");
      if (stored) for (const [key,value] of Object.entries(JSON.parse(stored))) body.set(key,String(value));
    } catch { /* Source metadata is optional. */ }
    try {
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success"); form.reset();
    } catch { setStatus("error"); }
  }
  return <form name="sales-enquiry" method="POST" action="/__forms.html" onSubmit={submit} className="space-y-6">
    <input type="hidden" name="form-name" value="sales-enquiry" />
    <input type="hidden" name="locale" value={locale} />
    <p hidden><label>Leave empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div className="grid gap-6 md:grid-cols-2">{fields.map(([name,label,type]) => <label key={name} className="block text-sm font-semibold text-slate-900" htmlFor={`contact-${name}`}>{label}{["contactPerson","email"].includes(name) ? " *" : ""}<input id={`contact-${name}`} name={name} type={type} required={["contactPerson","email"].includes(name)} maxLength={250} defaultValue={name === "product" ? product : undefined} className="form-field" /></label>)}</div>
    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900">{ar ? "رسالتك" : "Message"} *<textarea id="contact-message" name="message" required maxLength={5000} className="form-field min-h-[150px]" /></label>
    <p className="text-sm leading-6 text-slate-600">{ar ? "سنستخدم بياناتك للرد على طلبك، ونسجّل مصدر الزيارة إن توفر لتحسين خدماتنا." : "We use your details to respond to your enquiry and record the visit source, when available, to improve our service."}</p>
    <button type="submit" disabled={status === "sending"} className="button-primary disabled:opacity-60">{status === "sending" ? (ar ? "جارٍ الإرسال…" : "Sending…") : (ar ? "إرسال الطلب" : "Send enquiry")}</button>
    <p role="status" aria-live="polite" className="text-sm leading-7 text-slate-900">{status === "success" ? (ar ? "تم استلام طلبك. سنتواصل معك قريبًا." : "Your enquiry has been received. We will contact you soon.") : status === "error" ? (ar ? "تعذّر إرسال الطلب. حاول مجددًا أو تواصل معنا عبر البريد أو واتساب." : "Unable to send. Please try again or contact us by email or WhatsApp.") : ""}</p>
  </form>;
}
