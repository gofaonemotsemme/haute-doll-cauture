import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';

const NAV_LINKS = ["Home", "Shop", "Collections", "About", "Contact"];
const COUNTRIES = ["South Africa", "Botswana", "Namibia", "Zimbabwe"];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('ZA');
    
  

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* TIER 1 */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Tablet + Desktop: 3 columns, logo centered */}
        <div className="hidden items-center py-4 sm:grid sm:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-start">
            <label htmlFor="country" className="sr-only">Select your country</label>
            <select
              id="country"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <a href="/" className="font-heading justify-self-center text-2xl tracking-wide">
            <img src="/src/assets/hautedoll-logo.png" alt="HAUTE DOLL" />
          </a>

          <div className="justify-self-end">
            <button className="rounded-md bg-black px-5 py-2 text-sm text-white hover:bg-gray-800">
              Login
            </button>
          </div>
        </div>

        {/* Mobile phones only: logo + hamburger */}
        <div className="flex items-center justify-between py-4 sm:hidden">
          <a href="/" className="w-20 h-full object-cove">
                        <img src="/src/assets/hautedoll-logo.png" alt="HAUTE DOLL" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md p-2 hover:bg-gray-100"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* TIER 2 (tablet + desktop) */}
      <div className="hidden border-t sm:block">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-4 py-3">
          {/* Left — pages (wraps if tight) */}
          <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {NAV_LINKS.map((label) => (
              <a key={label} href="#" className="text-sm hover:underline">
                {label}
              </a>
            ))}
          </nav>

          {/* Right — search */}
          <form role="search" className="w-full max-w-sm justify-self-end">
            <input
              type="search"
              placeholder="Search products…"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </form>
        </div>
      </div>

      {/* MOBILE MENU (phones only) */}
      {open && (
        <div id="mobile-menu" className="border-t bg-white sm:hidden">
          <nav aria-label="Mobile" className="flex flex-col divide-y px-4">
            {NAV_LINKS.map((label) => (
              <a key={label} href="#" onClick={() => setOpen(false)} className="py-3 text-sm">
                {label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 border-t px-4 py-4">
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button className="w-full rounded-md bg-black px-5 py-2 text-sm text-white">Login</button>
          </div>

          <form role="search" className="border-t px-4 py-4">
            <input
              type="search"
              placeholder="Search products…"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </form>
        </div>
      )}
    </header>
  );
}