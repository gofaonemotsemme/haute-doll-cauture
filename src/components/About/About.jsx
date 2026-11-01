import React from 'react';

export default function About() {
  return (
    <section className="bg-[#f2f2f2] py-16 px-6 md:py-24 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
        
        {/* ── LEFT COLUMN ── */}
        <div className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* Heading */}
          <h1 className="text-4xl font-light uppercase leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            The Makers <br /> Of The Muse
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-500 md:text-base">
            We hand-select labels that understand the weight of a stitch and the power of a drape. Whether it's the playful subversion of Miu Miu or the structural daring of modern icons, every piece in our collection is chosen because it refused to be forgotten. Fashion is a fleeting trend; Couture is a permanent state of mind.
          </p>

          {/* Logo Boxes */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            
            {/* Box 1: Mirror Palais */}
            <div className="flex aspect-square w-24 flex-col items-center justify-center border border-gray-200 bg-[#fdfbf7] p-2 text-center shadow-sm">
              <img src="/about/mirror-palais.png" alt="Mirror Palais Logo" className="h-full w-full object-contain" />
            </div>

            {/* Box 2: Miu Miu */}
            <div className="flex aspect-square w-24 items-center justify-center bg-black p-2 shadow-sm">
              <img src="/about/miu-miu.png" alt="Miu Miu Logo" className="h-full w-full object-contain" />
            </div>

            {/* Box 3: My Mom Made It */}
            <div className="flex aspect-square w-24 items-center justify-center border border-gray-200 bg-white p-2 text-center shadow-sm">
              <img src="/about/my-mum-made-it.png" alt="My Mom Made It Logo" className="h-full w-full object-contain" />
            </div>

          </div>
        </div>

        {/* ── RIGHT COLUMN: Image ── */}
        <div className="flex w-full justify-center lg:justify-end">
          <div className="w-full max-w-md overflow-hidden lg:max-w-full">
            <img
              src="/about/runway.jpg"
              alt="Model on runway"
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}