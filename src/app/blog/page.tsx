'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const PRODUCT_NAV = [
  { model: 'KD1902S', type: 'Vibration', id: 'kd1902s' },
  { model: 'KD1908S', type: 'Tilt Angle', id: 'kd1908s' },
  { model: 'KD1918S', type: 'Optical Tilt', id: 'kd1918s' },
  { model: 'KD1912',  type: 'Long Life', id: 'kd1912' },
  { model: 'KD1901S', type: 'Low Power', id: 'kd1901s' },
]

const POSTS = [
  {
    slug: 'kd1901s',
    title: 'KD1901S: Extending IoT Battery Life with Nano-Ampere Motion Wake-Up',
    excerpt: 'In the world of battery-powered IoT devices, power management is everything. The KD1901S proves that big innovation comes in the smallest of packages —?nano-ampere standby with instant wake-up.',
    date: 'Dec 20, 2025',
    readTime: '7 min read',
    category: 'Product Deep Dive',
    cover: '/blog-pic/KD1901S.jpg',
    tags: ['KD1901S', 'IoT', 'Low Power'],
    featured: true,
  },
  {
    slug: 'kd1918s',
    title: 'KD1918S-30: Redefining Safety with 360° SMD Optical Tilt Detection',
    excerpt: 'Traditional tilt switches suffer from contact wear and bounce. The KD1918S uses optical detection for a non-contact design that guarantees over 1,000,000 cycles of reliable safety shutoff.',
    date: 'Dec 12, 2025',
    readTime: '9 min read',
    category: 'Product Deep Dive',
    cover: '/blog-pic/KD1918S.jpg',
    tags: ['KD1918S', 'Optical', 'Safety'],
    featured: false,
  },
  {
    slug: 'kd1908s',
    title: 'Mastering Motion: The KD1908S SMD Angle Sensor for Precise Tilt Detection',
    excerpt: 'Whether it is a space heater that must shut off when it tips over, or a smartwatch that wakes up when you lift your wrist —?tilt detection is a critical safety and usability feature.',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    category: 'Product Deep Dive',
    cover: '/blog-pic/HS1908.jpg',
    tags: ['KD1908S', 'Tilt', 'Smart Home'],
    featured: false,
  },
  {
    slug: 'kd1902s',
    title: 'KD1902S: The 2-Million-Cycle Vibration Sensor for Industrial IoT Reliability',
    excerpt: 'In the lifecycle of a deployed IoT device, the sensor is often the mechanical weak point. The KD1902S is engineered with vacuum core-shell process for 2M+ cycles of reliable vibration sensing.',
    date: 'Dec 15, 2025',
    readTime: '7 min read',
    category: 'Product Deep Dive',
    cover: '/blog-pic/KD1902S.jpg',
    tags: ['KD1902S', 'Vibration', 'TPMS'],
    featured: false,
  },
  {
    slug: 'kd1912',
    title: 'KD1912: Setting the 5-Million-Cycle Benchmark for Vibration Sensors',
    excerpt: 'Standard market alternatives fail around 100k—?00k cycles. The KD1912 achieves 5 million reliable triggers using advanced materials and a vacuum-sealed core-shell structure.',
    date: 'Nov 28, 2025',
    readTime: '8 min read',
    category: 'Product Deep Dive',
    cover: '/blog-pic/KD1912S.jpg',
    tags: ['KD1912', 'Industrial', 'Durability'],
    featured: false,
  },
  {
    slug: 'smart-lighting',
    title: 'Case Study: Creating Interactive Magic with Vibration Sensors in Smart Lighting',
    excerpt: 'We tear down a "Shake-to-Change" RGB light bulb to see how a simple vibration sensor transforms a static object into an interactive experience —?and the circuit design behind it.',
    date: 'Nov 15, 2025',
    readTime: '5 min read',
    category: 'Case Study',
    cover: '/blog-pic/Blog.png',
    tags: ['Case Study', 'Smart Home', 'RGB'],
    featured: false,
  },
]

