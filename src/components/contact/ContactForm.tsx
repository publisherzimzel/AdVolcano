"use client";

import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send message.");

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 text-[14px] border border-neutral-300 rounded-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-[13px] font-medium text-neutral-700 mb-1.5">
            First name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="firstName" name="firstName" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-[13px] font-medium text-neutral-700 mb-1.5">
            Last name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="lastName" name="lastName" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-neutral-700 mb-1.5">
          Work email <span className="text-red-500">*</span>
        </label>
        <input type="email" id="email" name="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="company" className="block text-[13px] font-medium text-neutral-700 mb-1.5">Company</label>
        <input type="text" id="company" name="company" className={inputClass} />
      </div>
      <div>
        <label htmlFor="role" className="block text-[13px] font-medium text-neutral-700 mb-1.5">Your role</label>
        <select id="role" name="role" className={`${inputClass} bg-white`}>
          <option value="">Select...</option>
          <option value="advertiser">Advertiser / Brand</option>
          <option value="agency">Agency</option>
          <option value="publisher">Publisher</option>
          <option value="developer">Developer / Technical</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="spend" className="block text-[13px] font-medium text-neutral-700 mb-1.5">Monthly programmatic spend</label>
        <select id="spend" name="spend" className={`${inputClass} bg-white`}>
          <option value="">Select...</option>
          <option value="100k-500k">$100K – $500K</option>
          <option value="500k-1m">$500K – $1M</option>
          <option value="1m-5m">$1M – $5M</option>
          <option value="5m+">$5M+</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-neutral-700 mb-1.5">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`} />
      </div>

      {error && (
        <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-sm">{error}</p>
      )}
      {success && (
        <p className="text-[13px] text-success bg-green-50 border border-green-200 px-4 py-3 rounded-sm">
          Thank you. Our team will respond within one business day.
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
        {loading ? "Sending…" : "Submit Request"}
      </button>
    </form>
  );
}
