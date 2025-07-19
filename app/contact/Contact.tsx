"use client";

import { useAppSelector } from "@/services/redux/store";
import { message } from "antd";
import { useState } from "react";

export default function ContactPage() {
  const theme = useAppSelector((state) => state.theme.value.lightMode);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: send form data to backend or email service
    message.success("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`min-h-screen px-6 py-12 transition-colors duration-500 ${
        theme
          ? "bg-gradient-to-br from-[#f9fbff] via-[#e6f0f8] to-[#f9fbff] text-gray-800"
          : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#096AD8]">
            Contact Us
          </h1>
          <p
            className={`mt-4 text-lg ${
              theme ? "text-gray-600" : "text-gray-300"
            }`}
          >
            We&apos;d love to hear from you. Whether you have questions,
            feedback, or a business inquiry — feel free to reach out.
          </p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`p-3 rounded-lg border ${
                theme
                  ? "bg-white text-gray-800"
                  : "bg-[#1e2a3a] text-white border-white/20"
              }`}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={`p-3 rounded-lg border ${
                theme
                  ? "bg-white text-gray-800"
                  : "bg-[#1e2a3a] text-white border-white/20"
              }`}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className={`p-3 rounded-lg border resize-none ${
                theme
                  ? "bg-white text-gray-800"
                  : "bg-[#1e2a3a] text-white border-white/20"
              }`}
            />
            <button
              type="submit"
              className="bg-[#096AD8] text-white py-3 rounded-lg hover:bg-[#0b5fc6] transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p>583-4 Yachimata-ho, Yachimata-shi, Chiba-ken, Japan</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <a
                href="tel:+81434423464"
                className="text-blue-600 hover:underline"
              >
                +81 43-442-3464
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <a
                href="mailto:support@hikartrading.com"
                className="text-blue-600 hover:underline"
              >
                support@hikartrading.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">🕒 Hours</h3>
              <p>Mon – Fri: 9:00 AM – 6:00 PM (JST)</p>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-center text-[#096AD8]">
            Our Location
          </h3>
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7914655327527!2d140.31374327524938!3d35.65750913127767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602292f030a9dd6f%3A0x147e0e711c1e9a29!2sYachimata%20Ho!5e0!3m2!1sen!2s!4v1750534147161!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
