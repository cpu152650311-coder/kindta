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
    href: '/radar-modules',  },
]

const RADAR_PRODUCTS = [
  {
    model: 'BD4101A-C04',
    name: 'Microwave Radar Sensing Module',
    badge: '5.8GHz',
    img: '/radar/bd4101a-front.png',
    articleHref: '/blog/bd4101a-c04-microwave-radar-module-smart-lighting',
    pdfHref: '/downloads/bd4101a-c04-microwave-radar-spec.pdf',
    summary:
      'A compact microwave radar sensing module for presence detection, motion sensing, smart lighting, and home automation scenarios.',
    specs: [
      ['Working Frequency', '5.725GHz-5.875GHz'],
      ['Detection Range', 'Front 1-13m'],
      ['Mounting Height', '3m'],
      ['Coverage Radius', '3-5m'],
      ['Working Voltage', '3V-12V'],
      ['Current', '880uA default / 9.6mA high-power mode'],
      ['Output', 'IO / UART, 0-3.3V'],
      ['Module Size', '19.5 x 18 x 1.6mm'],
    ],
    highlights: [
      'Low power consumption',
      'Strong resistance to environmental interference',
      'Can penetrate acrylic, glass, and thin non-metal materials',
      'Built-in MCU with digital filtering and anti-interference algorithms',
      'Adjustable sensing distance and light-sensing threshold',
    ],
    scenarios: ['Smart home panels', 'Door locks', 'Doorbells', 'Security alarms', 'Sensor lighting'],
  },
  {
    model: 'WT4104B-C01',
    name: 'Blind-Spot Detection Radar Module',
    badge: '77-81GHz',
    img: '/radar/wt4104b-front.png',
    articleHref: '/blog/wt4104b-c01-blind-spot-detection-radar-ebike-safety',
    pdfHref: '/downloads/wt4104b-c01-bsd-radar-spec.pdf',
    summary:
      'A compact FMCW blind-spot detection radar module designed for low-speed vehicles, e-bikes, and safety-assistance applications.',
    specs: [
      ['Working Mode', 'FMCW'],
      ['Working Frequency', '77-81GHz'],
      ['Antenna', '2Tx 2Rx'],
      ['Vehicle Detection', '40m'],
      ['E-bike Detection', '25m'],
      ['Pedestrian Detection', '15m'],
      ['Angle Coverage', 'Horizontal +/-60 deg, vertical +/-15 deg'],
      ['Module Size', '32 x 32 x 9mm'],
      ['Working Voltage', '9V-16V'],
      ['Refresh Time', '100ms'],
    ],
    highlights: [
      'High-precision blind-spot monitoring',
      'Supports CAN-based integration',
      'Up to 16 target detections',
      'Warning logic for BSD, lane change assist, and rear collision warning',
      'Stable performance across light, dust, airflow, and temperature changes',
    ],
    scenarios: ['E-bikes', 'Electric tricycles', 'Scooters', 'Motorcycles', 'Special-purpose vehicles'],
  },
]

export default function RadarModulesPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
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
                          <p className="text-gray-900 font-semibold text-sm">Product Categories</p>
                          <p className="text-gray-500 text-xs leading-relaxed mt-1">Browse our sensor modules and new radar product line.</p>
                        </div>
                      </a>
                      <a href="/contact" className="w-full mt-3 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
                        Contact Sales
                      </a>
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
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">About</a>
            <a href="/contact" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:sales@kingdta.com" className="hidden md:block text-sm text-gray-500 hover:text-green-700 transition-colors">sales@kingdta.com</a>
            <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Get a Quote
            </a>
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
              <span className="text-gray-600 font-medium">Radar Modules</span>
            </div>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                <span className="w-2 h-2 bg-amber-500 rounded-full inline-block animate-pulse" />
                New Product Line
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Radar Modules<br />
                <span className="text-green-600">Detection & Safety Solutions</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                This page focuses on radar products only, including microwave sensing modules for smart devices and blind-spot detection radar modules for vehicle safety applications.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {RADAR_PRODUCTS.map(product => (
                <div key={product.model} className="rounded-3xl border border-gray-100 bg-gray-50 overflow-hidden card-hover">
                  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                    <div className="bg-white flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-100">
                      <img src={product.img} alt={product.model} className="w-full max-w-[220px] h-auto object-contain" />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">{product.badge}</span>
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{product.model}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.scenarios.map(scenario => (
                          <span key={scenario} className="bg-white text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200">{scenario}</span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-5">
                        <a href={product.articleHref} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
                          Read Article
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                        </a>
                        <a href={product.pdfHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors bg-white">
                          Download PDF
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4.5 18.75h15" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
            {RADAR_PRODUCTS.map((product, index) => (
              <div key={product.model} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className={`lg:col-span-2 ${product.model === 'BD4101A-C04' ? 'bg-[#F3F4F6]' : (index % 2 === 0 ? 'bg-black' : 'bg-gray-100')} flex items-center justify-center p-8`}>
                    <img src={product.img} alt={product.model} className="w-full max-w-[320px] h-auto object-contain" />
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">{product.model}</p>
                        <h3 className="text-3xl font-bold text-gray-900">{product.name}</h3>
                      </div>
                      <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-100">{product.badge}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{product.summary}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <a href={product.articleHref} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
                        Read SEO Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                      </a>
                      <a href={product.pdfHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors bg-white">
                        Download Spec PDF
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4.5 18.75h15" /></svg>
                      </a>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Key Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {product.highlights.map(item => (
                          <span key={item} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Typical Use Cases</p>
                      <div className="flex flex-wrap gap-2">
                        {product.scenarios.map(item => (
                          <span key={item} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 px-8 lg:px-10 py-6">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Core Specifications</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
                    {product.specs.map(([key, value], specIndex) => (
                      <div key={key} className={`p-4 ${specIndex % 2 === 0 ? 'bg-gray-50/80' : 'bg-white'} border-b border-gray-100 last:border-b-0`}>
                        <p className="text-gray-400 text-xs mb-1">{key}</p>
                        <p className="text-gray-900 font-semibold text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <img src="/D.1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Need Radar Integration Support? <span className="text-green-400">We Can Help.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              If you need module selection, board-level integration, or application tuning for radar products, our team can support your project from evaluation to production.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green-600/30 text-lg">
                Contact Our Team
              </a>
              <a href="/sensor-modules" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                View Sensor Modules
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
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Module Pages</p>
                <ul className="space-y-2">
                  <li><a href="/sensor-modules" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Sensor Modules</a></li>
                  <li><a href="/radar-modules" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Radar Modules</a></li>
                  <li><a href="/solutions" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Solutions</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Navigation</p>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Home</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-green-400 text-sm transition-colors">About</a></li>
                  <li><a href="/blog" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Blog</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Contact</a></li>
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
              <p className="text-gray-600 text-sm">Radar and sensor solutions for smart hardware.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

