import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold">Contact</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-gray-600">
            I'm always interested in hearing about new opportunities and collaborations. 
            Feel free to reach out through any of the following channels:
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={24} />
              <a href="mailto:belalmounir74@gmail.com" className="hover:text-blue-600">
                belalmounir74@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" size={24} />
              <a href="tel:+201003508191" className="hover:text-blue-600">
                +20 100 350 8191
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" size={24} />
              <span>Zifta, Gharbia, Egypt</span>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;