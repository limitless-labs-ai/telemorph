export const pricingTitles = {
  title: "Simple, Transparent Pricing",
  text: "Choose the plan that's right for you. All plans include a 14-dayfree trial.",
};

export const pricing = [
  {
    title: "Free",
    isPopular: false,
    price: {
      monthly: "0",
      yearly: "0",
    },
    buttonText: "Get Started",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1GB storage",
      "Email notifications",
    ],
  },
  {
    title: "Pro",
    isPopular: true,
    price: {
      monthly: "10",
      yearly: "8",
    },
    buttonText: "Get Started",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
      "Team collaboration",
      "API access",
    ],
  },
  {
    title: "Enterprise",
    isPopular: false,
    price: {
      monthly: "20",
      yearly: "16",
    },
    buttonText: "Get Started",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Unlimited storage",
      "Custom branding",
      "SLA guarantee",
      "Advanced security",
      "On-premise deployment",
    ],
  },
];
