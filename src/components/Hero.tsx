import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            Hi, I'm Belal Mounir
          </h1>
          <h2 className="mt-4 text-2xl text-gray-600">
            Data Scientist & Machine Learning Engineer
          </h2>
          <p className="mt-6 text-gray-600">
            Passionate Computer Engineering graduate specializing in AI, data science, and machine learning, 
            with strong Python development skills. Experienced in delivering AI solutions, with a foundation 
            in computer vision and NLP.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/BelalMouneer" 
               className="flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-800">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/belal-mounir"
               className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:belalmounir74@gmail.com"
               className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-50">
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-gray-900">
            <img
              src="IMG_20240714_210559_620.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
