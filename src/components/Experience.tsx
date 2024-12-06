import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Python Developer & AI Engineer",
    company: "Mega Dev",
    location: "Tanta, Egypt",
    period: "Sep 2024 - Present",
    description: [
      "Built a FastAPI backend for processing and standardizing inventory data.",
      "Developed secure APIs for uploading product sheets and automated product matching.",
      "Enabled price and discount comparisons across suppliers using fuzzy logic.",
      "Created a Flask-based module to manage invoices, transactions, and financial records.",
      "Implemented CRUD operations for accounts and entries with structured validation and logging.",
      "Designed a scalable database to support comprehensive financial tracking."
    ]
  },
  {
    title: "Trainee",
    company: "GUPCO",
    location: "Maadi",
    period: "Aug 2023 - Sep 2023",
    description: [
      "Gained practical experience in full-stack web development and application administration.",
      "Developed skills in OS management and help desk support, enhancing troubleshooting capabilities.",
      "Contributed to GUPCO's dynamic IT environment, demonstrating adaptability and commitment."
    ]
  },
  {
    title: "Trainee",
    company: "MCIT",
    location: "Smart Village",
    period: "Jul 2023 - Aug 2023",
    description: [
      "Selected for MCIT's competitive summer training in infrastructure, cybersecurity, and networking.",
      "Acquired hands-on experience in data center management, VoIP, and wireless networking.",
      "Built IT management skills working with industry experts in a professional setting."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-8 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-[1.02]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <h4 className="text-lg text-blue-600">{exp.company}</h4>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={18} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;