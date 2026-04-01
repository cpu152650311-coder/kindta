'use client'

import { useEffect, useState } from 'react'

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
    href: '/radar-modules',
  },
]

const CATEGORIES = [
  {
    img: '/B2.1.png',
    tag: 'Most Popular',
    tagColor: 'bg-green-500',
    title: 'Omni-directional\nVibration Sensors',
    desc: 'High sensitivity, 2M+ cycle life, and compact SMD packaging for always-on devices.',
    applications: 'Asset trackers, smart security devices, TPMS, and wearable wake-up functions.',
    href: '#kd1902',
    models: ['KD1902', 'KD1902+', 'KD1911H', 'KD1912', 'KD1901S'],
  },
  {
    img: '/B2.2.png',
    tag: 'Precision',
    tagColor: 'bg-blue-500',
    title: 'Tilt & Angle\nSensors',
    desc: 'Low-power angle and position detection for safety shut-off and orientation sensing.',
    applications: 'Power tools, medical devices, smart pens, and consumer electronics.',
    href: '#kd1908',
    models: ['KD1908'],
  },
  {
    img: '/B2.3.png',
    tag: 'Custom',
    tagColor: 'bg-purple-500',
    title: 'Optical &\nCustomized Solutions',
    desc: 'Optical tilt sensing and custom engineering support for unique structures and packaging.',
    applications: 'Anti-tamper, EV locks, non-standard designs, and special sensor projects.',
    href: '#kd1918s',
    models: ['KD1918S', 'Custom'],
  },
]

const PRODUCTS = [
  {
    id: 'kd1902',
    model: 'KD1902',
    name: 'Omni-directional Vibration Sensor',
    badge: '360-degree Trigger',
    img: '/blog-pic/KD1902S.jpg',
    tag: 'Vibration',
    tagColor: 'bg-green-600',
    articleHref: '/blog/kd1902',
    pdfHref: '/downloads/kd1902-datasheet.pdf',
    intro:
      'Industry-leading omnidirectional vibration sensing with a proven 2M+ cycle lifespan for smart security, IoT wake-up triggers, and TPMS applications.',
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
    features: ['360-degree Omnidirectional', 'SMD Package', 'RoHS', '2M+ Life Cycles', 'Custom Sensitivity'],
    applications: ['GPS Asset Trackers', 'TPMS Systems', 'Smart Security', 'IoT Wake-up', 'Wearables'],
  },
  {
    id: 'kd1902-plus',
    model: 'KD1902+',
    name: 'Enhanced Vibration Sensor',
    badge: 'KD1902 Family',
    img: '/blog-pic/KD1902S.jpg',
    tag: 'Vibration',
    tagColor: 'bg-emerald-600',
    articleHref: '/blog/kd1902-plus',
    pdfHref: '/downloads/kd1902-plus-datasheet.pdf',
    intro:
      'Enhanced KD1902-series variant for demanding mechanical packaging and vibration profiles, with extra tuning margin while staying passive on standby.',
    specs: [
      { key: 'Operating Voltage', val: '3.3V-5V' },
      { key: 'Trigger Direction', val: '360-degree Omni' },
      { key: 'Response Time', val: '< 5ms' },
      { key: 'Life Cycles', val: '> 2,000,000' },
      { key: 'Package', val: 'SMD 3.5 x 2.5mm' },
      { key: 'Operating Temp', val: '-40C to +85C' },
      { key: 'Compliance', val: 'RoHS' },
      { key: 'Note', val: 'See datasheet vs KD1902' },
    ],
    features: ['KD1902 platform', 'Enhanced margin', 'SMD Package', 'RoHS', 'IoT Wake-up'],
    applications: ['Harsh packaging', 'Logistics tags', 'TPMS', 'Security', 'Wearables'],
  },
  {
    id: 'kd1908',
    model: 'KD1908',
    name: 'Tilt & Angle Sensor',
    badge: 'Micro-amp',
    img: '/blog-pic/HS1908.jpg',
    tag: 'Tilt & Angle',
    tagColor: 'bg-blue-600',
    articleHref: '/blog/kd1908',
    pdfHref: '/downloads/kd1908-datasheet.pdf',
    intro:
      'Ultra-low power tilt detection with micro-ampere standby current and precise angular response for always-on consumer devices and safety shutoff applications.',
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
    intro:
      'Non-contact optical tilt detection covering the full 360-degree sphere for anti-tamper, safety shutoff, and smart locking scenarios.',
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
    features: ['Optical Design', '360-degree Coverage', 'SMD Package', 'RoHS', 'No Mechanical Wear'],
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
    pdfHref: '/downloads/kd1912-datasheet.pdf',
    intro:
      'A durable sensor built for high-cycle industrial and automotive use, with 5M+ trigger cycles and stable sensitivity.',
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
    features: ['5M+ Life Cycles', 'High-Temp Body', 'SMD Package', 'RoHS', 'Industrial Grade'],
    applications: ['Automotive TPMS', 'Industrial Automation', 'Heavy Machinery', 'High-cycle IoT', 'Conveyor Systems'],
  },
  {
    id: 'kd1911h',
    model: 'KD1911H',
    name: 'High-Sensitivity Vibration Sensor',
    badge: 'Compact H-Series',
    img: '/blog-pic/HS1912.jpg',
    tag: 'Vibration',
    tagColor: 'bg-amber-600',
    articleHref: '/blog/kd1911h',
    pdfHref: '/downloads/kd1911h-datasheet.pdf',
    intro:
      'High-sensitivity passive vibration switch for compact PCBs and battery-powered wake-up where every millimeter and micro-amp counts.',
    specs: [
      { key: 'Operating Voltage', val: '3.3V-5V' },
      { key: 'Trigger Direction', val: '360-degree Omni' },
      { key: 'Response Time', val: '< 5ms' },
      { key: 'Standby', val: 'Passive (sensor)' },
      { key: 'Package', val: 'SMD' },
      { key: 'Operating Temp', val: '-40C to +85C' },
      { key: 'Compliance', val: 'RoHS' },
      { key: 'Ideal For', val: 'Compact IoT wake-up' },
    ],
    features: ['High sensitivity', 'Compact SMD', 'RoHS', 'Passive standby', 'Wake trigger'],
    applications: ['Anti-tamper', 'Portable devices', 'Asset tags', 'Smart peripherals', 'Industrial telemetry'],
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
    intro:
      'Designed for battery-powered IoT devices, delivering nanoamp-level standby current while maintaining responsive motion detection.',
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
    features: ['Nano-amp Standby', 'Ultra-compact SMD', 'RoHS', 'Low Voltage', 'IoT Optimized'],
    applications: ['Asset Tracking Tags', 'Coin-battery Devices', 'Smart Labels', 'Disposable IoT', 'Wearable Sensors'],
  },
]

