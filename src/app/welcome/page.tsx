'use client'

import { useState } from 'react'

const BENEFITS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: 'Zero False Alarms',
    desc: 'We tune sensor sensitivity specifically for your PCB design — ensuring 0% false trigger rates in your application.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: 'Cut Cost & Lead Time',
    desc: 'Eliminate middlemen between sensor manufacturing and board assembly. One partner, one invoice, faster delivery.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    title: 'Industrial Grade Quality',
    desc: 'ISO 9001 certified. Full functional testing on every board. Specialists in ultra-low power consumption for IoT.',
  },
]

const PRODUCTS = [
  { model: 'KD1902S', type: 'Vibration Sensor', badge: '360° Omni', img: '/blog-pic/KD1902S.jpg', color: 'bg-green-600' },
  { model: 'KD1908S', type: 'Tilt & Angle Sensor', badge: 'Micro-amp', img: '/blog-pic/KD1908S-blog.jpg', color: 'bg-blue-600' },
  { model: 'KD1918S', type: 'Optical Tilt Sensor', badge: '360° Detection', img: '/blog-pic/KD1918S.jpg', color: 'bg-violet-600' },
  { model: 'KD1912', type: 'Long-Life Sensor', badge: '5M Cycles', img: '/blog-pic/HS1912.jpg', color: 'bg-orange-600' },
  { model: 'KD1901S', type: 'Low Power Sensor', badge: 'nA Standby', img: '/blog-pic/KD1901S.jpg', color: 'bg-teal-600' },
]

const STATS = [
  { num: '15+', label: 'Years Experience' },
  { num: '500+', label: 'Clients Worldwide' },
  { num: '5M+', label: 'Sensor Cycles Tested' },
  { num: '24h', label: 'Quote Response' },
]

const INDUSTRIES = [
  'Smart Security & Anti-theft', 'IoT Asset Tracking', 'Automotive TPMS',
  'Industrial Automation', 'Consumer Electronics', 'Medical Devices',
  'Electric Vehicles', 'Smart Home Devices',
]

