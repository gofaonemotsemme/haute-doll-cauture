import React from 'react'
import { Star} from "lucide-react";

export default function Connect() {
  return (
    <section className="flex flex-col border-b items-center justify-center px-4 py-16 text-center md:py-24">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black sm:text-xs">
        Follow Our Journey
      </p>

      <div className="mt-2 flex items-center justify-center gap-1 text-black">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" strokeWidth={1} />
        ))}
      </div>

      <h2 className="mt-4 text-4xl font-black uppercase leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl font-heading">
        Stay Connected with Haute Doll
      </h2>

      <p className="mt-4 max-w-150 text-base leading-relaxed text-gray-500">
        Join our community across all platforms to stay updated on the latest
        finds, styling tips, and exclusive collections.
      </p>

      <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">

        <a href="/" className="h-5.5 w-5.5 fill-current justify-self-center text-2xl tracking-wide">
          <img src="/src/assets/connect/facebook.png" alt="facebook" />
        </a>

        <a href="/" className="h-5.5 w-5.5 fill-current justify-self-center text-2xl tracking-wide">
          <img src="/src/assets/connect/instagram.png" alt="instagram" />
        </a>

        <a href="/" className="h-5.5 w-5.5 fill-current justify-self-center text-2xl tracking-wide">
          <img src="/src/assets/connect/tiktok.png" alt="tiktok" />
        </a>
      </div>
    </section>
  )
}
