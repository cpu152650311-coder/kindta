import ContactModalButton from '@/components/contact/contact-modal-button'
import BlogSiteHeader from '@/components/site/blog-site-header'
import { BLOG_CATEGORIES, BLOG_LIST_POSTS } from '@/lib/blog-page-data'
import Image from 'next/image'

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const activeCategory = BLOG_CATEGORIES.includes((category as typeof BLOG_CATEGORIES[number]) ?? 'All')
    ? ((category as typeof BLOG_CATEGORIES[number]) ?? 'All')
    : 'All'
  const filtered = activeCategory === 'All'
    ? BLOG_LIST_POSTS
    : BLOG_LIST_POSTS.filter((post) => post.category === activeCategory)
  const featured = BLOG_LIST_POSTS[0]
  const rest = filtered.filter((post) => post.slug !== featured?.slug || activeCategory !== 'All')

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .anim-fade-up { animation: fadeUp 0.6s ease both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .hero-pattern { background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px); background-size: 32px 32px; }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
      `}</style>

      <BlogSiteHeader />

      <main className="pt-16">

        {/* HERO */}
        <section className="relative overflow-hidden bg-white py-20">
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 anim-fade-up">
              <a href="/" className="hover:text-green-600 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-600 font-medium">Blog</span>
            </div>
            <div className="max-w-2xl anim-fade-up delay-100">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                Kingdta Technical Blog
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Blog & <span className="text-green-600">Resources</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">In-depth product guides, application case studies, and engineering insights from the Kingdta sensor team.</p>
            </div>

            {/* Featured post */}
            {activeCategory === 'All' && featured && (
              <a href={`/blog/${featured.slug}`} className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-900 rounded-3xl overflow-hidden card-hover block anim-fade-up delay-200">
                <div className="relative min-h-72 lg:min-h-full">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50 hidden lg:block" />
                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="inline-block bg-green-600/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">{featured.category}</span>
                    <h2 className="text-white font-bold text-xl lg:text-2xl leading-tight mb-3">{featured.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-6">
                    <span>{featured.date}</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                  </div>
                </div>
              </a>
            )}
          </div>
        </section>

        {/* POST GRID */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-10 anim-fade-up">
              {BLOG_CATEGORIES.map(cat => (
                <a
                  key={cat}
                  href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${activeCategory === cat ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700'}`}
                >
                  {cat}
                </a>
              ))}
              <span className="ml-auto text-gray-400 text-sm self-center">{filtered.length} articles</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 anim-fade-up delay-100">
              {(activeCategory === 'All' ? rest : filtered).map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover group block">
                  <div className="relative overflow-hidden bg-black h-48">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-gray-900 font-bold text-base leading-snug mb-2 group-hover:text-green-700 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{post.date}</span>
                      <div className="flex gap-1">
                        {post.tags.slice(0, 2).map(t => (
                          <span key={t} className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <Image src="/D.1.jpg" alt="" fill sizes="100vw" className="absolute inset-0 object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Design with Kingdta Sensors?</h2>
            <p className="text-gray-400 mb-8">Get application-specific recommendations and free evaluation samples from our engineering team.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ContactModalButton
                label="Contact Us"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              />
              <a href="/products" className="border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">View Products</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-950 pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <Image src="/sitelogo22.png" alt="Kingdta" width={160} height={32} className="h-8 w-auto" />
              <div className="flex flex-wrap gap-5 text-sm text-gray-400">
                {[['/', 'Home'], ['/products', 'Products'], ['/solutions', 'Solutions'], ['/blog', 'Blog'], ['/about', 'About'], ['/contact', 'Contact']].map(([h, l]) => (
                  <a key={l} href={h} className={`hover:text-green-400 transition-colors ${h === '/blog' ? 'text-green-400' : ''}`}>{l}</a>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Shenzhen Kingdta Technology Co., Ltd. All rights reserved.</p>
              <p className="text-gray-600 text-sm">sales@kingdta.com - +86 18617165334</p>
            </div>
          </div>
        </footer>
      </main>

    </>
  )
}

