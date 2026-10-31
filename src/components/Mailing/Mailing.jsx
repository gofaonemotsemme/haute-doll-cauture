export default function Mailing() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-20">
      
      {/* Gray Container */}
      <div className="flex flex-col items-center justify-center rounded-[2rem] bg-[#f4f4f4] px-6 py-16 text-center md:px-12 md:py-20">
        
        {/* Headings */}
        <h2 className="text-3xl font-heading uppercase tracking-tight text-black sm:text-4xl">
          Join the Haute Doll Mailing List
        </h2>
        
        <p className="mt-2 font-serif text-lg italic text-gray-400 sm:text-xl">
          Exclusive product offers, curated information and more!
        </p>

        {/* Form */}
        <form 
          className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#1a1a1a] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-black"
          >
            Subscribe
          </button>
        </form>

        {/* Disclaimer */}
        <p className="mt-4 text-[11px] text-gray-400">
          We care about your data in our privacy policy.
        </p>

      </div>
    </section>
  );
}