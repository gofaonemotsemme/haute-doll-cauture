import React from 'react';

export default function Story() {
  return (
    <div 
      className="relative flex h-[500px] w-full items-center bg-cover bg-center bg-no-repeat px-6 sm:h-[600px] md:px-12 lg:px-20"
      style={{
        backgroundImage: "url('/story/story-background.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Container */}
      <div className="relative z-1 flex flex-col items-start">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
          <span>
            The New Era Of
          </span>
          <br />
          <span>
            The Living Doll
          </span>
        </h1>

        {/* Button */}
        <a
          href="#"
          className="mt-8 inline-flex items-center w-60 justify-center border-2 border-black bg-white px-8 py-3 text-xs font-semibold uppercase tracking-widest text-black transition-colors hover:bg-gray-200 sm:px-10 sm:py-4 sm:text-sm"
        >
          Our Story
        </a>
        
      </div>
    </div>
  );
}