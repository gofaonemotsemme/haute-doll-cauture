import React from 'react'
import { ArrowRight } from "lucide-react";

export default function Media() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">

        {/* ── ROW 1 ── */}
        
        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic1.jpg" 
              alt="Media 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic2.jpg"
              alt="Media 2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic3.png"
              alt="Media 3"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic4.jpg" 
              alt="Media 4"
              className="h-full w-full object-cover"
            />
          </div>
        </div>


        {/* ── ROW 2 ── */}

        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic5.jpg" 
              alt="Media 5"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic6.jpg" 
              alt="Media 6"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic7.jpg"
              alt="Media 7"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src="public/media/pic8.jpg"
              alt="Media 8"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>

      <div className="flex w-full flex-col items-center justify-center px-6 py-12">
  
        <p className="mb-6 text-center text-base text-gray-500 sm:text-lg">
          See what we’re up to on Instagram
        </p>

        <a
          href="#"
          className="flex items-center justify-center gap-4 rounded-xl bg-[#221b1b] px-8 py-4 text-white transition-all hover:bg-black hover:shadow-lg sm:px-10"
        >
          <span className="text-base font-bold sm:text-lg">View Full Profile</span>
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        
      </div>
    </section>
  );
}