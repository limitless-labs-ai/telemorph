export const contact = {
  title: "CONTACT US",
  header: "Get in touch with our team",
  subHeader:
    "We're here to help with any questions about our products, services, or partnerships.",

  officeSection: {
    title: "OUR OFFICES",
    header: "Visit us at our locations",
  },

  offices: [
    {
      name: "San Francisco",
      address: "123 Market Street, Suite 400",
      city: "San Francisco, CA 94105",
      phone: "+1 (415) 555-0123",
      email: "sf@telemorph.com",
      hours: "Monday-Friday: 9AM-6PM PST",
    },
    {
      name: "New York",
      address: "350 Fifth Avenue, 21st Floor",
      city: "New York, NY 10118",
      phone: "+1 (212) 555-0123",
      email: "nyc@telemorph.com",
      hours: "Monday-Friday: 9AM-6PM EST",
    },
  ],

  formSection: {
    title: "SEND A MESSAGE",
    header: "Let's start a conversation",
    description:
      "Fill out the form below and we'll get back to you within 24 hours.",
  },

  formFields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      name: "company",
      label: "Company Name",
      type: "text",
      placeholder: "Enter your company name",
      required: false,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      required: false,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What is this regarding?",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "How can we help you?",
      required: true,
    },
  ],

  social: {
    title: "FOLLOW US",
    description: "Stay connected with us on social media",
    links: [
      { name: "Twitter", url: "https://twitter.com/telemorph" },
      { name: "LinkedIn", url: "https://linkedin.com/company/telemorph" },
      { name: "Instagram", url: "https://instagram.com/telemorph" },
    ],
  },
};
