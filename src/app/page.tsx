'use client'

import { useEffect, useRef, useState } from 'react'

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// DATA
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

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

const STATS = [
  { value: 999, suffix: '+', label: 'Clients Worldwide' },
  { value: 30, suffix: '+', label: 'Countries Served' },
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 99, suffix: '.2%', label: 'Quality Pass Rate' },
]

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Sensor Solutions',
    desc: 'End-to-end sensor customization from selection and schematic design to validated prototypes, tailored for your exact application.',
    tag: 'Design-to-Prototype',
    href: '#solutions',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    title: 'Industrial Solutions',
    desc: 'Ruggedized sensor systems for factory automation, AGV positioning, and harsh-environment industrial IoT deployments.',
    tag: 'Industrial Grade',
    href: '#solutions',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: 'Automation & Robotics',
    desc: 'Precision motion sensors and integrated circuit modules for robotic joints, autonomous vehicles, and servo feedback systems.',
    tag: 'Motion Control',
    href: '#solutions',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    title: 'PCBA Services',
    desc: 'Integrated PCBA manufacturing as part of the sensor solution, co-designed for signal integrity and validated for sensor performance.',
    tag: 'Manufacturing Support',
    href: '#pcba',
  },
]

const PRODUCTS = [
  {
    model: 'KD1902S',
    name: 'Vibration Sensor',
    badge: '2M Cycle Life',
    img: '/blog-pic/KD1902S.jpg',
    specs: ['SMD Package', '1.8V-5.5V', '> 2M Cycles', 'IoT Ready'],
    desc: 'Ultra-durable SMD vibration sensor engineered for 2-million-cycle reliability in industrial IoT and asset monitoring applications.',
    color: '#16a34a',
    applications: ['Smart Security', 'TPMS Wake-up', 'Wearables', 'Asset Trackers'],
  },
  {
    model: 'KD1908S',
    name: 'Angle Sensor',
    badge: 'High Precision',
    img: '/blog-pic/HS1908.jpg',
    specs: ['360-degree Range', '+/-1 degree Accuracy', 'SMD Package', 'Low Power'],
    desc: 'High-precision SMD tilt and angle sensor delivering sub-degree accuracy for medical, automotive, and robotics positioning.',
    color: '#059669',
    applications: ['Medical Devices', 'Power Tool Safety', 'Smart Pen', 'Robotics'],
  },
  {
    model: 'KD1918S',
    name: 'Optical Tilt Sensor',
    badge: '360-degree Detection',
    img: '/blog-pic/KD1918S-5.jpg',
    specs: ['Optical Design', 'SMD Package', '360-degree Coverage', 'RoHS'],
    desc: 'Industry-leading optical tilt detection covering the full 360-degree sphere, ideal for safety shutoffs and anti-tamper devices.',
    color: '#0d9488',
    applications: ['Safety Shutoff', 'Anti-tamper', 'EV Locks', 'Smart Lighting'],
  },
]

