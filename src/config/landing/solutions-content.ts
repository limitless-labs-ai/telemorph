export interface Solution {
  title: string;
  description: string;
  imagePath: string;
}

export const missionContent = {
  title: "Our Mission",
  description: `TeleMorph, the leading telecom management company in North America, is renowned for its steadfast commitment to excellence, responsibility, and leadership. Our goal is to offer our clients a personalized corporate structure that offers unmatched assurance, adaptability, security, resources, and cost-effectiveness. Our goal is to lead the telecom/IT services and management sector by providing solutions that enable current leaders to scale new heights. Through our 24/7 support line or adaptable web interface, our customers can always count on us to give them the service they need, whenever they need it. At TeleMorph we are dedicated to providing comprehensive and innovative IT services to businesses of all sizes, empowering them to navigate the ever-evolving digital landscape with ease. Our expertise spans across five core service areas, each tailored to cater to your unique business needs.`,
};

export const solutionsContent: Solution[] = [
  {
    title: "Procurement & Management",
    description:
      "Device procurement and management involves acquiring, configuring, and overseeing IT equipment like smartphones and tablets for a business. This includes selecting the right devices, negotiating contracts with carriers and vendors, deploying and setting up the equipment, providing ongoing support, troubleshooting, and managing the devices' end-of-life cycle. The goal is to equip employees with the necessary tools to enhance efficiency, security,and cost-effectiveness.",
    imagePath: "/images/solutions/technology.svg",
  },
  {
    title: "Data Management & Security",
    description:
      "Device security and data management involves safeguarding sensitive information stored on and transmitted by IT devices. This includes implementing secure passwords, encryption, access restrictions, monitoring usage and network connections, and ensuring data backups. The goal is to prevent data loss, theft, or unauthorized access while maintaining confidentiality. Effective policies, clear usage guidelines, regular security training, and tools like device management solutions and security software are essential.",
    imagePath: "/images/solutions/management.svg",
  },
  {
    title: "Maintenance & Support",
    description:
      "Maintenance and support encompass diagnosing and resolving both hardware issues, such as cracked screens or battery problems, and software issues, like sluggish performance or connectivity problems. These services can be provided by manufacturers, carriers, or independent repair shops. The goal is to restore the device's functionality, ensuring it operates efficiently so users can remain productive. This approach helps businesses extend the lifespan and value of their devices, reducing downtime and avoiding costly replacements.",
    imagePath: "/images/solutions/maintenance.svg",
  },
  {
    title: "ELD Solutions",
    description:
      "ELD software development helps trucking companies manage their logs and increase productivity by creating software and mobile applications for ELD devices. This entails offering trucking firms advising and training services on how to use ELD hardware and software as well as how to adhere to legal requirements.",
    imagePath: "/images/solutions/eld.svg",
  },
  {
    title: "Expense Management",
    description:
      "Expense management involves monitoring, regulating, and optimizing business costs related to hardware, service plans, and other associated expenses. It includes implementing policies for device management, analyzing usage reports to identify cost-saving opportunities, negotiating better rates with service providers, and providing employees with tools for economical device use. The goals are to reduce costs.",
    imagePath: "/images/solutions/cost-savings.svg",
  },
];
