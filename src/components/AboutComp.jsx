import React from 'react';


function AboutComp() {
  return (
    <div className="bg-black text-white py-20 px-6 md:flex md:justify-end flex:col md:flex-row items-center h-screen">
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <div className="mb-10">
          <h1 className="text-6xl font-bold mb-2 text-center">About</h1>
          <h2 className="text-5xl font-normal text-center">Myself</h2>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 left-0 text-gray-600 text-xl">01.</div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
        <div className="rounded-full overflow-hidden shadow-lg">
          <img src="images/image1.jpg" alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-full overflow-hidden shadow-lg">
          <img src="images/image2.jpg" alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-full overflow-hidden shadow-lg">
          <img src="images/image3.jpg" alt="Image 3" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-full overflow-hidden shadow-lg relative">
          <img src="images/image4.jpg" alt="Image 4" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 right-[-40px] rotate-90 text-sm text-gray-400">EMAIL ME</div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;