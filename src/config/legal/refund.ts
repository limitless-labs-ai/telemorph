export const defaultMetadata = {
  title: "Refund Policy | Limitless Labs",
  description: "Our policy regarding refunds and cancellations.",
};

export const refundPolicy = {
  lastUpdated: new Date().toLocaleDateString(),
  sections: [
    {
      title: "1. Overview",
      content:
        "At Subliminal, we strive to ensure complete satisfaction with our services. This Refund Policy outlines the terms and conditions for refunds and cancellations.",
    },
    {
      title: "2. Subscription Cancellation",
      content: "For subscription-based services:",
      list: [
        "You may cancel your subscription at any time through your account settings",
        "Cancellation will take effect at the end of your current billing period",
        "No refunds will be issued for partial subscription periods",
      ],
    },
    {
      title: "3. One-Time Purchases",
      content: "For one-time purchases:",
      list: [
        "Refund requests must be submitted within 14 days of purchase",
        "Refunds will be issued to the original payment method",
        "Processing time for refunds may vary depending on your payment provider",
      ],
    },
    {
      title: "4. Eligibility for Refunds",
      content: "Refunds may be issued in the following circumstances:",
      list: [
        "Technical issues preventing service access",
        "Service unavailability",
        "Billing errors",
        "Other circumstances at our sole discretion",
      ],
    },
    {
      title: "5. Non-Refundable Items",
      content: "The following are not eligible for refunds:",
      list: [
        "Consumed or used digital content",
        "Services already provided",
        "Special promotional offers marked as non-refundable",
      ],
    },
    {
      title: "6. How to Request a Refund",
      content: "To request a refund, please contact our support team with:",
      list: [
        "Your account email",
        "Order or subscription ID",
        "Reason for the refund request",
      ],
    },
    {
      title: "7. Contact Information",
      content:
        "For refund requests or questions about this policy, please contact us at:",
      contact: {
        email: "support@subliminal.com",
      },
    },
  ],
};
