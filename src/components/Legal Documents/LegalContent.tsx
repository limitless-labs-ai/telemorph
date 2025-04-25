import React from "react";

interface Section {
  title: string;
  content?: string;
  list?: string[];
  subsections?: Section[];
  additionalContent?: string;
  contact?: {
    email: string;
  };
}

interface LegalContentProps {
  sections: Section[];
  lastUpdated: string;
}

export default function LegalContent({
  sections,
  lastUpdated,
}: LegalContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-lg mb-6">Last updated: {lastUpdated}</p>

      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p>{section.content}</p>

          {section.list && (
            <ul className="list-disc pl-6 mb-4">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}

          {section.additionalContent && (
            <p className="mt-4">{section.additionalContent}</p>
          )}

          {section.subsections && (
            <div className="mt-4">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-xl font-medium mb-3">
                    {subsection.title}
                  </h3>
                  <p>{subsection.content}</p>
                  {subsection.list && (
                    <ul className="list-disc pl-6 mb-4">
                      {subsection.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {section.contact && (
            <p>
              <br />
              Email: {section.contact.email}
            </p>
          )}
        </section>
      ))}
    </div>
  );
}
