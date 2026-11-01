
export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        
        {/* ── TOP SECTION: Links & Newsletter ── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Main Pages */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-white">
              Main Pages
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ Page</a></li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-white">
              About Us
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sign Up Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Policy Page</a></li>
            </ul>
          </div>

          {/* Column 3: More */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-white">
              More
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Brand Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Info */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-6 lg:pl-10">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-white">
              Subscribe to our newsletter
            </h3>
            
            {/* Form */}
            <form className="mb-8 flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="info@hautedollcouture.co.za"
                className="w-full border border-gray-600 bg-transparent px-3 py-2 text-xs text-white placeholder-gray-500 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white px-6 py-2 text-[10px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>

            {/* Location */}
            <div className="mb-6">
              <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Location:
              </h4>
              <p className="text-[11px] text-gray-400">Johannesburg, South Africa</p>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Operating Hours:
              </h4>
              <p className="text-[11px] text-gray-400">24 hours online</p>
            </div>
          </div>

        </div>

        {/* ── MIDDLE SECTION: Large Logo Image ── */}
        <div className="my-16 flex w-full justify-center md:my-24">
          <img
            src="/footer/footer-logo.png" 
            alt="Haute Doll Couture"
            className="h-auto w-full max-w-4xl object-contain"
          />
        </div>

        {/* ── BOTTOM SECTION: Copyright & Socials ── */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-6 md:flex-row">
          
          {/* Left: Socials & Copyright */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-2 ">
              <div className="flex items-center gap-2 "></div>
              <a href="#" className="flex h-5 w-5 items-center justify-center rounded-sm text-white transition-colors hover:bg-gray-700">
                <img src="/footer/facebook.png" alt="facebook" />
              </a>
              <a href="#" className="flex h-5 w-5 items-center justify-center rounded-sm text-white transition-colors hover:bg-gray-700">
                <img src="/footer/tiktok.png" alt="tiktok" />
              </a>
              <a href="#" className="flex h-5 w-5 items-center justify-center rounded-sm text-white transition-colors hover:bg-gray-700">
                <img src="/footer/instagram.png" alt="instagram" />
              </a>
            </div>
            
            {/* Copyright text */}
            <p className="text-[10px] uppercase tracking-wider text-white">
              © All Rights Reserved by Haute Doll Couture
            </p>
          </div>

          {/* Right: Credit */}
          <p className="text-[10px] uppercase tracking-wider text-gray-500">
            Designed & Developed by <span className="font-black">LxB</span>
          </p>
          
        </div>

      </div>
    </footer>
  );
}