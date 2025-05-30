"use client";

import React, { useState } from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import { Button } from "@/components/ui/button";
import { contact } from "@/config/contact";
import {
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      console.log("Submitting form data:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle rate limiting specifically
        if (response.status === 429) {
          toast.error(
            data.message ||
              "You're sending messages too quickly. Please wait before trying again."
          );
          return;
        }

        throw new Error(data.error || "Failed to send message");
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Show success message
      toast.success("Your message has been sent successfully!");
    } catch (error: unknown) {
      console.error("Error sending message:", error);

      // Display more detailed error message
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Background Image for Contact Page */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-50"
        style={{
          backgroundImage: "url('/contact_background.jpeg')",
        }}
      />

      {/* Gradient Overlays for Edge Blending */}
      <div className="fixed inset-0 bg-gradient-to-t from-background via-background/60 to-transparent -z-40" />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90 -z-40" />
      <div className="fixed inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70 -z-40" />

      {/* Additional overlay for better text readability */}
      <div className="fixed inset-0 bg-background/30 -z-40" />

      <PageLayout>
        <div className="w-full max-w-7xl mx-auto px-8 py-8 relative z-10">
          {/* Hero Section */}
          <div className="bg-[var(--gradient-indigo)] p-16 rounded-2xl text-white mb-16">
            <p className="text-sm font-semibold tracking-wider text-[var(--brand-indigo-accent)] uppercase">
              {contact.title}
            </p>
            <h2 className="text-5xl font-bold mt-4 mb-4 leading-tight">
              {contact.header}
            </h2>
            <p className="text-lg text-[var(--brand-indigo-accent)]">
              {contact.subHeader}
            </p>
          </div>

          {/* Form and Offices Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Form */}
            <div>
              <p className="text-sm font-semibold tracking-wider text-[var(--brand-indigo)] uppercase">
                {contact.formSection.title}
              </p>
              <h1 className="text-4xl font-bold mt-4 mb-4 leading-tight">
                {contact.formSection.header}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {contact.formSection.description}
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contact.formFields.slice(0, 4).map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {field.label}{" "}
                        {field.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--brand-indigo)] focus:border-transparent"
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>

                {contact.formFields.slice(4).map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={5}
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--brand-indigo)] focus:border-transparent"
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--brand-indigo)] focus:border-transparent"
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <p className="text-sm font-semibold tracking-wider text-[var(--brand-indigo)] uppercase">
                {contact.officeSection.title}
              </p>
              <h1 className="text-4xl font-bold mt-4 mb-8 leading-tight">
                {contact.officeSection.header}
              </h1>

              <div className="space-y-8">
                {contact.offices.map((office, index) => (
                  <div key={index} className="bg-gray-900 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {office.name}
                    </h3>
                    <div className="space-y-4 text-gray-400">
                      <div className="flex items-start gap-3">
                        <MapPin
                          className="text-[var(--brand-indigo-light)] mt-1 shrink-0"
                          size={20}
                        />
                        <div>
                          <p>{office.address}</p>
                          <p>{office.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone
                          className="text-[var(--brand-indigo-light)] shrink-0"
                          size={20}
                        />
                        <p>{office.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail
                          className="text-[var(--brand-indigo-light)] shrink-0"
                          size={20}
                        />
                        <p>{office.email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock
                          className="text-[var(--brand-indigo-light)] shrink-0"
                          size={20}
                        />
                        <p>{office.hours}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-12">
                <p className="text-sm font-semibold tracking-wider text-[var(--brand-indigo)] uppercase">
                  {contact.social.title}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
                  {contact.social.description}
                </p>
                <div className="flex gap-4">
                  {contact.social.links.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-[var(--brand-indigo-light)] transition-colors"
                    >
                      {social.name === "Twitter" && <Twitter size={20} />}
                      {social.name === "Instagram" && <Instagram size={20} />}
                      {social.name === "LinkedIn" && <Linkedin size={20} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default Contact;
