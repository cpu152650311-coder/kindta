'use client'

import { useEffect, useRef, useState } from 'react'

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

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const CONTACT_CARDS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
      </svg>
    ),
    label: 'Sales',
    value: '+86 18617165334',
    sub: 'Mon-Fri, 9:00-18:00 CST',
    href: 'tel:+8618617165334',
    color: 'bg-green-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
      </svg>
    ),
    label: 'Engineering',
    value: '+86 18926528143',
    sub: 'Technical support and FAE',
    href: 'tel:+8618926528143',
    color: 'bg-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'sales@kingdta.com',
    sub: 'Response within 24 hours',
    href: 'mailto:sales@kingdta.com',
    color: 'bg-emerald-600',
  },
]

const ADDRESSES = [
  {
    type: 'Office',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    address: 'Room 408-10, 4/F, Building 10, COFCO Fu\'an Robotics Industrial Park, Rentian Community, Fuyong Subdistrict, Bao\'an District, Shenzhen, Guangdong, China',
  },
  {
    type: 'Factory',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    address: 'Room 111, Xinbaoyi Industry & Trade Building, No. 29, Third Industrial Zone, Houting Community, Shajing Subdistrict, Bao\'an District, Shenzhen, Guangdong, China',
  },
]

const FAQS = [
  {
    q: 'How quickly can I get a sample for evaluation?',
    a: 'Standard samples are typically shipped within 3-5 business days after confirmation. For custom specifications, lead time depends on your requirements. Contact us to discuss.',
  },
  {
    q: 'Do you support custom sensor sensitivity or packaging?',
    a: 'Yes. We offer custom sensitivity adjustment, threshold tuning, and SMD/through-hole packaging options depending on the product line. Share your requirements and our engineering team will evaluate feasibility.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our standard MOQ is 1,000 pcs for most products. For prototyping and evaluation purposes, we can often accommodate smaller quantities. Please inquire directly.',
  },
  {
    q: 'What certifications do your products carry?',
    a: 'Our products comply with RoHS directive and are manufactured under ISO 9001 quality management. PCBA production meets IPC-A-610 standards. Additional certifications are available upon request.',
  },
  {
    q: 'Can you provide design-in support and application engineering?',
    a: 'Absolutely. We provide reference schematics, integration guides, and direct engineering support throughout your development cycle, from component selection to mass production.',
  },
]

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroRef = useInView(0.1)
  const formRef = useInView(0.1)
  const faqRef = useInView(0.1)

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
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(22, 163, 74, 0.12);
        }
        .faq-body {
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease;
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
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">About</a>
            <a href="/contact" className="text-sm font-medium text-green-700">Contact</a>
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
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
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
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-green-700 text-sm font-medium py-2">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-[68px]">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent" />
          <div ref={heroRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex items-center gap-2 text-sm text-gray-400 mb-8 ${heroRef.inView ? 'anim-fade-in' : 'opacity-0'}`}>
              <a href="/" className="hover:text-green-600 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-600 font-medium">Contact</span>
            </div>
            <div className="max-w-3xl">
              <div className={`inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide ${heroRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                Response within 24 hours
              </div>
              <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 ${heroRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
                Get in Touch<br />
                <span className="text-green-600">We're Here to Help</span>
              </h1>
              <p className={`text-gray-500 text-lg leading-relaxed max-w-2xl ${heroRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
                Whether you need a sensor recommendation, a sample request, or a full solution design consultation, our sales and engineering teams are ready to assist.
              </p>
            </div>

            {/* Contact quick-cards */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 ${heroRef.inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}>
              {CONTACT_CARDS.map(c => (
                <a key={c.label} href={c.href} className="bg-white rounded-2xl border border-gray-100 p-6 card-hover group flex items-start gap-4">
                  <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center text-white shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="text-gray-900 font-bold text-sm group-hover:text-green-700 transition-colors">{c.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{c.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN: FORM + ADDRESSES ── */}
        <section className="py-20 bg-gray-50">
          <div ref={formRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* LEFT: Form */}
              <div className={`lg:col-span-3 ${formRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
                <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill in the form and our team will get back to you within 24 hours.</p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="text-gray-900 font-bold text-xl mb-2">Message Sent!</h3>
                      <p className="text-gray-500 text-sm max-w-xs">Thank you for reaching out. We'll respond to your inquiry within 24 hours.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-6 text-green-600 hover:text-green-700 text-sm font-semibold underline underline-offset-2">
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form
                      action="https://formsubmit.co/046212858f6a8cc4976203100919d247"
                      method="POST"
                      onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
                      className="space-y-5"
                    >
                      <input type="hidden" name="_next" value="https://kingdta.com/thank-you/" />
                      <input type="hidden" name="_subject" value="AD New Inquiry from kingdta Website Contact Form" />
                      <input type="hidden" name="_captcha" value="true" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_autoresponse" value="Thank you for contacting Kingdta. We have received your inquiry and will respond within 24 hours." />
                      <input type="text" name="_honey" style={{display:'none'}} />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Name</label>
                          <input name="name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow" placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                          <input name="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow" placeholder="john@company.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company</label>
                          <input name="company" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow" placeholder="Acme Electronics Ltd." />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
                          <input name="phone" type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow" placeholder="+1 555 000 0000" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Inquiry Type</label>
                        <select name="inquiry_type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-shadow">
                          <option value="">Select a topic...</option>
                          <option>Sample Request</option>
                          <option>Product Specification</option>
                          <option>Custom Sensor Design</option>
                          <option>Solution Consultation</option>
                          <option>Pricing & MOQ</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                        <textarea name="message" rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-shadow" placeholder="Describe your application, product of interest, quantity, or any technical requirements..."></textarea>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Attachment</label>
                        <input name="attachment" type="file" accept="*/*" className="w-full text-sm text-gray-500 border border-gray-200 rounded-xl px-4 py-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                      </div>

                      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* RIGHT: Addresses + Brand image */}
              <div className={`lg:col-span-2 space-y-6 ${formRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>

                {/* Brand image */}
                <div className="rounded-3xl overflow-hidden shadow-sm">
                  <img src="/d.2.jpg" alt="Kingdta Office" className="w-full h-auto" />
                </div>

                {ADDRESSES.map(a => (
                  <div key={a.type} className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                        {a.icon}
                      </div>
                      <p className="text-gray-900 font-bold text-sm">{a.type} Address</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.address}</p>
                  </div>
                ))}

                {/* Response time badge */}
                <div className="bg-green-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-green-200" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="font-bold text-sm">Our Response Commitment</p>
                  </div>
                  <ul className="space-y-2 text-sm text-green-100">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-300 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                      General inquiries: within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-300 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                      Technical support: within 2 business days
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-300 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                      Sample dispatch: 3-5 business days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BANNER ── */}
        <section className="relative h-56 overflow-hidden">
          <img src="/5.1.jpg" alt="Kingdta Factory" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-2">Shenzhen, China</p>
              <h2 className="text-white font-bold text-2xl lg:text-3xl">ISO 9001 / RoHS / IPC-A-610</h2>
              <p className="text-gray-300 text-sm mt-2">Serving clients across Asia, Europe & the Americas</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div ref={faqRef.ref} className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-12 ${faqRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500">Common questions from hardware engineers and procurement teams.</p>
            </div>

            <div className={`space-y-3 ${faqRef.inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className="text-gray-900 font-semibold text-sm pr-4 group-hover:text-green-700 transition-colors">{faq.q}</span>
                    <svg className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Shenzhen Kingdta Technology Co., Ltd. - Your Sensor-to-Board Solution Provider.</p>
                <div className="flex gap-3">
                  {['ISO 9001', 'RoHS', 'IPC-A-610'].map(c => (
                    <span key={c} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Navigation</p>
                <ul className="space-y-2">
                  {NAV_LINKS.map(l => (
                    <li key={l.label}><a href={l.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l.label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-4">Products</p>
                <ul className="space-y-2">
                  {['KD1902S Vibration Sensor', 'KD1908S Angle Sensor', 'KD1918S Optical Tilt', 'KD1912 (5M Cycles)', 'KD1901S Ultra Low Power'].map(l => (
                    <li key={l}><a href="/#products" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a></li>
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
    </>
  )
}

