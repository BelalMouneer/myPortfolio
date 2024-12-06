import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Belal Mounir</h1>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#experience" className="hover:text-blue-600">Experience</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Zifta, Gharbia, Egypt</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/BelalMouneer" className="hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/belal-mounir" className="hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:belalmounir74@gmail.com" className="hover:text-blue-400">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400">
            © {new Date().getFullYear()} Belal Mounir. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;