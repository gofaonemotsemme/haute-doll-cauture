import React from 'react'
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

        {/* ── ROW 1 */}
        <a href="#" className="block overflow-hidden rounded-lg lg:col-span-12">
          <div className="">
            <img
              src="/src/assets/hero/haute-doll-banner.png"
              alt="Hero banner"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </a>

        {/* ── ROW 2 LEFT */}
        <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 p-5 border border-gray-500 rounded-lg">

                {/* top row: 2 columns of text */}
                <div className="grid grid-cols-2 items-center">
                    <div className="justify-self-start">
                        <span className="text-sm font-semibold">Shop by category</span>
                    </div>
                    <div className="justify-self-end">
                        <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                        >
                        Browse all
                        <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* bottom row: 2 columns of images */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                    src="/src/assets/hero/women.png"
                    alt="Feature A"
                    className="h-auto w-full rounded-lg"
                    />
                </div>
                <div className=" w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                    src="/src/assets/hero/accessories.png"
                    alt="Feature B"
                    className="h-auto w-full rounded-lg"
                    />
                </div>
                </div>

            </div>
        </div>

        {/* ── ROW 2 RIGHT */}
        <a
        href="#"
        className="relative block overflow-hidden rounded-lg lg:col-span-4"
        >
            <img
                src="/src/assets/hero/runway.png"
                alt=""
                className="h-auto w-full rounded-lg lg:absolute lg:inset-0 lg:h-full lg:object-cover"
            />
        </a>

      </div>
    </section>
  );
}