export default function BlogListPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroRef = useInView(0.1)
  const postsRef = useInView(0.1)

  const categories = ['All', 'Product Deep Dive', 'Case Study']
  const filtered = activeCategory === 'All' ? POSTS : POSTS.filter(p => p.category === activeCategory)
  const featured = POSTS[0]!
  const rest = filtered.filter(p => p.slug !== featured.slug || activeCategory !== 'All')

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

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="/" className="flex items-center shrink-0">
            <div className="bg-gray-900 rounded-xl px-3 py-1.5">
              <img src="/sitelogo22.png" alt="Kingdta" className="h-7 w-auto" />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Home</a>
            <div className="relative group">
              <a href="/products" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors py-5">
                Products
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-60 mt-1">
                  <div className="p-2">
                    <a href="/products" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 transition-colors">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /></svg>
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-xs">All Products</p>
                        <p className="text-gray-400 text-xs">5 sensor models</p>
                      </div>
                    </a>
                  </div>
                  <div className="border-t border-gray-50 px-2 pb-2 pt-1">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-3 py-1.5">Models</p>
                    {PRODUCT_NAV.map(p => (
                      <a key={p.model} href={`/products#${p.id}`} className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group/item">
                        <span className="text-gray-800 font-semibold text-sm group-hover/item:text-green-700 transition-colors">{p.model}</span>
                        <span className="text-gray-400 text-xs">{p.type}</span>
                      </a>
                    ))}
                  </div>
                  <div className="border-t border-gray-50 p-2">
                    <button onClick={() => setModalOpen(true)} className="w-full flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">Request Sample</button>
                  </div>
                </div>
              </div>
            </div>
            <a href="/solutions" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Solutions</a>
            <a href="/blog" className="text-sm font-medium text-green-700">Blog</a>
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">About</a>
            <a href="/contact" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:sales@kingdta.com" className="hidden md:block text-sm text-gray-500 hover:text-green-700 transition-colors">sales@kingdta.com</a>
            <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1">
            <a href="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Home</a>
            <a href="/products" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Products</a>
            <a href="/solutions" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Solutions</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-green-700 text-sm font-medium py-2">Blog</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-16">

        {/* HERO */}
        <section className="relative overflow-hidden bg-white py-20">
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent" />
          <div ref={heroRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex items-center gap-2 text-sm text-gray-400 mb-8 ${heroRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <a href="/" className="hover:text-green-600 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-600 font-medium">Blog</span>
            </div>
            <div className={`max-w-2xl ${heroRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
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
            {activeCategory === 'All' && (
              <a href={`/blog/${featured.slug}`} className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-900 rounded-3xl overflow-hidden card-hover block ${heroRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
                <div className="relative">
                  <img src={featured.cover} alt={featured.title} className="w-full h-72 lg:h-full object-cover" />
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
          <div ref={postsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter tabs */}
            <div className={`flex flex-wrap gap-2 mb-10 ${postsRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${activeCategory === cat ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700'}`}>
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-gray-400 text-sm self-center">{filtered.length} articles</span>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${postsRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
              {(activeCategory === 'All' ? rest : filtered).map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover group block">
                  <div className="overflow-hidden bg-black">
                    <img src={post.cover} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
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
          <img src="/D.1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Design with Kingdta Sensors?</h2>
            <p className="text-gray-400 mb-8">Get application-specific recommendations and free evaluation samples from our engineering team.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setModalOpen(true)} className="bg-green-600 hover:bg-green-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">Contact Us</button>
              <a href="/products" className="border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">View Products</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-950 pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <img src="/sitelogo22.png" alt="Kingdta" className="h-8 w-auto" />
              <div className="flex flex-wrap gap-5 text-sm text-gray-400">
                {[['/', 'Home'], ['/products', 'Products'], ['/solutions', 'Solutions'], ['/blog', 'Blog'], ['/about', 'About'], ['/contact', 'Contact']].map(([h, l]) => (
                  <a key={l} href={h} className={`hover:text-green-400 transition-colors ${h === '/blog' ? 'text-green-400' : ''}`}>{l}</a>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Shenzhen Kingdta Technology Co., Ltd. All rights reserved.</p>
              <p className="text-gray-600 text-sm">sales@kingdta.com · +86 18617165334</p>
            </div>
          </div>
        </footer>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden anim-fade-up">
            <div className="h-1.5 bg-gradient-to-r from-green-400 via-green-600 to-emerald-500" />
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-1">Get a Free Quote</h3>
                  <p className="text-gray-500 text-sm">We respond within 24 hours.</p>
                </div>
                <button onClick={() => setModalOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <form action="https://formsubmit.co/046212858f6a8cc4976203100919d247" method="POST" encType="multipart/form-data" className="space-y-4">
                <input type="hidden" name="_next" value="https://kingdta.com/thank-you/" />
                <input type="hidden" name="_subject" value="AD New Inquiry from kingdta Website Contact Form" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Kingdta. We have received your inquiry and will respond within 24 hours." />
                <input type="text" name="_honey" style={{display:"none"}} />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Name</label>
                    <input name="name" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input name="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company</label>
                    <input name="company" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
                    <input name="phone" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="+1 xxx xxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Project Details</label>
                  <textarea name="message" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" placeholder="Describe your project requirements..."></textarea>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Attachment</label>
                  <input name="attachment" type="file" accept="*/*" className="w-full text-sm text-gray-500 border border-gray-200 rounded-xl px-4 py-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
