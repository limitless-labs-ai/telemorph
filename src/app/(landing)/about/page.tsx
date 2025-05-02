import React from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { about } from "@/config/about";

function About() {
  return (
    <PageLayout>
      <div className="w-full max-w-7xl mx-auto px-8 py-8">
        {/* Hero Section */}
        <div className="bg-[var(--gradient-indigo)] p-16 rounded-2xl text-white mb-16">
          <p className="text-sm font-semibold tracking-wider text-[var(--brand-indigo-accent)] uppercase">
            {about.title}
          </p>
          <h2 className="text-5xl font-bold mt-4 mb-4 leading-tight">
            {about.header}
          </h2>
          <p className="text-lg text-[var(--brand-indigo-accent)]">
            {about.subHeader}
          </p>
        </div>

        {/* Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-wider text-[var(--brand-indigo)] uppercase">
              {about.journeySection.title}
            </p>
            <h1 className="text-4xl font-bold mt-4 mb-4 leading-tight">
              {about.journeySection.header}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {about.journeySection.description}
            </p>
          </div>

          <ol className="space-y-8">
            {about.journey.map((item, index) => (
              <li key={index}>
                <p className="space-y-2">
                  <span className="text-xl font-semibold text-[var(--brand-indigo)] block">
                    {item.title}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 block">
                    {item.description}
                  </span>
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <p className="text-sm font-semibold tracking-wider text-[var(--brand-indigo)] uppercase">
            {about.teamSection.title}
          </p>
          <h1 className="text-4xl font-bold mt-4 mb-8 leading-tight">
            {about.teamSection.header}
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.team.map((member, index) => (
              <li key={index} className="bg-gray-900 rounded-2xl p-8">
                <div className="relative w-48 h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={member.name}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-[var(--brand-indigo)] mt-2">
                    {member.role}
                  </p>
                  <p className="text-gray-400 mt-4">{member.description}</p>
                  <div className="flex gap-4 mt-6">
                    {member.social.map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.url}
                        aria-label={social.name}
                        className="text-gray-400 hover:text-[var(--brand-indigo-light)] transition-colors"
                      >
                        {social.name === "Twitter" && <Twitter size={20} />}
                        {social.name === "Instagram" && <Instagram size={20} />}
                        {social.name === "LinkedIn" && <Linkedin size={20} />}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;
