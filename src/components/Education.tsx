import React from 'react';
import { Calendar } from 'lucide-react';

const education = [
  {
    degree: "Diploma in Data Science and Machine Learning",
    institution: "DEPI (MCIT)",
    period: "May 2024 - Nov 2024"
  },
  {
    degree: "Bachelor of Computer Engineering and Automatic Control",
    institution: "Faculty of Engineering, Tanta University",
    period: "Oct 2019 - Jul 2024"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="mt-8 space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <h4 className="mt-2 text-lg text-blue-600">{edu.institution}</h4>
            <div className="mt-2 flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span>{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;