export default function SensorModulesPage() {
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return
    const index = PRODUCTS.findIndex((product) => product.id === hash)
    if (index >= 0) {
      setActiveProduct(index)
      setTimeout(() => {
        document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth' })
      }, 250)
    }
  }, [])

  return (
    <>
      <style>{`
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

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[68px]">
          <a href="/" className="flex items-center shrink-0">
            <img src="/header-logo.png" alt="Kingdta" className="h-7 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Home</a>
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
                          <p className="text-gray-500 text-xs leading-relaxed mt-1">Browse category pages for sensor modules and radar modules.</p>
                        </div>
                      </a>
                      <button onClick={() => setModalOpen(true)} className="w-full mt-3 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
                        Request Sample
                      </button>
                    </div>
                    <div className="px-3 py-3">
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-3 py-1.5">Module Pages</p>
                      <div className="space-y-1">
                        {PRODUCT_MENU.map((item) => (
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
              {PRODUCT_MENU.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between text-gray-500 text-sm py-1.5">
                  <span>{item.label}</span>
                  <span className="text-xs text-gray-400">{item.meta}</span>
                </a>
              ))}
            </div>
            <a href="/solutions" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Solutions</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Blog</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-[68px]">
        <section className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-green-600 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <a href="/products" className="hover:text-green-600 transition-colors">Products</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-600 font-medium">Sensor Modules</span>
            </div>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                Core Sensor Line
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Sensor Modules<br />
                <span className="text-green-600">Precision Sensing Components</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                This page focuses on our passive sensor product family, covering vibration, tilt, and optical sensor modules for smart hardware and industrial devices.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CATEGORIES.map((category) => (
                <a
                  key={category.title}
                  href={category.href}
                  onClick={(event) => {
                    event.preventDefault()
                    const index = PRODUCTS.findIndex((product) => `#${product.id}` === category.href)
                    if (index >= 0) {
                      setActiveProduct(index)
                      document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="relative rounded-3xl overflow-hidden cursor-pointer card-hover block"
                >
                  <img src={category.img} alt={category.title} className="w-full h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-7 pt-4">
                    <span className={`inline-block ${category.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3`}>{category.tag}</span>
                    <h3 className="text-white font-bold text-xl leading-snug mb-2 whitespace-pre-line">{category.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-1 line-clamp-2">{category.desc}</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-1">
                      <span className="font-semibold text-gray-300">Applications:</span> {category.applications}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {category.models.map((model) => (
                        <span key={model} className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/20">{model}</span>
                      ))}
                    </div>
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

        <section id="detail" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Product Specifications</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Detailed Specs by Model</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Select a product model below to view technical specifications, feature highlights, and typical application scenarios.</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {PRODUCTS.map((product, index) => (
                <button
                  key={product.model}
                  onClick={() => setActiveProduct(index)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${activeProduct === index ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/20' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700'}`}
                >
                  {product.model}
                  <span className={`ml-2 text-xs ${activeProduct === index ? 'text-green-200' : 'text-gray-400'}`}>{product.tag}</span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-black flex items-center justify-center relative overflow-hidden min-h-[260px]">
                  <img src={activeProd.img} alt={activeProd.model} className="w-full h-full object-contain" />
                  <span className={`absolute top-3 right-3 ${activeProd.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{activeProd.badge}</span>
                </div>
                <div className="lg:col-span-3 p-7 lg:p-9">
                  <div className="mb-5">
                    <span className={`inline-block ${activeProd.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3`}>{activeProd.model}</span>
                    <h3 className="text-gray-900 font-bold text-2xl leading-tight">{activeProd.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{activeProd.intro}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProd.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Typical Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {activeProd.applications.map((application) => (
                        <span key={application} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg">{application}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-lg shadow-green-600/20 text-sm">
                      Request Sample
                    </button>
                    <a href={activeProd.articleHref} className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm bg-white">
                      Read Article
                    </a>
                    {activeProd.pdfHref ? (
                      <a href={activeProd.pdfHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm bg-white">
                        Download PDF
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100">
                <div className="px-8 lg:px-10 py-6">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Technical Specifications</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
                    {activeProd.specs.map((spec, index) => (
                      <div key={spec.key} className={`p-4 ${index % 2 === 0 ? 'bg-gray-50/80' : 'bg-white'} border-b border-gray-100 last:border-b-0`}>
                        <p className="text-gray-400 text-xs mb-1">{spec.key}</p>
                        <p className="text-gray-900 font-semibold text-sm">{spec.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setActiveProduct((value) => Math.max(0, value - 1))}
                disabled={activeProduct === 0}
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg>
                {activeProduct > 0 ? PRODUCTS[activeProduct - 1]?.model ?? 'Previous' : 'Previous'}
              </button>
              <span className="text-gray-300 text-sm">{activeProduct + 1} / {PRODUCTS.length}</span>
              <button
                onClick={() => setActiveProduct((value) => Math.min(PRODUCTS.length - 1, value + 1))}
                disabled={activeProduct === PRODUCTS.length - 1}
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {activeProduct < PRODUCTS.length - 1 ? PRODUCTS[activeProduct + 1]?.model ?? 'Next' : 'Next'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <img src="/D.1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Need a Custom Sensor? <span className="text-green-400">We Design It.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              If you need special sensitivity, package structure, or application tuning, we can support customized sensor design for your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green-600/30 text-lg">
                Request a Sample
              </button>
              <a href="/products" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                View Product Categories
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-950 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="mb-4">
                  <img src="/sitelogo22.png" alt="Kingdta" className="h-8 w-auto" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Shenzhen Kingdta Technology Co., Ltd. - Your Sensor-to-Board Solution Provider.</p>
                <div className="flex gap-3">
                  {['ISO 9001', 'RoHS', 'IPC-A-610'].map((cert) => (
                    <span key={cert} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">{cert}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Product Categories</p>
                <ul className="space-y-2">
                  <li><a href="/products" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Products Overview</a></li>
                  <li><a href="/sensor-modules" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Sensor Modules</a></li>
                  <li><a href="/radar-modules" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Radar Modules</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Navigation</p>
                <ul className="space-y-2">
                  {[['Home', '/'], ['Solutions', '/solutions'], ['Products', '/products'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                    <li key={label}><a href={href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Contact</p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>sales@kingdta.com</li>
                  <li>+86 18617165334</li>
                  <li>Shenzhen, Guangdong, China</li>
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

      {modalOpen && activeProd ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(event) => event.target === event.currentTarget && setModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
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
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Kingdta. We have received your inquiry and will respond within 24 hours." />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_subject" value={`Sample Request: ${activeProd.model} from Kingdta Website`} />
                <input type="hidden" name="product" value={activeProd.model} />
                <div className="grid grid-cols-2 gap-4">
                  <input name="name" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your name" />
                  <input name="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input name="company" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Company name" />
                  <input name="quantity" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="e.g. 10 pcs" />
                </div>
                <textarea name="message" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" placeholder="Briefly describe your application..." />
                <input name="attachment" type="file" accept="*/*" className="w-full text-sm text-gray-500 border border-gray-200 rounded-xl px-4 py-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20">
                  Send Sample Request
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
