'use client'

import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function useInView(threshold = 0.15) {
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

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.3)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const PRODUCT_MENU = [
  {
    label: 'Sensor Modules',
    meta: 'Vibration / Tilt / Optical',
    desc: 'Core passive sensing products for smart hardware and industrial devices.',
    href: '/sensor-modules',
  },
  {
    label: 'Radar Modules',
    meta: 'Microwave / BSD / custom',
    desc: 'Radar products for presence detection, motion sensing, and blind-spot applications.',
    href: '/radar-modules',  },
]

const STATS = [
  { value: 999, suffix: '+', label: 'Clients Worldwide', desc: 'Serving customers across 30+ countries' },
  { value: 15, suffix: '+', label: 'Years of Experience', desc: 'Deep domain expertise in sensor engineering' },
  { value: 5000000, suffix: '+', label: 'Units Shipped', desc: 'Precision sensors delivered worldwide' },
  { value: 99, suffix: '.2%', label: 'Quality Pass Rate', desc: 'Backed by ISO 9001 certified processes' },
]

const CAPABILITIES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Customized Sensor Solutions',
    desc: 'Expertise in passive, ultra-low-power vibration and tilt sensors. We provide tailored sensing solutions for wake-up, detection, and safety applications, from sensor selection through to validated prototypes.',
    points: ['Application-specific sensor selection', 'Reference circuit design', 'MCU integration simulation', 'Functional prototyping & validation'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    title: 'End-to-End PCBA Manufacturing',
    desc: 'Full-service PCBA including rapid prototyping, SMT/DIP assembly, and comprehensive functional testing. We turn your designs into reliable, production-ready hardware at scale.',
    points: ['DFM/DFA analysis & co-design', 'SMT & THT assembly', 'SPI, AOI & X-Ray inspection', 'Functional testing (FCT)'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: 'Co-design & System Integration',
    desc: 'Our core advantage lies in co-designing the sensor and PCBA as one unified system, optimizing for performance, cost, and manufacturability from the very first design review.',
    points: ['Sensor-PCBA co-optimization', 'Signal integrity by design', 'BOM cost engineering', 'Single-source accountability'],
  },
]