export default function WelcomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── HERO — Full bleed, no header ── */}
      <section className="bg-gray-900 min-h-screen flex flex-col justify-center overflow-hidden relative">
        {/* subtle bg texture */}
        <div className="absolute inset-0 opacity-10">
          <img src="/1.1.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
          {/* Logo top-left inside hero */}
          <div className="mb-10">
            <img src="/sitelogo22.png" alt="Kingdta" className="h-8 object-contain" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT: Text + CTA */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Shenzhen · ISO 9001 Certified
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Precision<br />
                <span className="text-green-400">Vibration &amp; Tilt</span><br />
                Sensors
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-3">
                Custom-tuned for your application.<br />
                Integrated with expert PCBA manufacturing.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                From nanoamp IoT wake-up to 5M-cycle industrial durability, you get one partner from sensor design to finished boards.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green-600/30 text-base"
                >
                  Get Free Quote &amp; Sample
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                {['ISO 9001 Certified', 'RoHS Compliant', 'Free DFM Check', '24h Response'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: 2×2 Product cards (homepage style) */}
            <div className="grid grid-cols-2 gap-4">
              {PRODUCTS.slice(0, 4).map(p => (
                <button
                  key={p.model}
                  onClick={() => setModalOpen(true)}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 group"
                >
                  <p className="text-xs text-gray-400 font-medium mb-1">Sensor Product</p>
                  <p className="text-gray-900 font-bold text-sm mb-2">{p.model}</p>
                  <div className="w-full bg-black rounded-xl mb-3 overflow-hidden">
                    <img src={p.img} alt={p.model} className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 truncate mr-1">{p.type}</span>
                    <span className={`${p.color} text-white text-xs font-bold px-2 py-0.5 rounded-full shrink-0`}>{p.badge}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-green-700 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white">{s.num}</p>
              <p className="text-green-200 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Why Choose Kingdta?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Sensor-to-Board Advantage</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              When your sensor manufacturer and PCBA factory are the same expert team, everything works better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map(b => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-5">
                  {b.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{b.desc}</p>
                <button onClick={() => setModalOpen(true)} className="text-green-600 hover:text-green-700 text-sm font-semibold flex items-center gap-1 group">
                  Quote Now
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY + FACTORY (moved after products) ── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT: Factory photo collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden h-48">
                <img src="/1.1.jpg" alt="Kingdta Factory" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-36">
                <img src="/4.1.jpg" alt="SMT Production" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-36">
                <img src="/5.1.jpg" alt="Quality Control" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden h-36">
                <img src="/1.2.jpg" alt="Production Line" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* RIGHT: Company intro */}
            <div>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-4">About Kingdta Electronics</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                15 Years of Sensor<br />
                <span className="text-green-600">Design & Manufacturing</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Headquartered in Shenzhen's Bao'an District, Kingdta Electronics specializes in passive, ultra-low-power vibration and tilt sensors, helping solve demanding sensing challenges from prototype to mass production.
              </p>
              <p className="text-gray-500 leading-relaxed mb-7">
                Our core advantage is co-designing the sensor and PCBA as one unified system, optimizing performance, cost, and manufacturability from the very first design review. One partner, one purchase path, and far less integration risk.
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['ISO 9001', 'RoHS', 'IPC-A-610', 'REACH'].map(c => (
                  <span key={c} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                    {c} ✓
                  </span>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20"
              >
                Request Free Sample
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-4">Industries We Serve</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Proven Solutions for Demanding Applications</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map(ind => (
              <span key={ind} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Client Feedback</p>
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Engineers Worldwide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Kingdta's vibration sensor solution was a game-changer for our smart security devices. Their precise sensitivity adjustment completely solved our false alarm issue.", name: 'G.H', title: 'Senior Product Manager' },
              { quote: "Kingdta's ultra-low-power wake-up sensors helped us extend our device's standby time by 40%. Their hardware solution was exactly what we needed for long-term reliability.", name: 'L.D', title: 'Lead Hardware Engineer' },
              { quote: "They didn't just sell us a component; they provided a full integration strategy. The engineering team helped us optimize the circuit design for the tilt sensors.", name: 'J.M', title: 'R&D Director' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM SECTION ── */}
      <section className="py-20 bg-white" id="quote">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
            <p className="text-gray-500">Tell us about your project. We'll respond within 24 hours with a tailored solution.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inquiry Sent!</h3>
              <p className="text-gray-500 text-sm">Our team will reach out within 24 hours.</p>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/046212858f6a8cc4976203100919d247"
              method="POST"
              encType="multipart/form-data"
              onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-5"
            >
              <input type="hidden" name="_next" value="https://kingdta.com/thank-you/" />
              <input type="hidden" name="_subject" value="AD New Inquiry from Kingdta Welcome Page" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting Kingdta. We have received your inquiry and will respond within 24 hours." />
              <input type="text" name="_honey" style={{display:'none'}} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Name</label>
                  <input name="name" required placeholder="Full Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
                  <input name="email" type="email" required placeholder="Email Address" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company</label>
                  <input name="company" placeholder="Company Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
                  <input name="phone" type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea name="message" rows={4} placeholder="Describe your application, sensor requirements, production volume..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Attachment</label>
                <input name="attachment" type="file" accept="*/*" className="w-full text-sm text-gray-500 border border-gray-200 rounded-xl px-4 py-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-green-600/20 text-base flex items-center justify-center gap-2">
                Send Inquiry — Get Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
              </button>
              <p className="text-center text-xs text-gray-400">Your information is secure and will not be shared with third parties.</p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 py-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/sitelogo22.png" alt="Kingdta" className="h-8 object-contain opacity-80" />
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Shenzhen Kingdta Technology Co., Ltd. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>sales@kingdta.com</span>
            <span>·</span>
            <span>ISO 9001 Certified</span>
          </div>
        </div>
      </footer>

      {/* ── INQUIRY MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-7">
            <div className="flex items-center justify-between mb-6">
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
              <input type="hidden" name="_subject" value="AD New Inquiry from Kingdta Welcome Page" />
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
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea name="message" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" placeholder="Describe your project requirements..."></textarea>
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
      )}
    </div>
  )
}
