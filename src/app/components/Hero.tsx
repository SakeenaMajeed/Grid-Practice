"use client";
import React, { useState } from "react";

const Hero = () => {
  const [showMessage, setShowMessage] = useState(false);

  // Toggle the message on button click
  const handleShowMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-purple-400 relative pt-20">
      {/* Balloons - Top */}
      <div className="absolute -top-10 left-10 animate-bounce">🎈</div>
      <div className="absolute -top-10 right-10 animate-bounce">🎈</div>
      <div className="absolute top-20 left-32 animate-bounce">🎈</div>
      <div className="absolute top-20 right-32 animate-bounce">🎈</div>
      <div className="absolute -bottom-20 left-20 animate-bounce">🎈</div>
      <div className="absolute -bottom-20 right-20 animate-bounce">🎈</div>

      {/* Card Content with Neon Effect */}
      <div className="bg-white bg-opacity-90 p-8 rounded-3xl shadow-lg max-w-md text-center ring-4 ring-purple-600 glow transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
        { " Happy Teacher's Day!"}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
      {   " To the incredible Sir Hamzah, thank you for inspiring us every day!"}
        </p>

        <img
          src="/sirhamzah.jpg"
          alt="Sir Hamzah"
          className="w-48 h-48 mx-auto rounded-full border-4 border-purple-500 mb-4"
        />

        {/* Show Message Button */}
        <button
          onClick={handleShowMessage}
          className="bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-full mt-4 transition-all duration-300 shadow-md"
        >
          {showMessage ? "Hide Message" : "Show Message"}
        </button>

        {/* Hidden Message */}
        {showMessage && (
          <div className="mt-6">
            <p className="text-gray-700 mb-4">
              {
                " Happy Teacher's Day! 🎉Sir Hamzah, you are my favorite teacher! You have taught us programming languages like TypeScript and JavaScript, and your teaching style has always inspired me deeply. Thanks to your hard work, dedication, and knowledge, I have been able to enhance my skills significantly. Your guidance and support are invaluable to me, and I will always be grateful for your kindness. On this special day, I wish you all the happiness, success, and joy! Having a teacher like you is a great honor for all of us. Thank you, Sir Hamzah! ❤️"}
            </p>

            {/* Gallery - Show only if the message is displayed */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <img
                src="/h.jpg"
                alt="Moment 1"
                className="rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              />
              <img
                src="/si.png"
                alt="Moment 2"
                className="rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              />
              <img
                src="/sir.png"
                alt="Moment 3"
                className="rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              />
              <img
                src="/WhatsApp Image 2024-10-05 at 01.15.13_44f621be.jpg"
                alt="Moment 4"
                className="rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