const INDUSTRIES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Smart Security & IoT',
    items: ['GPS Trackers', 'Smart Locks', 'Asset Management Tags', 'Anti-theft Alarms'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    title: 'Consumer Electronics',
    items: ['Smart Pens', 'TWS Earbuds', 'Remote Controls', 'Smart Toys'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Automotive Peripherals',
    items: ['TPMS Systems', 'Motorcycle Key Fobs', 'Electric Vehicle Locks', 'Vehicle Security'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: 'Automation & Robotics',
    items: ['Robotic Arms', 'Power Tools', 'Conveyor Monitoring', 'AGV Systems'],
  },
]

const PCBA_FEATURES = [
  {
    step: '01',
    title: 'Co-design Collaboration',
    desc: 'Our engineers engage early in the design phase to optimize your sensor and circuit layout for manufacturability, reducing cost and time-to-market.',
  },
  {
    step: '02',
    title: 'Signal Integrity First',
    desc: 'We prioritize pure and stable signal pathways specifically tailored for the characteristics of analog and digital sensor signals.',
  },
  {
    step: '03',
    title: 'Dedicated Testing (FCT)',
    desc: 'Beyond standard PCB tests, we develop functional test routines that verify real-world performance of integrated sensors in your application.',
  },
  {
    step: '04',
    title: 'One-Stop Delivery',
    desc: 'We manage everything from solution design and component sourcing to production and testing, ensuring single-source accountability.',
  },
]

const PROCESS = [
  { step: '01', title: 'Requirements Review', desc: 'Deep-dive technical consultation to define sensor specs, environment constraints, and volume targets.' },
  { step: '02', title: 'Sensor Solution Design', desc: 'Sensor recommendation, reference circuit design, and MCU integration simulation.' },
  { step: '03', title: 'Schematic & PCB Review', desc: 'DFM analysis, BOM optimization, and design validation before first build.' },
  { step: '04', title: 'Prototype & Validation', desc: 'Fast-turn prototype manufacturing with full functional and environmental testing.' },
  { step: '05', title: 'Mass Production', desc: 'IPC-compliant SMT assembly with SPI, AOI, and X-Ray inspection at every stage.' },
]

const TESTIMONIALS = [
  {
    quote: "Kingdta's vibration sensor solution was a game-changer for our smart security devices. Their precise sensitivity adjustment solved our false alarm issue completely. It is rare to find a partner who understands motion wake-up logic so well.",
    name: 'G.H.',
    role: 'Senior Product Manager',
    img: '/A.6.1.jpg',
    company: 'Smart Security',
  },
  {
    quote: "Their ultra-low-power wake-up sensors extended our asset tracker's standby time by 40%. The hardware solution is exactly what we needed for long-term reliability in battery-powered IoT devices.",
    name: 'L.D.',
    role: 'Lead Hardware Engineer',
    img: '/A.6.2.jpg',
    company: 'IoT Devices',
  },
  {
    quote: "They didn't just sell us a component, they delivered a full integration strategy. The engineering team responded instantly and helped optimize our entire circuit design for the tilt sensors.",
    name: 'J.M.',
    role: 'R&D Director',
    img: '/A.6.3.jpg',
    company: 'Electronics R&D',
  },
]

const BLOGS = [
  {
    title: 'KD1901S: Extending IoT Battery Life with Nano-Ampere Motion Wake-Up',
    tag: 'Product',
    img: '/blog-pic/KD1901S.jpg',
    href: 'https://kingdta.com/kd1901s-extending-iot-battery-life-with-nano-ampere-motion-wake-up/',
  },
  {
    title: 'KD1918S-30: Redefining Safety with 360-degree SMD Optical Tilt Detection',
    tag: 'Product',
    img: '/blog-pic/KD1918S-5.jpg',
    href: 'https://kingdta.com/kd1918s-30-redefining-safety-with-360-smd-optical-tilt-detection/',
  },
  {
    title: 'KD1902: The 2-Million-Cycle Vibration Sensor for Industrial IoT Reliability',
    tag: 'Application',
    img: '/blog-pic/KD1902S.jpg',
    href: 'https://kingdta.com/the-hs1902-a-high-durability-smd-vibration-sensor-for-long-life-iot-applications/',
  },
]

const CERTS = ['ISO 9001', 'RoHS', 'IPC-A-610', 'CE', 'MES Tracking']

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// HELPERS
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold })
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

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// PAGE
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€

