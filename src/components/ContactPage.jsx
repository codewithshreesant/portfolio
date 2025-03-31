import React from 'react';

function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center py-20 px-6">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-2">Get in touch</h1>
        <h2 className="text-4xl font-normal relative inline-block py-2">
          with me
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 border border-white rounded-full"></span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="text-center">
          <p className="text-lg mb-1">SEND ME A</p>
          <p className="text-lg">MESSAGE</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase mb-1">EMAIL</p>
          <p className="text-lg">
            <a
              href="mailto:shikhashrestha333@gmail.com"
              className="hover:underline"
            >
              shikhashrestha333@gmail.com
            </a>
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase mb-1">PHONE</p>
          <p className="text-lg">9744239317</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;