const REASONS = [
  {
    title: 'Integrated Service',
    desc: 'One-stop solution from sensor to board, simplifying your supply chain and accelerating time-to-market. No need to juggle multiple vendors.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: 'Technical Expertise',
    desc: 'Deep understanding of sensor applications and signal integrity in PCBA design. Our engineers bring years of hands-on experience to every project.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Proven Reliability',
    desc: 'Robust manufacturing processes and strict quality control (ISO 9001, IPC Standards) ensure product consistency across every production run.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Flexibility & Cost-Effectiveness',
    desc: 'Capable of handling both rapid prototypes (72h builds) and mass production volumes, with DFM-driven BOM optimization to reduce your total project cost.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
]

const CERTS = ['ISO 9001', 'RoHS', 'IPC-A-610', 'CE', 'MES Tracking']

const TIMELINE = [
  { year: 'Founded', title: 'Company Established', desc: 'Shenzhen Kingdta Technology Co., Ltd. was founded to help hardware teams build smarter, more reliable products.' },
  { year: 'Growth', title: 'Sensor Portfolio Expanded', desc: 'Expanded our core product lines to include omni-directional vibration sensors and precision tilt/angle sensors for industrial and consumer applications.' },
  { year: 'Scale', title: 'PCBA Manufacturing Launched', desc: 'Established full in-house PCBA manufacturing capabilities, enabling true one-stop service from sensor design to board assembly.' },
  { year: 'Today', title: 'Global Reach', desc: 'Serving 999+ clients across 30+ countries with ISO 9001 certified processes, MES-tracked production, and dedicated engineering support.' },
]

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  const heroRef = useInView(0.1)
  const capRef = useInView(0.1)
  const whyRef = useInView(0.1)
  const timelineRef = useInView(0.1)
  const addressRef = useInView(0.1)

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
        .delay-500 { animation-delay: 0.5s; }
        .hero-pattern {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(22, 163, 74, 0.12);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[68px]">
          <a href="/" className="flex items-center shrink-0">
            <img src="/header-logo.png" alt="Kingdta" className="h-7 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Home</a>            <div className="relative group">
              <a href="/products" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors py-5">
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
                          <p className="text-gray-900 font-semibold text-sm">Product Categories</p>
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
                          <a key={item.label} href={item.href} className="w-full flex items-start justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group/item">
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
            <a href="/about" className="text-sm font-medium text-green-700">About</a>
            <a href="/contact" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:sales@kingdta.com" className="hidden md:block text-sm text-gray-500 hover:text-green-700 transition-colors">sales@kingdta.com</a>
            <button onClick={() => setModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Get a Quote
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
            <a href="/products" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Products</a>
            <div className="pl-4 space-y-1 pb-1">
              {PRODUCT_MENU.map(item => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between text-gray-500 text-sm py-1.5">
                  <span>{item.label}</span><span className="text-xs text-gray-400">{item.meta}</span>
                </a>
              ))}
            </div>
            <a href="/solutions" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Solutions</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Blog</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-green-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Contact</a>
            <button onClick={() => { setModalOpen(true); setMenuOpen(false) }} className="w-full mt-2 bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg">Get a Quote</button>
          </div>
        )}
      </header>

      <main className="pt-[68px]">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent" />
          <div ref={heroRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className={`flex items-center gap-2 text-sm text-gray-400 mb-8 ${heroRef.inView ? 'anim-fade-in' : 'opacity-0'}`}>
              <a href="/" className="hover:text-green-600 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-600 font-medium">About Us</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className={heroRef.inView ? 'anim-fade-up' : 'opacity-0'}>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
                  Shenzhen, China / Est. Since 2010s
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Who We Are <br />
                  <span className="text-green-600">Kingdta Electronics</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Shenzhen Kingdta Technology Co., Ltd. is a technology enterprise focused on sensor application solutions and PCBA manufacturing services.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  We are dedicated to bridging the gap between innovative ideas and mass production by integrating high-performance sensor resources with extensive circuit design and assembly expertise. Our mission is to provide customers across industries with high-reliability, customizable, and cost-effective total solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {CERTS.map(c => (
                    <span key={c} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              {/* Right: brand photos */}
              <div className={`space-y-4 ${heroRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
                {/* Branded photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img src="/D.1.jpg" alt="Kingdta Brand" className="w-full h-52 object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-sm">Kingdta Electronics</p>
                    <p className="text-green-300 text-xs">Premium Sensor / PCBA Partner</p>
                  </div>
                </div>
                {/* Factory photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img src="/2.1-1.jpg" alt="SMT Production Floor" className="w-full h-44 object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <p className="text-white text-xs font-semibold">SMT Production Floor</p>
                    <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">ISO 9001</span>
                  </div>
                </div>
                {/* Vision/mission strip */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-600 rounded-xl p-4 text-white">
                    <p className="font-bold text-sm mb-1">Our Vision</p>
                    <p className="text-green-100 text-xs leading-relaxed">To become a leading, trusted, and enduring global technology company in sensing and electronics manufacturing.</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 text-white">
                    <p className="font-bold text-sm mb-1">Our Mission</p>
                    <p className="text-gray-300 text-xs leading-relaxed">Safeguard partner success. With precision sensing and smart manufacturing, empower intelligent connectivity for everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-green-700 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-white font-semibold text-sm">{s.label}</p>
                <p className="text-green-200 text-xs mt-1 hidden lg:block">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CORE CAPABILITIES ── */}
        <section className="py-24 bg-gray-50">
          <div ref={capRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${capRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">What We Do</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Capabilities</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Driving quality with technology, creating value with solutions across sensor design, PCBA manufacturing, and system integration.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {CAPABILITIES.map((cap, i) => (
                <div key={cap.title} className={`bg-white rounded-2xl p-7 border border-gray-100 card-hover ${capRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  <div className="w-12 h-12 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center text-green-600 mb-5">
                    {cap.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-3">{cap.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.points.map(pt => (
                      <li key={pt} className="flex items-center gap-2 text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PARTNER ── */}
        <section className="py-24 bg-white">
          <div ref={whyRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${whyRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              {/* Left text */}
              <div>
                <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Why Kingdta</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">Why Partner with Us?</h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  We've helped hundreds of engineering teams cut development time, reduce costs, and bring more reliable products to market. Here's what sets us apart from standard PCBA factories and component distributors.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  Our integrated model, combining sensor expertise with full PCBA manufacturing, means you work with one partner from concept to mass production, with a single point of technical accountability throughout.
                </p>
                <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </button>
              </div>
              {/* Right grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {REASONS.map((r, i) => (
                  <div key={r.title} className={`p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors ${whyRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
                      {r.icon}
                    </div>
                    <h4 className="text-gray-900 font-semibold mb-2 text-sm">{r.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FACTORY VISUAL BANNER ── */}
        <section className="relative h-64 overflow-hidden">
          <img src="/5.1.jpg" alt="Reflow Oven Manufacturing" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-20">
            <div>
              <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-2">Manufacturing Excellence</p>
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-2">Modern SMT Production Facility</h3>
              <p className="text-gray-300 text-sm max-w-lg">IPC-A-610 compliant assembly lines with full SPI, AOI and X-Ray inspection at every stage of production.</p>
            </div>
          </div>
        </section>

        {/* ── COMPANY JOURNEY ── */}
        <section className="py-24 bg-gray-50">
          <div ref={timelineRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${timelineRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey & Vision</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Behind every solution is a dedicated team of engineers and a modern manufacturing facility equipped to bring ideas to life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className={`relative ${timelineRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full card-hover">
                    <div className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {item.year}
                    </div>
                    <h4 className="text-gray-900 font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="hidden lg:flex absolute top-7 -right-3 z-10 items-center justify-center w-6">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-gray-400 text-xs font-semibold uppercase tracking-widest mb-8">Quality Certifications & Standards</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'ISO 9001', desc: 'Quality Management System' },
                { name: 'RoHS', desc: 'Hazardous Substances Compliance' },
                { name: 'IPC-A-610', desc: 'Acceptability of Electronic Assemblies' },
                { name: 'CE Marking', desc: 'European Conformity' },
                { name: 'MES Tracking', desc: 'Full Traceability System' },
                { name: 'REACH', desc: 'Chemical Safety Standard' },
              ].map(cert => (
                <div key={cert.name} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{cert.name}</p>
                    <p className="text-gray-400 text-xs">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNERS ── */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">Partners &amp; Clients</p>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <div key={n} className="w-24 h-16 lg:w-28 lg:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img src={`/partner/${n}.jpg`} alt={`Partner ${n}`} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
              <div className="w-24 h-16 lg:w-28 lg:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img src="/partner/logo.jpg" alt="Partner" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ── ADDRESS ── */}
        <section className="py-24 bg-gray-50">
          <div ref={addressRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${addressRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Find Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Two facilities in Shenzhen's Bao'an District: a technology office and a dedicated manufacturing factory.</p>
            </div>
            {/* Brand image strip */}
            <div className={`mb-8 rounded-2xl overflow-hidden shadow-md ${addressRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <img src="/d.2.jpg" alt="Kingdta Brand" className="w-full h-32 object-cover object-center" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Office */}
              <div className={`bg-white rounded-2xl p-8 border border-gray-100 card-hover ${addressRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">Office</span>
                    <h3 className="text-gray-900 font-bold">Technology Office</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Room 408-10, 4/F, Building 10, COFCO Fu'an Robotics Industrial Park, Rentian Community, Fuyong Subdistrict, Bao'an District, Shenzhen, Guangdong, China</p>
                <div className="space-y-3 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
                    <span>+86 18617165334 (Sales)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
                    <span>+86 18926528143 (Engineer)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    <a href="mailto:sales@kingdta.com" className="text-green-600 hover:underline">sales@kingdta.com</a>
                  </div>
                </div>
              </div>
              {/* Factory */}
              <div className={`bg-white rounded-2xl p-8 border border-gray-100 card-hover ${addressRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">Factory</span>
                    <h3 className="text-gray-900 font-bold">Manufacturing Facility</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Room 111, Xinbaoyi Industry & Trade Building, No. 29, Third Industrial Zone, Houting Community, Shajing Subdistrict, Bao'an District, Shenzhen, Guangdong, China</p>
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-gray-100">
                  {[['SMT Lines', '8+'], ['Placement Acc.', '±0.03mm'], ['Max Layers', '20L'], ['Certifications', 'ISO 9001']].map(([k, v]) => (
                    <div key={k} className="bg-green-50 rounded-xl p-3">
                      <p className="text-gray-400 text-xs mb-0.5">{k}</p>
                      <p className="text-green-700 font-bold text-sm">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 hero-pattern" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-20" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to <span className="text-green-400">Innovate Together?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Discover how our integrated approach can power your next project. Contact us to discuss your sensor requirements, PCBA needs, or custom solution design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green-600/30 text-lg">
                Get a Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </button>
              <a href="mailto:sales@kingdta.com" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                sales@kingdta.com
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-gray-950 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="lg:col-span-1">
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
                <p className="text-white font-semibold text-sm mb-4">Services</p>
                <ul className="space-y-2">
                  {['Sensor Solutions', 'PCBA Manufacturing', 'Industrial Solutions', 'Automation & Robotics', 'Co-design Services'].map(l => (
                    <li key={l}><a href="/#solutions" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Products</p>
                <ul className="space-y-2">
                  {['KD1902S Vibration Sensor', 'KD1908S Angle Sensor', 'KD1918S Optical Tilt', 'KD1912 (5M Cycles)', 'Custom Solutions'].map(l => (
                    <li key={l}><a href="/#products" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Contact Us</p>
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
                    Bao'an District, Shenzhen, China
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

      {/* ── CONTACT MODAL ── */}
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
                <input type="text" name="_honey" style={{display:'none'}} />
                
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
                  <textarea name="message" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" placeholder="Describe your project, sensor requirements, production volume..."></textarea>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Attachment</label>
                  <input name="attachment" type="file" accept="*/*" className="w-full text-sm text-gray-500 border border-gray-200 rounded-xl px-4 py-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

