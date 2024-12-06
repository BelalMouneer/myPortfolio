import React from 'react';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    title: "MedixAI (AI based Healthcare system)",
    description: "Best Graduation Project with full mark. An advanced healthcare system featuring multiple AI models:",
    achievements: [
      "Symptoms Diagnosis: Built an ensemble model achieving 97.5% accuracy",
      "Diabetes Prediction: Fine-tuned Random Forest and XGBoost, achieving 99% accuracy",
      "Heart Failure Prediction: Implemented KNN with 91% accuracy rate",
      "Optometry Acuity Test: Real-time video processing with OpenCV and FastAPI",
      "AI Chatbot: Integrated LLAMA 3 for advanced conversational support"
    ],
    link: "https://www.linkedin.com/posts/ahmed-fathi-1a4593247_proud-to-share-our-graduation-project-ugcPost-7220460985872973824-o7Yw"
  },
  {
    title: "Customer Churn Analysis & Prediction",
    description: "Advanced machine learning project for customer churn prediction:",
    achievements: [
      "Applied SMOTEENN for class balancing",
      "Used chi-square tests for feature engineering",
      "Developed optimized models (XGBoost, Random Forest, SVC)",
      "Achieved 96% accuracy with Voting Classifier"
    ],
    github: "https://github.com/rashadibrahim/FaceRecognition"
  },
  {
    title: "Face Recognition System",
    description: "Computer vision project achieving high accuracy in face recognition:",
    achievements: [
      "Implemented KNN and PCA algorithms",
      "Achieved 97.5% accuracy in face recognition",
      "Optimized for real-time processing"
    ],
    github: "https://github.com/rashadibrahim/FaceRecognition"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm">{achievement}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4">
              {project.github && (
                <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              )}
              {project.link && (
                <a href={project.link} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Link size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;