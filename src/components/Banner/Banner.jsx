import React from "react";

export default function Banner() {
  const bannerText = Array(6).fill("40% OFF ALL FIRST PURCHASES");

  return (
    <div className="w-full overflow-hidden bg-black py-2 text-white md:py-3">
      
      <div className="flex w-max animate-marquee items-center">
        
        {/* GROUP 1 */}
        <div className="flex shrink-0 items-center gap-8 px-4 md:gap-12">
          {bannerText.map((text, i) => (
            <span 
              key={`group1-${i}`} 
              className="whitespace-nowrap text-xs italic tracking-wide sm:text-sm md:text-base"
            >
              {text}
            </span>
          ))}
        </div>

        {/* GROUP 2 */}
        <div className="flex shrink-0 items-center gap-8 px-4 md:gap-12">
          {bannerText.map((text, i) => (
            <span 
              key={`group2-${i}`} 
              className="whitespace-nowrap text-xs italic tracking-wide sm:text-sm md:text-base"
            >
              {text}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}