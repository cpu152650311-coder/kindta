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

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// DATA
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€

const PRODUCT_MENU = [
  {
    label: 'Sensor Modules',
    meta: 'Vibration / Tilt / Optical',
    desc: 'Core passive sensing products for smart hardware and industrial devices.',
    href: '/products',
  },
  {
    label: 'Radar Modules',
    meta: 'Microwave / BSD / custom',
    desc: 'Radar products for presence detection, motion sensing, and blind-spot applications.',
    href: '/radar-modules',  },
]

// Category cards
const CATEGORIES = [
  {
    img: '/B2.1.png',
    tag: 'Most Popular',
    tagColor: 'bg-green-500',
    title: 'Omni-directional\nVibration Sensors',
    desc: 'High sensitivity, 2M+ cycle life, a high-temperature polymer housing, and a compact footprint.',
    applications: 'Vibration sensing systems, smart security devices, TPMS, and wearable wake-up functions.',
    href: '#kd1902s',
    models: ['KD1902S', 'KD1912', 'KD1901S'],
  },
  {
    img: '/B2.2.png',
    tag: 'Precision',
    tagColor: 'bg-blue-500',
    title: 'Tilt & Angle\nSensors',
    desc: '360-degree tilt detection with stable performance, microamp-level power consumption, and high accuracy.',
    applications: 'Power tool safety shut-off, smart pen gesture detection, medical device position sensing.',
    href: '#kd1908s',
    models: ['KD1908S'],
  },
  {
    img: '/B2.3.png',
    tag: 'Custom',
    tagColor: 'bg-purple-500',
    title: 'Optical &\nCustomized Solutions',
    desc: 'Built on proven vibration and tilt sensing technology, with custom design, engineering, and manufacturing support for your specific requirements.',
    applications: 'Non-standard products requiring unique form factors, sensitivity, or packaging.',
    href: '#kd1918s',
    models: ['KD1918S', 'Custom'],
  },
]

const RADAR_PREVIEW = [
  {
    title: 'Microwave Presence Module',
    model: 'BD4101A-C04',
    img: '/radar/bd4101a-front.png',
    desc: 'Compact radar module for presence detection, smart lighting, and home automation.',
  },
  {
    title: 'Blind-Spot Detection Module',
    model: 'WT4104B-C01',
    img: '/radar/wt4104b-front.png',
    desc: 'Radar safety module for low-speed vehicles, e-bikes, and BSD applications.',
  },
]

