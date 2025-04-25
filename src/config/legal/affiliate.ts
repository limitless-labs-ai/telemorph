export const defaultMetadata = {
  title: "Affiliate Terms | Limitless Labs",
  description: "Terms and conditions for our affiliate program.",
};

export const affiliateTerms = {
  lastUpdated: new Date().toLocaleDateString(),
  sections: [
    {
      title: "1. Agreement to Terms",
      content:
        "By participating in the Subliminal Affiliate Program, you agree to these terms and conditions. We reserve the right to modify these terms at any time, and your continued participation constitutes acceptance of any changes.",
    },
    {
      title: "2. Program Eligibility",
      content: "To be eligible for the Affiliate Program, you must:",
      list: [
        "Be at least 18 years old",
        "Have a valid website or social media presence",
        "Not promote competing products or services",
        "Comply with all applicable laws and regulations",
      ],
    },
    {
      title: "3. Commission Structure",
      content: "Commission rates are as follows:",
      list: [
        "Standard commission: 20% of the sale price",
        "Premium commission: 25% for high-performing affiliates",
        "Special promotions may have different commission rates",
      ],
      additionalContent:
        "Commissions are paid monthly for all qualified sales from the previous month. Minimum payout threshold is $50.",
    },
    {
      title: "4. Marketing Guidelines",
      content: "Affiliates must:",
      list: [
        "Use only approved marketing materials",
        "Clearly disclose affiliate relationship",
        "Not engage in spam or deceptive marketing",
        "Not use our trademarks without permission",
        "Not make false or misleading claims",
      ],
    },
    {
      title: "5. Tracking and Attribution",
      content:
        "Sales are tracked through unique affiliate links. We are not responsible for:",
      list: [
        "Technical issues preventing proper tracking",
        "Sales made outside the tracking period",
        "Sales where the affiliate link was not used",
      ],
    },
    {
      title: "6. Payment Terms",
      content:
        "Payments will be made via the method selected during registration. We reserve the right to withhold payment if:",
      list: [
        "Terms of service are violated",
        "Fraudulent activity is detected",
        "Required tax information is not provided",
      ],
    },
    {
      title: "7. Termination",
      content:
        "We reserve the right to terminate any affiliate's participation in the program for violations of these terms or any other reason we deem appropriate.",
    },
    {
      title: "8. Contact Information",
      content:
        "For questions about the Affiliate Program, please contact us at:",
      contact: {
        email: "affiliates@subliminal.com",
      },
    },
  ],
};
