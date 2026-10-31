const NEWS_POSTS = [
  {
    id: 1,
    image: "public/latest/digital-drift.jpg",
    date: "08.09.26",
    title: "Digital Drift",
    description: "Your real-time pulse on street style, subculture aesthetics, and the fast-moving world of 'core' fashion. From thrift finds to the latest drops, we define the next era of self-expression.",
  },
  {
    id: 2,
    image: "public/latest/edited-silhouette.jpg",
    date: "15.02.26",
    title: "The Edited Silhouette",
    description: "Curating a timeless wardrobe through the lens of modern minimalism. We explore the intersection of architectural design and everyday wear, focusing on quality over trends.",
  },
  {
    id: 3,
    image: "public/latest/woven-roots.jpg",
    date: "27.01.26",
    title: "Woven Roots",
    description: "Fashion that feels good for the soul and the planet. Join us as we spotlight ethical artisans, slow-fashion movements, and the future of circular textiles.",
  }
];

export default function LatestNews() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      
      {/* Section Title */}
      <h2 className="mb-10 text-4xl font-normal uppercase tracking-wide text-black sm:text-5xl lg:text-6xl">
        Our Latest News
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        
        {NEWS_POSTS.map((post) => (
          <article key={post.id} className="group flex flex-col">
            
            {/* Image & Date Badge */}
            <a href="#" className="relative block overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Date Badge */}
              <span className="absolute right-3 top-3 bg-white px-2.5 py-1 text-[11px] font-bold tracking-wider text-black">
                {post.date}
              </span>
            </a>

            {/* Text Content */}
            <div className="mt-5 flex flex-1 flex-col">
              <h3 className="text-2xl font-normal text-gray-900 md:text-3xl">
                {post.title}
              </h3>
              
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                {post.description}
              </p>
              
              <a 
                href="#" 
                className="mt-5 inline-block text-xs font-bold uppercase tracking-wide text-black hover:underline"
              >
                Read More
              </a>
            </div>

          </article>
        ))}

      </div>
    </section>
  );
}