// Individual product details
const PRODUCTS = [
  {
    id: 'kd1902s',
    model: 'KD1902S',
    name: 'Omni-directional Vibration Sensor',
    badge: '360-degree Trigger',
    img: '/blog-pic/KD1902S.jpg',
    tag: 'Vibration',
    tagColor: 'bg-green-600',
    articleHref: '/blog/kd1902s',
    pdfHref: '/downloads/kd1902s-datasheet.pdf',
    intro: 'Industry-leading omnidirectional vibration sensing with a proven 2M+ cycle lifespan. The go-to choice for smart security devices, IoT wake-up triggers, and TPMS applications.',
    specs: [
      { key: 'Operating Voltage', val: '3.3V-5V' },
      { key: 'Trigger Direction', val: '360-degree Omni' },
      { key: 'Response Time', val: '< 5ms' },
      { key: 'Life Cycles', val: '> 2,000,000' },
      { key: 'Package', val: 'SMD 3.5 x 2.5mm' },
      { key: 'Operating Temp', val: '-40C to +85C' },
      { key: 'Compliance', val: 'RoHS' },
      { key: 'Sensitivity', val: 'Adjustable' },
    ],
    features: ['360-degree Omnidirectional', 'High-Temperature Polymer Housing', 'SMD Package', 'RoHS', '2M+ Life Cycles', 'Custom Sensitivity'],
    applications: ['GPS Asset Trackers', 'TPMS Systems', 'Smart Security', 'IoT Wake-up', 'Wearables'],
  },
  {
    id: 'kd1908s',
    model: 'KD1908S',
    name: 'Tilt & Angle Sensor',
    badge: 'Micro-amp',
    img: '/blog-pic/HS1908.jpg',
    tag: 'Tilt & Angle',
    tagColor: 'bg-blue-600',
    articleHref: '/blog/kd1908s',
    intro: 'Ultra-low power tilt detection with micro-ampere standby current and precise angular response. Ideal for always-on consumer devices and safety shutoff applications.',
    specs: [
      { key: 'Operating Voltage', val: '2.7V-5.5V' },
      { key: 'Trigger Angle', val: '10-45 degrees (adjustable)' },
      { key: 'Standby Current', val: '< 1uA' },
      { key: 'Life Cycles', val: '> 100,000' },
      { key: 'Package', val: 'SMD 3.5 x 2.5mm' },
      { key: 'Operating Temp', val: '-20C to +70C' },
      { key: 'Compliance', val: 'RoHS' },
      { key: 'Output', val: 'Digital NO/NC' },
    ],
    features: ['Micro-amp Power', 'Adjustable Angle', 'SMD Package', 'RoHS', 'Digital Output', 'High Accuracy'],
    applications: ['Smart Pens', 'Power Tool Safety', 'TWS Earbuds', 'Remote Controls', 'Medical Devices'],
  },
  {
    id: 'kd1918s',
    model: 'KD1918S',
    name: 'Optical Tilt Sensor',
    badge: '360-degree Detection',
    img: '/blog-pic/KD1918S-5.jpg',
    tag: 'Optical Tilt',
    tagColor: 'bg-violet-600',
    articleHref: '/blog/kd1918s',
    pdfHref: '/downloads/kd1918s-30-datasheet.pdf',
    intro: 'Industry-leading optical tilt detection covering the full 360-degree sphere. Non-contact optical design ensures superior accuracy and eliminates mechanical wear, ideal for safety shutoffs and anti-tamper devices.',
    specs: [
      { key: 'Operating Voltage', val: '3.3V-5V' },
      { key: 'Detection Range', val: '360-degree Full Sphere' },
      { key: 'Response Time', val: '< 10ms' },
      { key: 'Life Cycles', val: 'Optical - No Wear' },
      { key: 'Package', val: 'SMD 5.0 x 3.8mm' },
      { key: 'Operating Temp', val: '-40C to +85C' },
      { key: 'Compliance', val: 'RoHS' },
      { key: 'Principle', val: 'Optical (Non-contact)' },
    ],
    features: ['Optical Design', '360-degree Coverage', 'SMD Package', 'RoHS', 'No Mechanical Wear', 'High Reliability'],
    applications: ['Safety Shutoff', 'Anti-tamper Devices', 'EV Locks', 'Smart Lighting', 'Industrial Safety'],
  },
  {
    id: 'kd1912',
    model: 'KD1912',
    name: 'Long-Life Vibration Sensor',
    badge: '5M Cycles',
    img: '/blog-pic/HS1912.jpg',
    tag: 'Long-Life',
    tagColor: 'bg-orange-600',
    articleHref: '/blog/kd1912',
    pdfHref: '/downloads/kd1912s-datasheet.pdf',
    intro: 'Engineered for applications demanding extreme durability. The KD1912 delivers 5M+ trigger cycles with stable sensitivity, making it the preferred choice for high-cycle industrial and automotive applications.',
    specs: [
      { key: 'Operating Voltage', val: '3.3V-5V' },
      { key: 'Trigger Direction', val: '360-degree Omni' },
      { key: 'Response Time', val: '< 5ms' },
      { key: 'Life Cycles', val: '> 5,000,000' },
      { key: 'Package', val: 'SMD 4.0 x 3.0mm' },
      { key: 'Operating Temp', val: '-40C to +105C' },
      { key: 'Compliance', val: 'RoHS' },
      { key: 'Body Material', val: 'High-Temp Polymer' },
    ],
    features: ['5M+ Life Cycles', 'High-Temp Body', 'SMD Package', 'RoHS', 'Extended Temp Range', 'Industrial Grade'],
    applications: ['Automotive TPMS', 'Industrial Automation', 'Heavy Machinery', 'High-cycle IoT', 'Conveyor Systems'],
  },
  {
    id: 'kd1901s',
    model: 'KD1901S',
    name: 'Ultra Low Power Sensor',
    badge: 'nA Standby',
    img: '/blog-pic/KD1901S.jpg',
    tag: 'Low Power',
    tagColor: 'bg-teal-600',
    articleHref: '/blog/kd1901s',
    pdfHref: '/downloads/kd1901s-datasheet.pdf',
    intro: 'Designed for battery-powered IoT devices where every microamp matters. The KD1901S delivers nanoamp-level standby current while maintaining responsive motion detection.',
    specs: [
      { key: 'Operating Voltage', val: '1.8V-3.6V' },
      { key: 'Trigger Direction', val: '360-degree Omni' },
      { key: 'Standby Current', val: '< 100nA' },
      { key: 'Life Cycles', val: '> 1,000,000' },
      { key: 'Package', val: 'SMD 2.0 x 1.6mm' },
      { key: 'Operating Temp', val: '-40C to +85C' },
      { key: 'Compliance', val: 'RoHS' },
      { key: 'Ideal For', val: 'Battery IoT devices' },
    ],
    features: ['Nano-amp Standby', 'Ultra-compact SMD', 'RoHS', 'Low Voltage', '1M+ Life Cycles', 'IoT Optimized'],
    applications: ['Asset Tracking Tags', 'Coin-battery Devices', 'Smart Labels', 'Disposable IoT', 'Wearable Sensors'],
  },
]

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// PAGE
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€

