export const defaultMetadata = {
  title: "Privacy Policy | Limitless Labs",
  description:
    "Our commitment to protecting your privacy and personal information.",
};

export const privacyPolicy = {
  lastUpdated: new Date().toLocaleDateString(),
  sections: [
    {
      title: "1. Introduction",
      content:
        "At Subliminal, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.",
    },
    {
      title: "2. Information We Collect",
      content: "We collect information in the following ways:",
      subsections: [
        {
          title: "2.1 Personal Information",
          content:
            "We may collect personal information that you voluntarily provide to us when you:",
          list: [
            "Register for an account",
            "Subscribe to our newsletter",
            "Request customer support",
            "Participate in our forums or communities",
          ],
        },
        {
          title: "2.2 Automatically Collected Information",
          content:
            "When you access our service, we may automatically collect certain information about your device, including:",
          list: [
            "IP address",
            "Browser type",
            "Operating system",
            "Access times",
            "Pages visited",
          ],
        },
      ],
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We may use the information we collect for various purposes, including to:",
      list: [
        "Provide and maintain our service",
        "Notify you about changes to our service",
        "Provide customer support",
        "Monitor the usage of our service",
        "Detect, prevent and address technical issues",
      ],
    },
    {
      title: "4. Data Security",
      content:
        "We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.",
    },
    {
      title: "5. Your Rights",
      content: "You have the right to:",
      list: [
        "Access your personal information",
        "Correct inaccurate data",
        "Request deletion of your data",
        "Object to processing of your data",
        "Data portability",
      ],
    },
    {
      title: "6. Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at:",
      contact: {
        email: "privacy@subliminal.com",
      },
    },
  ],
};
