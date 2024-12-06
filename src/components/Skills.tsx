import React from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 }
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Machine Learning", level: 95 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 85 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "End-to-End Model Deployment", level: 80 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Problem-Solving", level: 95 },
      { name: "Data Analysis", level: 90 },
      { name: "Effective Communication", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold">{category.title}</h3>
            <div className="mt-4 space-y-4">
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;