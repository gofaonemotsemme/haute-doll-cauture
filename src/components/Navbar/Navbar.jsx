import { useState, useEffect } from "react";
import { Bell, Heart, ShoppingCart, Search } from "lucide-react";

const NAV_LINKS = ["OUR STORY", "HAUTE DOLL", "TOPS", "ACCESSORIES", "FAQ"];
const MOBILE_NAV_LINKS = ["OUR STORY", "HAUTE DOLL", "TOPS", "ACCESSORIES", "FAQ", "NOTIFICATIONS", "WISHLIST", "CART"];
const COUNTRIES = ["South Africa", "Botswana", "Namibia", "Zimbabwe"];
const COUNTRY_CODES = {
  "South Africa": "za",
  "Botswana": "bw",
  "Namibia": "na",
  "Zimbabwe": "zw",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-400 bg-white transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* TIER 1 */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Desktop (lg+): 3 columns, logo centered */}
        <div className="hidden items-center py-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-start flex items-center gap-2">
            <label htmlFor="country" className="sr-only">Select your country</label>
            <img
              src={`https://flagcdn.com/w80/${COUNTRY_CODES[country]}.png`}
              alt={`${country} flag`}
              className="w-6 h-6 rounded-full object-cover ring-1 ring-gray-300"
            />
            <span className="flex items-center text-sm ml-2">
              <span className="h-10 w-px bg-gray-500 mr-2" /> 
              Ship to
            </span>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="py-2 text-sm focus:outline-none focus:ring-2"
            >
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <a href="/" className="font-heading justify-self-center text-2xl tracking-wide">
            <img src="/hautedoll-logo.png" alt="HAUTE DOLL" />
          </a>

          <div className="justify-self-end flex items-center gap-4">
            <button className="text-gray-700 hover:text-black">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-black">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-black">
              <ShoppingCart className="w-5 h-5" />
            </button>

            <div className="h-10 w-px bg-gray-500" />

            <button className="rounded-md border-3 border-black bg-black px-5 py-2 text-sm font-bold text-white hover:bg-white hover:text-black ">
              Register
            </button>

            <button className="rounded-md border-3 border-black bg-white px-5 py-2 text-sm font-bold text-black hover:bg-black hover:text-white">
              Sign In
            </button>
          </div>
        </div>

        {/* Phones + tablets (below lg): logo + hamburger */}
        <div className="flex items-center justify-between py-4 lg:hidden"> 
          <a href="/" className="w-20 h-full object-cove">
            <img src="/hautedoll-logo.png" alt="HAUTE DOLL" />
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

      {/* TIER 2 (desktop only) */}
      <div className="hidden lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-4 pb-3">
          <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {NAV_LINKS.map((label) => (
              <a key={label} href="#" className="font-heading text-sm text-gray-500 hover:underline">
                {label}
              </a>
            ))}
          </nav>

          <form role="search" className="flex w-72 max-w-sm items-center justify-self-end">
            <input
              type="search"
              placeholder="Search products…"
              className="min-w-0 flex-1 rounded-lg bg-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button type="submit" aria-label="Search" className="ml-2 text-gray-700 hover:text-black">
              <Search className="w-5 h-5  text-gray-700" />
            </button>
          </form>

          
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div id="mobile-menu" className="border-t bg-white lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col divide-y px-4">
            {MOBILE_NAV_LINKS.map((label) => (
              <a key={label} href="#" onClick={() => setOpen(false)} className="py-3 text-sm">
                {label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 border-t px-4 py-4">
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button className="w-full rounded-md border-3 border-black bg-black px-5 py-2 text-sm font-bold text-white hover:bg-white hover:text-black ">Register</button>
            <button className="w-full rounded-md border-3 border-black bg-white px-5 py-2 text-sm font-bold text-black hover:bg-black hover:text-white">Sign In</button>
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