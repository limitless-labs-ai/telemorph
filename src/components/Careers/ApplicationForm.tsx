"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ApplicationFormProps {
  jobTitle: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ jobTitle }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real app, you would send the form data to your API here
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="mt-8 p-6 border rounded-lg bg-green-50 text-green-800">
        <h2 className="text-xl font-semibold mb-2">Application Submitted!</h2>
        <p>
          Thank you for applying for the {jobTitle} position. Our team will
          review your application and contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-6">Apply for this Position</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleInputChange}
              className="px-3 py-2 border rounded-md"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleInputChange}
              className="px-3 py-2 border rounded-md"
              placeholder="john.doe@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleInputChange}
            className="px-3 py-2 border rounded-md"
            placeholder="+1 (123) 456-7890"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="resume" className="text-sm font-medium">
            Resume/CV <span className="text-red-500">*</span>
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            required
            onChange={handleFileChange}
            className="px-3 py-2 border rounded-md"
            accept=".pdf,.doc,.docx"
          />
          <p className="text-xs text-muted-foreground">
            Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="coverLetter" className="text-sm font-medium">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={6}
            value={formState.coverLetter}
            onChange={handleInputChange}
            className="px-3 py-2 border rounded-md resize-none"
            placeholder="Tell us why you're a good fit for this position..."
          ></textarea>
        </div>

        <div className="mt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