export default function KingdtaPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

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
  const servicesRef = useInView(0.1)
  const productsRef = useInView(0.1)
  const industriesRef = useInView(0.1)
  const pcbaRef = useInView(0.1)
  const processRef = useInView(0.1)
  const testimonialsRef = useInView(0.1)
  const blogRef = useInView(0.1)

  const faqs = [
    { q: 'How is your core service different from a standard PCBA factory?', a: 'We provide a true one-stop service, from sensor selection and customized solution design to PCBA manufacturing. You don\'t need to coordinate separate sensor suppliers and board manufacturers. We enable deep integration from the start to optimize product performance and cost.' },
    { q: 'What specific support can you offer during the sensor solution design phase?', a: 'We provide sensor recommendations based on your application, reference circuit design, system-level simulation for sensor-MCU integration, and functional prototyping to ensure a feasible and optimized solution.' },
    { q: 'Can you handle complex boards that integrate multiple sensors?', a: 'Absolutely. Our production lines support 01005 components, 0.25mm fine pitch, and 卤0.03mm placement accuracy, specialized for high-density, sensor-rich PCB assemblies.' },
    { q: 'How do you ensure quality consistency in mass production?', a: 'We implement end-to-end quality control. In addition to standard SMT inspections (SPI/AOI/X-Ray), we perform full functional testing (FCT) on all assembled boards to verify sensor accuracy, communication, and power performance.' },
  ]

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
        @keyframes slideRight {
          from { width: 0; }
          to { width: 100%; }
        }
        .anim-fade-up { animation: fadeUp 0.6s ease both; }
        .anim-fade-in { animation: fadeIn 0.5s ease both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .hero-pattern {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .green-underline {
          position: relative;
          display: inline-block;
        }
        .green-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #16a34a, #4ade80);
          border-radius: 2px;
        }
        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(22, 163, 74, 0.12);
        }
        .process-line::after {
          content: '';
          position: absolute;
          top: 20px;
          right: -50%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #16a34a, #bbf7d0);
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
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className="text-sm font-medium text-green-700">Home</a>            {/* Products dropdown */}
            <div className="relative group">
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
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Contact</a>
            <button onClick={() => { setModalOpen(true); setMenuOpen(false) }} className="w-full mt-2 bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg">Get a Quote</button>
          </div>
        )}
      </header>

      <main className="pt-16">

        {/* 鈹€鈹€ HERO 鈹€鈹€ */}
        <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">
          <div className="absolute inset-0 hero-pattern opacity-60" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent" />
          <div ref={heroRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className={heroRef.inView ? 'anim-fade-up' : 'opacity-0'}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                Sensor Solutions / Expert Design
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Custom Sensor Solutions<br />
                for <span className="text-green-600">Intelligent Hardware</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                Shenzhen Kingdta Technology specializes in passive sensor design, application engineering, and integrated hardware solutions. ISO 9001 certified, serving 999+ clients across 30+ countries.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-green-600/20">
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </button>
                <a href="#products" className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold px-6 py-3 rounded-lg transition-colors bg-white">
                  View Products
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {CERTS.map(c => (
                  <span key={c} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {/* Right: factory photo + floating product card */}
            <div className={`relative ${heroRef.inView ? 'anim-fade-in delay-300' : 'opacity-0'}`}>
              {/* Main factory image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/1.2.jpg" alt="Kingdta SMT Factory" className="w-full h-80 lg:h-96 object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Bottom overlay label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Kingdta Manufacturing</p>
                    <p className="text-green-300 text-xs">SMT Production Floor - Shenzhen</p>
                  </div>
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">ISO 9001</span>
                </div>
              </div>
              {/* Floating product card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-52">
                <p className="text-xs text-gray-400 font-medium mb-1">Featured Product</p>
                <p className="text-gray-900 font-bold text-sm mb-2">KD1902S</p>
                <div className="w-full bg-black rounded-lg mb-2 overflow-hidden">
                  <img src="/blog-pic/KD1902S.jpg" alt="KD1902S" className="w-full h-auto" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">2M Cycle Life</span>
                  <span className="bg-green-50 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">SMD</span>
                </div>
              </div>
              {/* Top-left badge */}
              <div className="absolute -top-4 -left-4 bg-white border border-green-200 text-green-700 text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                999+ Clients Served
              </div>
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ STATS BAR 鈹€鈹€ */}
        <section className="bg-green-700 py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-green-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 鈹€鈹€ SERVICES 鈹€鈹€ */}
        <section id="solutions" className="py-24 bg-gray-50">
          <div ref={servicesRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${servicesRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">What We Do</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sensor Solutions for Every Application</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">We specialize in passive, ultra-low-power sensor design and application engineering, solving your core challenges in wake-up detection, motion control, and position sensing.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s, i) => (
                <div key={s.title} className={`bg-white rounded-2xl p-6 border border-gray-100 card-hover cursor-pointer ${servicesRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  <div className="w-12 h-12 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                    {s.icon}
                  </div>
                  <span className="inline-block text-xs text-green-700 font-semibold bg-green-50 px-2 py-0.5 rounded-full mb-3">{s.tag}</span>
                  <h3 className="text-gray-900 font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <a href={s.href} className="inline-flex items-center gap-1 text-green-600 text-sm font-medium mt-4 hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ PRODUCTS 鈹€鈹€ */}
        <section id="products" className="py-24 bg-white">
          <div ref={productsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${productsRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Core Products</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Precision Sensing Components</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Passive, ultra-low-power mechanical sensors engineered for unparalleled reliability and longevity in always-on applications.</p>
            </div>

            {/* Tab selector */}
            <div className={`flex justify-center gap-2 mb-10 ${productsRef.inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.model}
                  onClick={() => setActiveProduct(i)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${activeProduct === i ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/20' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'}`}
                >
                  {p.model}
                </button>
              ))}
            </div>

            {/* Active product display */}
            {(() => { const prod = PRODUCTS[activeProduct]; if (!prod) return null; return (
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${productsRef.inView ? 'anim-fade-in delay-300' : 'opacity-0'}`}>
              {/* Image 鈥?full natural ratio, no crop */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto bg-black">
                <img
                  src={prod.img}
                  alt={prod.model}
                  className="w-full h-auto transition-all duration-300"
                />
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {prod.badge}
                </span>
              </div>
              {/* Info */}
              <div>
                <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">{prod.model}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{prod.name}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-6">{prod.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {prod.specs.map(s => (
                    <div key={s} className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                      <svg className="w-4 h-4 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                      <span className="text-gray-700 text-sm font-medium">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Typical Applications</p>
                  <div className="flex flex-wrap gap-2">
                    {prod.applications.map(a => (
                      <span key={a} className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full border border-green-100">{a}</span>
                    ))}
                  </div>
                </div>

                <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20">
                  Request Sample
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </button>
              </div>
            </div>
            )})()}
          </div>
        </section>

        {/* 鈹€鈹€ SENSOR VISUAL BANNER 鈹€鈹€ */}
        <section className="relative h-[420px] overflow-hidden">
          <img src="/1.1.6.1-1.jpg" alt="Sensor Technology" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
              <div className="max-w-lg">
                <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Sensor Engineering</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Precision Sensors.<br />Smart Integration.<br />One Partner.
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  From passive SMD vibration sensors to full application circuit design, every component is engineered for dependability in always-on devices.
                </p>
                <a href="#products" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                  Explore Sensors
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ INDUSTRIES 鈹€鈹€ */}
        <section className="py-24 bg-gray-50">
          <div ref={industriesRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${industriesRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Industries Served</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Your application is unique. We bring deep domain knowledge across every industry we serve.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {INDUSTRIES.map((ind, i) => (
                <div key={ind.title} className={`bg-white rounded-2xl p-6 border border-gray-100 card-hover group ${industriesRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  <div className="w-12 h-12 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    {ind.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-3">{ind.title}</h3>
                  <ul className="space-y-2">
                    {ind.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ PCBA SERVICE 鈹€鈹€ */}
        <section id="pcba" className="py-24 bg-white">
          <div ref={pcbaRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${pcbaRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              {/* Left */}
              <div>
                <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Supporting Manufacturing</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sensor-Integrated PCBA</h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  To deliver complete sensor solutions, Kingdta provides integrated PCBA manufacturing, designed specifically around sensor signal integrity, not just generic board assembly. This means tighter co-design, verified sensor performance, and a single partner from design to delivery.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['ISO 9001', 'RoHS', 'IPC-A-610', 'MES Tracking', 'FCT Testing'].map(c => (
                    <span key={c} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" /></svg>
                      {c}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  {PCBA_FEATURES.map((f, i) => (
                    <div key={f.step} className={`flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-green-200 hover:bg-green-50 transition-colors ${pcbaRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                      <div className="shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700 font-bold text-xs">{f.step}</div>
                      <div>
                        <h4 className="text-gray-900 font-semibold text-sm mb-0.5">{f.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: one large factory photo */}
              <div className={`${pcbaRef.inView ? 'anim-fade-in delay-200' : 'opacity-0'}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src="/1.1.jpg" alt="SMT Factory Floor" className="w-full h-auto" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[['8+', 'SMT Lines'], ['卤0.03mm', 'Placement Acc.'], ['ISO 9001', 'Certified']].map(([v, k]) => (
                    <div key={k} className="bg-green-50 rounded-xl p-3 border border-green-100">
                      <p className="text-green-700 font-bold text-sm">{v}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ PROCESS 鈹€鈹€ */}
        <section id="about" className="py-24 bg-green-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 hero-pattern" />
          <div ref={processRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${processRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-200 text-sm font-semibold uppercase tracking-wider mb-3">How It Works</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Sensor Solution Journey</h2>
              <p className="text-green-200 text-lg max-w-2xl mx-auto">From initial application requirements to validated hardware: a clear, 5-step engineering process built around your sensor design needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {PROCESS.map((p, i) => (
                <div key={p.step} className={`relative ${processRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 h-full">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4">{p.step}</div>
                    <h4 className="text-white font-semibold text-sm mb-2">{p.title}</h4>
                    <p className="text-green-200 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-7 -right-3 z-10">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ PARTNERS 鈹€鈹€ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">鍚堜綔浼欎即 &amp; 瀹㈡埛</p>
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

        {/* 鈹€鈹€ TESTIMONIALS 鈹€鈹€ */}
        <section className="py-24 bg-white">
          <div ref={testimonialsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-14 ${testimonialsRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Client Feedback</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Engineers Worldwide</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Real feedback from hardware engineers and product teams who rely on our integrated solutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`bg-gray-50 border border-gray-100 rounded-2xl p-7 card-hover ${testimonialsRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
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
                      <p className="text-gray-400 text-xs">{t.role} - {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ FAQ 鈹€鈹€ */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-900 font-semibold text-sm pr-4">{faq.q}</span>
                    <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${activeFaq === i ? 'bg-green-600 border-green-600 text-white rotate-45' : 'border-gray-300 text-gray-400'}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ BLOG 鈹€鈹€ */}
        <section className="py-24 bg-white">
          <div ref={blogRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 ${blogRef.inView ? 'anim-fade-up' : 'opacity-0'}`}>
              <div>
                <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-3">Latest Articles</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">From Our Blog</h2>
              </div>
              <a href="https://kingdta.com/blog/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:gap-3 transition-all shrink-0">
                View all articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOGS.map((b, i) => (
                <a key={b.title} href={b.href} target="_blank" rel="noreferrer"
                  className={`group block bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover ${blogRef.inView ? `anim-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                  {/* Cover image: preserved aspect ratio */}
                  <div className="relative overflow-hidden bg-black">
                    <img src={b.img} alt={b.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 text-xs text-white font-semibold bg-green-600 px-2.5 py-1 rounded-full">{b.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-gray-900 font-semibold text-sm leading-relaxed mb-3 group-hover:text-green-700 transition-colors">{b.title}</h3>
                    <span className="inline-flex items-center gap-1 text-green-600 text-xs font-medium group-hover:gap-2 transition-all">
                      Read more
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 鈹€鈹€ CTA 鈹€鈹€ */}
        <section className="py-24 relative overflow-hidden">
          <img src="/D.1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Bring Your Device from<br />
              <span className="text-green-400">Concept to Mass Production</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Partner with Kingdta for tailored DFM, sensor-PCBA co-design, global component sourcing, and project-specific quotations. Get a response within 24 hours.
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
            <p className="text-gray-500 text-sm mt-6">+86 18617165334 - Shenzhen, Guangdong, China</p>
          </div>
        </section>

        {/* 鈹€鈹€ FOOTER 鈹€鈹€ */}
        <footer className="bg-gray-950 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="mb-4">
                  <img src="/sitelogo22.png" alt="Kingdta" className="h-8 w-auto" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Shenzhen Kingdta Technology Co., Ltd. - Your Sensor-to-Board Solution Provider.</p>
                <div className="flex gap-3">
                  {CERTS.slice(0, 3).map(c => (
                    <span key={c} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">{c}</span>
                  ))}
                </div>
              </div>
              {/* Links */}
              <div>
                <p className="text-white font-semibold text-sm mb-4">Services</p>
                <ul className="space-y-2">
                  {['Sensor Solutions', 'PCBA Manufacturing', 'Industrial Solutions', 'Automation & Robotics', 'Co-design Services'].map(l => (
                    <li key={l}><a href="#solutions" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l}</a></li>
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
              {/* Contact */}
              <div>
                <p className="text-white font-semibold text-sm mb-4">Contact Us</p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    sales@kingdta.com
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
                    +86 18617165334 (Sales)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
                    +86 18926528143 (Engineer)
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

      {/* 鈹€鈹€ CONTACT MODAL 鈹€鈹€ */}
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

