export const defaultMetadata = {
  title: "Terms of Service | Limitless Labs",
  description: "The terms and conditions for using our service.",
};

export const termsOfService = {
  lastUpdated: new Date().toLocaleDateString(),
  sections: [
    {
      title: "1. Agreement to Terms",
      content:
        "By accessing or using Subliminal's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.",
    },
    {
      title: "2. Use License",
      content:
        "Permission is granted to temporarily access and use Subliminal's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
      list: [
        "Modify or copy the materials",
        "Use the materials for any commercial purpose",
        "Attempt to decompile or reverse engineer any software contained in the service",
        "Remove any copyright or other proprietary notations from the materials",
        'Transfer the materials to another person or "mirror" the materials on any other server',
      ],
    },
    {
      title: "3. User Account",
      content:
        "To access certain features of the service, you may be required to create an account. You are responsible for:",
      list: [
        "Maintaining the confidentiality of your account information",
        "All activities that occur under your account",
        "Notifying us immediately of any unauthorized use of your account",
      ],
    },
    {
      title: "4. Service Modifications",
      content:
        "Subliminal reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "In no event shall Subliminal be liable for any damages arising out of the use or inability to use the materials on our service, even if we have been notified of the possibility of such damages.",
    },
    {
      title: "6. Governing Law",
      content:
        "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Subliminal operates, without regard to its conflict of law provisions.",
    },
    {
      title: "7. Contact Information",
      content:
        "If you have any questions about these Terms of Service, please contact us at:",
      contact: {
        email: "legal@subliminal.com",
      },
    },
  ],
};
