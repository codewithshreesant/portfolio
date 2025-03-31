import React from 'react';
import AboutComp from './AboutComp';
import MeasurementComp from './MeasurementComp';

function AboutPage() {
  return (
    <div className="flex flex-col gap-15 bg-black text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Main About Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img src="images/image4.jpg" alt="Shikha Shrestha" className="w-full h-[55vh]" />
        </div>
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
            About <span className="font-normal">me</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I have been modelling since more than 3 years. Currently I'm doing Bachelor's in Computer
            Application. I am very hardworking and always ready to learn.
          </p>
          <p className="text-lg leading-relaxed">
            I have that confident. I have won Envogue8 by House Of Fashion Nepal. Also right now I
            make content and also working as freelancer content creator.
          </p>
        </div>
      </div>

      {/* AboutComp Section */}
      <div className="container mx-auto">
        <AboutComp />
      </div>

      {/* MeasurementComp Section */}
      <div className="container mx-auto">
        <MeasurementComp />
      </div>
    </div>
  );
}

export default AboutPage;