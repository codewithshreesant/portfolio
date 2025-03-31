import React from 'react'; // Replace with your actual image path

function MeasurementComp() {
  return (
    <div className="bg-black text-white py-20 px-6 flex justify-center items-center min-h-screen">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Text and Measurement Section */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-8">My <span className="font-normal">Measurements</span></h2>
          <div className="bg-gray-700 bg-opacity-70 rounded-lg p-8">
            <p className="text-lg mb-2">Height: <span className="font-semibold">13.97cm</span></p>
            <p className="text-lg mb-2">Bust: <span className="font-semibold">33</span></p>
            <p className="text-lg mb-2">Waist: <span className="font-semibold">27</span></p>
            <p className="text-lg mb-2">Hips: <span className="font-semibold">36</span></p>
            <p className="text-lg">Hair: <span className="font-semibold">Black</span></p>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src="images/image2.jpg"
            alt="Model on Runway"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MeasurementComp;