'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const PRODUCT_NAV = [
  { model: 'KD1902S', type: 'Vibration', id: 'kd1902s' },
  { model: 'KD1908S', type: 'Tilt Angle', id: 'kd1908s' },
  { model: 'KD1918S', type: 'Optical Tilt', id: 'kd1918s' },
  { model: 'KD1912',  type: 'Long Life', id: 'kd1912' },
  { model: 'KD1901S', type: 'Low Power', id: 'kd1901s' },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirement Analysis',
    desc: 'We deeply understand your application scenario, performance targets, environmental constraints, and cost requirements before recommending any sensor.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Sensor Selection & Solution Design',
    desc: 'We recommend the optimal sensor from our core product lines and create a system-level functional block diagram showing sensor-MCU integration.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Schematic & PCB Co-design',
    desc: 'Our electrical and layout engineers work together to design the circuit and board for optimal signal integrity, manufacturability, and cost.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Prototyping & Testing',
    desc: 'Build functional prototypes and conduct rigorous validation tests —?including functional, environmental, and signal performance verification.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Optimization & Mass Production',
    desc: 'Refine the design for mass production with DFM optimization, then transition to our IPC-certified PCBA manufacturing line for volume delivery.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
]

const INDUSTRIES = [
  {
    title: 'Smart Security & IoT',
    subtitle: 'Wake-up · Detection · Alert',
    img: '/1.1.7.1-1.jpg',
    imgPosition: 'object-right',
    color: 'from-green-600 to-emerald-500',
    desc: 'Our ultra-low-power vibration and tilt sensors are the ideal "sense & wake-up" trigger for battery-powered security devices —?minimizing power draw while ensuring instant response to motion events.',
    applications: [
      { name: 'GPS Trackers', detail: 'Vibration-triggered wake-up for real-time location reporting' },
      { name: 'Smart Locks', detail: 'Tilt detection for tamper alerts and door-open sensing' },
      { name: 'Asset Management Tags', detail: 'Motion detection for theft prevention and shipment tracking' },
      { name: 'Anti-theft Alarms', detail: 'Precision vibration sensitivity to eliminate false alarms' },
    ],
    products: ['KD1902S', 'KD1908S', 'KD1912'],
    caseStudy: 'A smart lock manufacturer reduced false alarm rates by 90% after integrating our KD1902S with custom sensitivity tuning for door-impact vs. actual break-in scenarios.',
  },
  {
    title: 'Consumer Electronics',
    subtitle: 'Gesture · Interaction · Power',
    img: '/1.1.8.1-1.jpg',
    imgPosition: 'object-right',
    color: 'from-blue-600 to-cyan-500',
    desc: 'Compact SMD form factor, ultra-low power consumption, and precise directional response make our sensors the perfect fit for always-on consumer devices that demand long battery life without sacrificing responsiveness.',
    applications: [
      { name: 'Smart Pens', detail: 'Auto wake-up/sleep based on contact detection and inactivity' },
      { name: 'TWS Earbuds', detail: 'Wear detection and in/out-ear gesture sensing' },
      { name: 'Remote Controls', detail: 'Motion-activated backlight and smart sleep modes' },
      { name: 'Smart Toys', detail: 'Interactive tilt and shake gesture recognition' },
    ],
    products: ['KD1901S', 'KD1908S'],
    caseStudy: 'An IoT device company extended their asset tracker standby time by 40% using our KD1901S nano-ampere motion wake-up sensor —?without changing the battery or enclosure design.',
  },
  {
    title: 'Automotive Peripherals',
    subtitle: 'TPMS · Safety · Reliability',
    img: '/1.1.6.1-1.jpg',
    imgPosition: 'object-right',
    color: 'from-orange-500 to-amber-400',
    desc: 'Automotive environments demand sensors that operate reliably across extreme temperature ranges, withstand vibration stress, and maintain signal integrity throughout a vehicle\'s lifetime. Our sensors are designed for exactly that.',
    applications: [
      { name: 'TPMS Systems', detail: 'Vibration-triggered auto wake-up when vehicle starts moving' },
      { name: 'Motorcycle Key Fobs', detail: 'Tilt and motion sensing for smart security and anti-theft' },
      { name: 'Electric Vehicle Locks', detail: 'Approach detection for automatic lock/unlock triggers' },
      { name: 'Vehicle Security', detail: 'Multi-axis vibration detection for intrusion monitoring' },
    ],
    products: ['KD1902S', 'KD1912'],
    caseStudy: 'Our KD1902S is deployed in TPMS modules across multiple OEM vehicle lines —?providing reliable wake-up triggering from 0°C to 85°C without signal drift.',
  },
  {
    title: 'Automation & Robotics',
    subtitle: 'Position · Control · Safety',
    img: '/B.4.1.jpg',
    imgPosition: 'object-center',
    color: 'from-violet-600 to-purple-500',
    desc: 'Industrial environments require sensors that combine mechanical durability with precise, repeatable output. Our ruggedized SMD sensors provide the position feedback and safety shutoff signals that automation systems depend on.',
    applications: [
      { name: 'Robotic Arms', detail: 'Joint position sensing and end-of-travel detection' },
      { name: 'Power Tools', detail: 'Safety shutoff when tool is tilted or left unattended' },
      { name: 'Conveyor Monitoring', detail: 'Vibration anomaly detection for predictive maintenance' },
      { name: 'AGV Systems', detail: 'Inclination sensing for terrain-adaptive navigation' },
    ],
    products: ['KD1908S', 'KD1918S', 'KD1902S'],
    caseStudy: 'An industrial power tool OEM integrated our tilt sensor for automatic shutoff —?reducing product liability incidents by implementing directional cutoff under 15° tilt angle.',
  },
]

