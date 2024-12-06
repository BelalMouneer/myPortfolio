import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-gray-600">
            As a Computer Engineering graduate with a focus on AI and machine learning, 
            I bring a unique blend of technical expertise and practical experience to the field. 
            My journey has been marked by successful project deliveries and a constant drive to 
            push the boundaries of what's possible with AI technology.
          </p>
          <p className="mt-4 text-gray-600">
            I specialize in developing end-to-end AI solutions, from data preprocessing to model 
            deployment. My experience spans computer vision, natural language processing, and 
            machine learning, with a track record of delivering high-accuracy models and 
            scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-bold">Education</h3>
            <p className="mt-2 text-gray-600">Computer Engineering, Tanta University</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-bold">Experience</h3>
            <p className="mt-2 text-gray-600">Python Developer at Mega Dev</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-bold">Location</h3>
            <p className="mt-2 text-gray-600">Zifta, Gharbia, Egypt</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-bold">Interests</h3>
            <p className="mt-2 text-gray-600">AI, Machine Learning, Data Science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;