export default function ProductsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const activeProd = PRODUCTS[activeProduct] ?? PRODUCTS[0]!

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  // Handle anchor scroll on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const idx = PRODUCTS.findIndex(p => p.id === hash)
      if (idx >= 0) {
        setActiveProduct(idx)
        setTimeout(() => {
          document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [])

  const heroRef = useInView(0.1)
  const catsRef = useInView(0.1)
  const detailRef = useInView(0.1)

  const prod = PRODUCTS[activeProduct]

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .anim-fade-up { animation: fadeUp 0.6s ease both; }
        .anim-fade-in { animation: fadeIn 0.5s ease both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .hero-pattern {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* 鈹€鈹€ NAVBAR 鈹€鈹€ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="/" className="flex items-center shrink-0">
            <div className="bg-gray-900 rounded-xl px-3 py-1.5">
              <img src="/sitelogo22.png" alt="Kingdta" className="h-7 w-auto" />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7" data-nav="products">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Home</a>            {/* Products dropdown - active on this page */}
            <div className="relative group">
              <a href="/products" className="flex items-center gap-1 text-sm font-medium text-green-700 py-5">
                Products
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[560px] mt-1">
                  <div className="grid grid-cols-[220px_1fr]">
                    <div className="p-3 border-r border-gray-100 bg-gradient-to-b from-green-50 to-white">
                      <a href="/products" className="flex items-start gap-3 px-3 py-3 rounded-xl bg-white border border-green-100 shadow-sm transition-colors">
                        <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /></svg>
                        </div>
                        <div>
                          <p className="text-green-700 font-semibold text-sm">Product Categories</p>
                          <p className="text-gray-500 text-xs leading-relaxed mt-1">Browse our sensor modules and new radar product line.</p>
                        </div>
                      </a>
                      <button onClick={() => setModalOpen(true)} className="w-full mt-3 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                        Request Sample
                      </button>
                    </div>
                    <div className="px-3 py-3">
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-3 py-1.5">Module Pages</p>
                      <div className="space-y-1">
                        {PRODUCT_MENU.map(item => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="w-full flex items-start justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group/item"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-800 font-semibold text-sm group-hover/item:text-green-700 transition-colors">{item.label}</span>
                                
                              </div>
                              <p className="text-gray-400 text-xs mt-0.5">{item.meta}</p>
                              <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                            <svg className="w-4 h-4 text-gray-300 group-hover/item:text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/solutions" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Solutions</a>
            <a href="/blog" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Blog</a>
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">About</a>
            <a href="/contact" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:sales@kingdta.com" className="hidden md:block text-sm text-gray-500 hover:text-green-700 transition-colors">sales@kingdta.com</a>
            <button onClick={() => setModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Request Sample
            </button>
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
            <a href="/products" onClick={() => setMenuOpen(false)} className="block text-green-700 text-sm font-medium py-2">Products</a>
            <div className="pl-4 space-y-1 pb-1">
              {PRODUCT_MENU.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-gray-500 text-sm py-1.5"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-gray-400">{item.meta}</span>
                </a>
              ))}
            </div>
            <a href="/solutions" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Solutions</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Blog</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Contact</a>
            <button onClick={() => { setModalOpen(true); setMenuOpen(false) }} className="w-full mt-2 bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg">Request Sample</button>
          </div>
        )}
      </header>

      <main className="pt-16">

        {/* 鈹€鈹€ HERO 鈹€鈹€ */}
        <section className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent" />
          <div ref={heroRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex items-center gap-2 text-sm text-gray-400 mb-8 ${heroRef.inView ? 'anim-fade-in' : 'opacity-0'}`}>
              <a href="/" className="hover:text-green-600 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-600 font-medium">Products</span>
            </div>
            <div className="max-w-3xl">
              <div className={`inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide ${heroRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                Sensor Modules
              </div>
              <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5 ${heroRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
                Sensor Modules<br />
                <span className="text-green-600">Precision Sensing Components</span>
              </h1>
              <p className={`text-gray-500 text-lg leading-relaxed max-w-2xl ${heroRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
                This page focuses on our core sensor lineup, from ultra-low-power vibration wake-up sensors to 360-degree optical tilt detection for smart hardware and industrial devices.
              </p>
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ CATEGORY CARDS (B2 images) 鈹€鈹€ */}
        <section className="pb-24 bg-white">
          <div ref={catsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CATEGORIES.map((cat, i) => (
                <a
                  key={cat.title}
                  href={cat.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const idx = PRODUCTS.findIndex(p => '#' + p.id === cat.href)
                    if (idx >= 0) {
                      setActiveProduct(idx)
                      document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer card-hover block ${catsRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}
                >
                  {/* Full image: bottom whitespace is built in */}
                  <img src={cat.img} alt={cat.title} className="w-full h-auto" />

                  {/* Text overlay in the built-in bottom whitespace of the image */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-7 pt-4">
                    {/* Tag pill */}
                    <span className={`inline-block ${cat.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3`}>{cat.tag}</span>
                    {/* Title: splits on \n */}
                    <h3 className="text-white font-bold text-xl leading-snug mb-2 whitespace-pre-line">{cat.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-1 line-clamp-2">{cat.desc}</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-1">
                      <span className="font-semibold text-gray-300">Applications:</span> {cat.applications}
                    </p>
                    {/* Model tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cat.models.map(m => (
                        <span key={m} className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/20">{m}</span>
                      ))}
                    </div>
                    {/* CTA button */}
                    <div className="flex items-center gap-2 text-white font-semibold text-sm bg-white/10 hover:bg-white/20 transition-colors px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/20 w-fit">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0">
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-3">Radar Modules</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Looking for Radar Products?</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Radar modules are now separated into their own dedicated page, so sensor modules and radar products can be presented more clearly. You can browse the radar line independently, including presence detection and blind-spot detection modules.
                  </p>
                  <a href="/radar-modules" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20">
                    View Radar Modules
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {RADAR_PREVIEW.map(item => (
                    <a key={item.model} href="/radar-modules" className="p-6 lg:p-8 border-b last:border-b-0 md:last:border-b md:border-b-0 md:first:border-r border-gray-100 hover:bg-white transition-colors">
                      <div className="aspect-[4/3] bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-5 mb-5">
                        <img src={item.img} alt={item.model} className="max-h-full w-auto object-contain" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{item.model}</p>
                      <h3 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ PRODUCT DETAIL TAB VIEW 鈹€鈹€ */}
        <section id="detail" className="py-20 bg-gray-50">
          <div ref={detailRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-10 ${detailRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Product Specifications</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Detailed Specs by Model</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Select a product model below to view full technical specifications, key features, and typical application scenarios.</p>
            </div>

            {/* Tab selector */}
            <div className={`flex flex-wrap gap-2 justify-center mb-10 ${detailRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
              {PRODUCTS.map((p, i) => (
                <button key={p.model} onClick={() => setActiveProduct(i)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${activeProduct === i ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/20' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700'}`}>
                  {p.model}
                  <span className={`ml-2 text-xs ${activeProduct === i ? 'text-green-200' : 'text-gray-400'}`}>{p.tag}</span>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            {(() => { const prod = PRODUCTS[activeProduct]; if (!prod) return null; return (
            <div className={`bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm ${detailRef.inView ? 'anim-fade-in delay-200' : 'opacity-0'}`} key={activeProduct}>
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left: image (2/5 width, compact) */}
                <div className="lg:col-span-2 bg-black flex items-center justify-center relative overflow-hidden min-h-[260px]">
                  <img src={prod.img} alt={prod.model} className="w-full h-full object-contain" />
                  <span className={`absolute top-3 right-3 ${prod.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{prod.badge}</span>
                </div>

                {/* Right: info (3/5 width) */}
                <div className="lg:col-span-3 p-7 lg:p-9">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className={`inline-block ${prod.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3`}>{prod.model}</span>
                      <h3 className="text-gray-900 font-bold text-2xl leading-tight">{prod.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{prod.intro}</p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {prod.features.map(f => (
                      <span key={f} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Typical Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {prod.applications.map(a => (
                        <span key={a} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg">{a}</span>
                      ))}
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-lg shadow-green-600/20 text-sm">
                      Request Sample
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                    </button>
                    <a href={prod.articleHref} className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm bg-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                      Read Article
                    </a>
                    {prod.pdfHref ? (
                      <a href={prod.pdfHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm bg-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4.5 18.75h15" /></svg>
                        Download PDF
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Specs table */}
              <div className="border-t border-gray-100">
                <div className="px-8 lg:px-10 py-6">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Technical Specifications</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
                    {prod.specs.map((s, i) => (
                      <div key={s.key} className={`p-4 ${i % 2 === 0 ? 'bg-gray-50/80' : 'bg-white'} border-b border-gray-100 last:border-b-0`}>
                        <p className="text-gray-400 text-xs mb-1">{s.key}</p>
                        <p className="text-gray-900 font-semibold text-sm">{s.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            )})()}

            {/* Navigation between products */}
            <div className={`flex items-center justify-between mt-6 ${detailRef.inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}>
              <button
                onClick={() => setActiveProduct(i => Math.max(0, i - 1))}
                disabled={activeProduct === 0}
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg>
                {activeProduct > 0 ? PRODUCTS[activeProduct - 1]?.model ?? 'Previous' : 'Previous'}
              </button>
              <span className="text-gray-300 text-sm">{activeProduct + 1} / {PRODUCTS.length}</span>
              <button
                onClick={() => setActiveProduct(i => Math.min(PRODUCTS.length - 1, i + 1))}
                disabled={activeProduct === PRODUCTS.length - 1}
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {activeProduct < PRODUCTS.length - 1 ? PRODUCTS[activeProduct + 1]?.model ?? 'Next' : 'Next'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </button>
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ CTA 鈹€鈹€ */}
        <section className="py-24 relative overflow-hidden">
          <img src="/D.1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Need a Custom Sensor? <span className="text-green-400">We Design It.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Can't find the exact specification you need? Our engineering team specializes in custom sensor designs: tailored sensitivity, form factor, and packaging for your application.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green-600/30 text-lg">
                Request a Sample
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </button>
              <a href="/solutions" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                Explore Solutions
              </a>
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ FOOTER 鈹€鈹€ */}
        <footer className="bg-gray-950 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="mb-4">
                  <img src="/sitelogo22.png" alt="Kingdta" className="h-8 w-auto" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Shenzhen Kingdta Technology Co., Ltd. - Your Sensor-to-Board Solution Provider.</p>
                <div className="flex gap-3">
                  {['ISO 9001', 'RoHS', 'IPC-A-610'].map(c => (
                    <span key={c} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Products</p>
                <ul className="space-y-2">
                  {PRODUCTS.map(p => (
                    <li key={p.model}>
                      <button onClick={() => { setActiveProduct(PRODUCTS.indexOf(p)); document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth' }) }}
                        className="text-gray-400 hover:text-green-400 text-sm transition-colors text-left">
                        {p.model} - {p.name}
                      </button>
                    </li>
                  ))}
                  <li>
                    <a href="/radar-modules" className="text-gray-400 hover:text-green-400 text-sm transition-colors text-left">
                      Radar Modules - Detection & Safety Solutions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Navigation</p>
                <ul className="space-y-2">
                  {[['Home', '/'], ['Solutions', '/solutions'], ['Products', '/products'], ['About', '/about'], ['Contact', '/contact']].map(([l, h]) => (
                    <li key={l}><a href={h} className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Contact</p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    sales@kingdta.com
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
                    +86 18617165334
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    Shenzhen, Guangdong, China
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Shenzhen Kingdta Technology Co., Ltd. All rights reserved.</p>
              <p className="text-gray-600 text-sm">Serving Asia, Europe & the Americas</p>
            </div>
          </div>
        </footer>
      </main>

      {/* 鈹€鈹€ MODAL 鈹€鈹€ */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden anim-fade-up">
            <div className="h-1.5 bg-gradient-to-r from-green-400 via-green-600 to-emerald-500" />
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-1">Request a Sample - {activeProd.model}</h3>
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
                <input type="text" name="_honey" style={{display:'none'}} />
                <input type="hidden" name="_subject" value={`Sample Request: ${activeProd.model} from Kingdta Website`} />
                <input type="hidden" name="product" value={activeProd.model} />
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
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Quantity</label>
                    <input name="quantity" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="e.g. 10 pcs" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Application Description</label>
                  <textarea name="message" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" placeholder="Briefly describe your application..."></textarea>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Attachment</label>
                  <input name="attachment" type="file" accept="*/*" className="w-full text-sm text-gray-500 border border-gray-200 rounded-xl px-4 py-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20">
                  Send Sample Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