const TESTIMONIALS = [
  {
    quote: "Jindetai's vibration sensor solution was a game-changer for our smart security devices. Their precise sensitivity adjustment completely solved our false alarm issue.",
    name: 'G.H.',
    role: 'Senior Product Manager',
    img: '/A.6.1.jpg',
  },
  {
    quote: "Their ultra-low-power wake-up sensors extended our asset tracker's standby time by 40%. The hardware solution is exactly what we needed for long-term reliability.",
    name: 'L.D.',
    role: 'Lead Hardware Engineer',
    img: '/A.6.2.jpg',
  },
  {
    quote: "They didn't just sell us a component —?they delivered a full integration strategy. The engineering team responded instantly and helped optimize our circuit design.",
    name: 'J.M.',
    role: 'R&D Director',
    img: '/A.6.3.jpg',
  },
]

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function SolutionsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeIndustry, setActiveIndustry] = useState(0)

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
  const processRef = useInView(0.1)
  const industriesRef = useInView(0.1)
  const testimonialsRef = useInView(0.1)

  const ind = INDUSTRIES[activeIndustry]

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
        .tab-active {
          border-bottom: 3px solid #16a34a;
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="/" className="flex items-center shrink-0">
            <div className="bg-gray-900 rounded-xl px-3 py-1.5">
              <img src="/sitelogo22.png" alt="Kingdta" className="h-7 w-auto" />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Home</a>            <div className="relative group">
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
                    <button onClick={() => setModalOpen(true)} className="w-full flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                      Request Sample
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a href="/solutions" className="text-sm font-medium text-green-700">Solutions</a>
            <a href="/blog" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Blog</a>
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">About</a>
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
              {PRODUCT_NAV.map(p => (
                <a key={p.model} href={`/products#${p.id}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between text-gray-500 text-sm py-1.5">
                  <span>{p.model}</span><span className="text-xs text-gray-400">{p.type}</span>
                </a>
              ))}
            </div>
            <a href="/solutions" onClick={() => setMenuOpen(false)} className="block text-green-700 text-sm font-medium py-2">Solutions</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Blog</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Contact</a>
            <button onClick={() => { setModalOpen(true); setMenuOpen(false) }} className="w-full mt-2 bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg">Get a Quote</button>
          </div>
        )}
      </header>

      <main className="pt-16">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent" />
          <div ref={heroRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex items-center gap-2 text-sm text-gray-400 mb-8 ${heroRef.inView ? 'anim-fade-in' : 'opacity-0'}`}>
              <a href="/" className="hover:text-green-600 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-600 font-medium">Solutions</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={heroRef.inView ? 'anim-fade-up' : 'opacity-0'}>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                  Application Engineering · Industry Solutions
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Sensor Solutions<br />
                  <span className="text-green-600">Built for Your Application</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  We integrate high-performance passive sensors with deep application knowledge to solve your core challenges in wake-up detection, motion control, and safety shutoff —?across every major industry vertical.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-green-600/20">
                    Discuss Your Application
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                  </button>
                  <a href="/#products" className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold px-6 py-3 rounded-lg transition-colors bg-white">
                    View Products
                  </a>
                </div>
              </div>
              {/* Right —?2x2 industry card grid */}
              <div className={`grid grid-cols-2 gap-4 ${heroRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
                {INDUSTRIES.map((ind, i) => (
                  <button key={ind.title} onClick={() => { setActiveIndustry(i); document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="bg-white rounded-2xl border border-gray-100 p-5 text-left card-hover group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-3`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </div>
                    <h3 className="text-gray-900 font-bold text-sm mb-1 group-hover:text-green-700 transition-colors">{ind.title}</h3>
                    <p className="text-gray-400 text-xs">{ind.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTION PROCESS ── */}
        <section className="py-24 bg-gray-50">
          <div ref={processRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${processRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Our Approach</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Solution Design Process</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Every solution starts with understanding your application. We follow a structured 5-step engineering process that takes you from requirements to mass-produced hardware.</p>
            </div>
            <div className="space-y-4">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.step} className={`bg-white rounded-2xl border border-gray-100 overflow-hidden ${processRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  <div className="flex items-start gap-6 p-6">
                    <div className="shrink-0 flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0">{step.step}</div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      <div>
                        <h3 className="text-gray-900 font-bold text-base mb-1">{step.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                      <div className="flex justify-end">
                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-green-100 via-green-200 to-green-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SENSOR VISUAL BANNER ── */}
        <section className="relative h-72 overflow-hidden">
          <img src="/1.1.1.jpg" alt="Sensor Technology" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
              <div className="max-w-xl">
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">Have a Custom Challenge?</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                  Your Application Is Unique.<br />So Is Our Solution.
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-lg">
                  Don't see your exact use case listed? Contact our solutions engineers. We specialize in non-standard sensor configurations, custom sensitivity adjustments, and unique form factor requirements.
                </p>
                <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                  Talk to an Engineer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES DEEP DIVE ── */}
        <section id="industries" className="py-24 bg-white">
          <div ref={industriesRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-12 ${industriesRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Industries Served</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Select your industry to explore application-specific sensor solutions, use cases, and real-world results.</p>
            </div>

            {/* Industry tab selector */}
            <div className={`flex flex-wrap gap-2 justify-center mb-10 ${industriesRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
              {INDUSTRIES.map((industry, i) => (
                <button key={industry.title} onClick={() => setActiveIndustry(i)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${activeIndustry === i ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/20' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700'}`}>
                  {industry.title}
                </button>
              ))}
            </div>

            {/* Active industry display */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${industriesRef.inView ? 'anim-fade-in delay-200' : 'opacity-0'}`} key={activeIndustry}>
              {/* Left —?industry image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img src={ind.img} alt={ind.title} className={`w-full h-96 object-cover ${ind.imgPosition}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${ind.color} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3`}>
                    {ind.subtitle}
                  </div>
                  <h3 className="text-white font-bold text-2xl">{ind.title}</h3>
                </div>
              </div>

              {/* Right —?details */}
              <div>
                <p className="text-gray-500 text-base leading-relaxed mb-6">{ind.desc}</p>

                {/* Recommended products */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mr-1 self-center">Sensors Used:</span>
                  {ind.products.map(p => (
                    <a key={p} href="/#products" className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-100 hover:bg-green-600 hover:text-white transition-colors">{p}</a>
                  ))}
                </div>

                {/* Applications list */}
                <div className="space-y-3 mb-8">
                  {ind.applications.map(app => (
                    <div key={app.name} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors">
                      <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">{app.name}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{app.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Case study */}
                <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" /></svg>
                    <span className="text-green-700 text-xs font-bold uppercase tracking-wider">Client Result</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">"{ind.caseStudy}"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-gray-50">
          <div ref={testimonialsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${testimonialsRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Client Feedback</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Engineers Say</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">From smart security to industrial automation —?here's how our sensor solutions have made a real difference.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`bg-white border border-gray-100 rounded-2xl p-7 card-hover ${testimonialsRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-green-500 fill-green-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" /></svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-green-100" />
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 relative overflow-hidden">
          <img src="/D.1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Your Application. <span className="text-green-400">Our Expertise.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Contact our solutions engineers to discuss your specific sensor requirements —?from standard products to fully custom designs. Get a tailored recommendation within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green-600/30 text-lg">
                Discuss My Application
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
              <div>
                <div className="mb-4">
                  <img src="/sitelogo22.png" alt="Kingdta" className="h-8 w-auto" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Shenzhen Kingdta Technology Co., Ltd. —?Your Sensor-to-Board Solution Provider.</p>
                <div className="flex gap-3">
                  {['ISO 9001', 'RoHS', 'IPC-A-610'].map(c => (
                    <span key={c} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Solutions</p>
                <ul className="space-y-2">
                  {['Smart Security & IoT', 'Consumer Electronics', 'Automotive Peripherals', 'Automation & Robotics', 'Custom Solutions'].map(l => (
                    <li key={l}><a href="/solutions" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Products</p>
                <ul className="space-y-2">
                  {[
                    ['KD1902S Vibration Sensor', '/blog/kd1902s'],
                    ['KD1908S Angle Sensor', '/blog/kd1908s'],
                    ['KD1918S Optical Tilt', '/blog/kd1918s'],
                    ['KD1912 (5M Cycles)', '/blog/kd1912'],
                    ['KD1901S Low Power', '/blog/kd1901s'],
                  ].map(([l, h]) => (
                    <li key={l}><a href={h} className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a></li>
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

      {/* ── CONTACT MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden anim-fade-up">
            <div className="h-1.5 bg-gradient-to-r from-green-400 via-green-600 to-emerald-500" />
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-1">Discuss Your Application</h3>
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
                <input type="hidden" name="_subject" value="New Solution Inquiry from Kingdta Website" />
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
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Industry</label>
                    <select name="industry" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white">
                      <option value="">Select industry...</option>
                      <option>Smart Security & IoT</option>
                      <option>Consumer Electronics</option>
                      <option>Automotive Peripherals</option>
                      <option>Automation & Robotics</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Application Description</label>
                  <textarea name="message" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" placeholder="Describe your application, sensor requirements, environment conditions, production volume..."></textarea>
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
