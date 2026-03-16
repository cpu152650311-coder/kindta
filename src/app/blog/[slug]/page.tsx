'use client'

import { use, useEffect, useRef, useState } from 'react'
import { notFound } from 'next/navigation'

const PRODUCT_NAV = [
  { model: 'KD1902S', type: 'Vibration', id: 'kd1902s' },
  { model: 'KD1908S', type: 'Tilt Angle', id: 'kd1908s' },
  { model: 'KD1918S', type: 'Optical Tilt', id: 'kd1918s' },
  { model: 'KD1912',  type: 'Long Life', id: 'kd1912' },
  { model: 'KD1901S', type: 'Low Power', id: 'kd1901s' },
]

// ─────────────────────────────────────────────
// BLOG DATA
// ─────────────────────────────────────────────

const BLOG_POSTS: Record<string, {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  category: string
  coverImg: string
  productLink?: string
  sections: Array<{ type: string; content?: string; src?: string; alt?: string; caption?: string; headers?: string[]; rows?: string[][] }>
}> = {
  'kd1902s': {
    slug: 'kd1902s',
    title: 'KD1902S: The 2-Million-Cycle Vibration Sensor for Industrial IoT Reliability',
    subtitle: 'In the lifecycle of a deployed IoT device, the sensor is often the mechanical weak point. The KD1902S is engineered to change that.',
    date: 'Dec 15, 2025',
    readTime: '7 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/KD1902S.jpg',
    productLink: '/products#kd1902s',
    sections: [
      { type: 'paragraph', content: 'In the lifecycle of a deployed IoT device, the sensor is often the mechanical weak point. For applications like Tire Pressure Monitoring Systems (TPMS) or logistics trackers, a sensor must withstand years of constant movement without failure. Introducing the KD1902S, an upgraded Omnidirectional SMT Vibration Trigger Sensor engineered for extreme durability, boasting a service life of over 2,000,000 cycles.' },
      { type: 'h2', content: '1. Engineered for Endurance' },
      { type: 'paragraph', content: 'While standard vibration switches may fail after prolonged exposure to rough environments, the KD1902S utilizes a specialized vacuum core-shell process and premium electroplating. This allows it to endure solder heat up to 400°C short-term, temperature extremes from -40°C to +85°C, and vibration life exceeding 2,000,000 triggers. This level of durability makes it the preferred choice for Automotive Electronics and Industrial Asset Tracking.' },
      { type: 'image', src: '/blog-pic/KD1902S-1.jpg', alt: 'KD1902S sensor close-up', caption: 'KD1902S in SMD package — compact and durable' },
      { type: 'h2', content: '2. 360° Omnidirectional Triggering' },
      { type: 'paragraph', content: 'The KD1902S replaces legacy mercury switches and bulky spring sensors with a miniature ball-contact structure. It features no "blind spots." It is most sensitive along the four major axes (0°, 90°, 180°, 270°) but triggers effectively from any random vibration angle. A free-moving internal sphere bridges the electrode gap upon movement.' },
      { type: 'image', src: '/blog-pic/KD1902S-2.jpg', alt: 'KD1902S internal structure', caption: 'Internal ball-contact mechanism enables 360° detection' },
      { type: 'h2', content: '3. Passive "Zero-Power" Architecture' },
      { type: 'paragraph', content: 'The KD1902S is a passive component — it requires no active power supply to monitor motion. Voltage range supports versatile 0.5V to 36V DC. Operating current is determined by your pull-up resistor (typically micro-amps or nano-amps). Standby current is effectively 0A (High Impedance). This makes it the ultimate solution for battery-powered devices that need to sit on a shelf for years and wake up instantly when moved.' },
      { type: 'h2', content: '4. Technical Specifications' },
      { type: 'table', headers: ['Parameter', 'Specification', 'Note'], rows: [
        ['Operating Voltage', '0.5V – 36V DC', 'Wide compatibility'],
        ['Trigger Direction', '360° Omnidirectional', 'No dead zones'],
        ['Life Cycles', '≥ 2,000,000', 'Industrial grade'],
        ['Operating Temperature', '-40°C to +85°C', 'Harsh environment ready'],
        ['Package', 'SMD (Surface Mount)', 'Automated assembly compatible'],
        ['Sealing', 'Hermetically Sealed', 'Waterproof & dustproof'],
      ]},
      { type: 'image', src: '/blog-pic/KD1902S-3.jpg', alt: 'KD1902S PCB integration', caption: 'KD1902S integrates seamlessly into standard PCB assemblies' },
      { type: 'h2', content: '5. Key Applications' },
      { type: 'paragraph', content: 'Due to its extended 2-million-cycle lifespan, the KD1902S is ideal for wearables (step counting or tap detection), RFID Smart Tags (logistics tracking), Smart Remote Controls (backlight activation upon pickup), and TPMS (Tire Pressure Monitoring — activating sensors only when wheels rotate).' },
      { type: 'image', src: '/blog-pic/KD1902S-4.jpg', alt: 'KD1902S application examples', caption: 'From asset trackers to TPMS — KD1902S powers them all' },
    ]
  },
  'kd1908s': {
    slug: 'kd1908s',
    title: 'Mastering Motion: The KD1908S SMD Angle Sensor for Precise Tilt Detection',
    subtitle: 'In the world of smart electronics, knowing the position of a device is just as important as knowing its location.',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/HS1908.jpg',
    productLink: '/products#kd1908s',
    sections: [
      { type: 'paragraph', content: 'In the world of smart electronics, knowing the position of a device is just as important as knowing its location. Whether it is a space heater that must shut off if it tips over, or a smartwatch that wakes up when you lift your wrist, tilt detection is a critical safety and usability feature. Meet the KD1908S, a high-precision SMD Angle Sensor designed to detect tilt in any direction.' },
      { type: 'h2', content: 'What is the KD1908S?' },
      { type: 'paragraph', content: 'The KD1908S is a surface-mount (SMD) tilt switch. Inside its miniature package lies a precision metal ball structure, sealed via vacuum technology within high-grade polymer materials. Unlike vibration sensors that detect momentary shocks, the KD1908S is designed to detect state changes in orientation. When the device tilts beyond a specific threshold, the internal mechanism bridges the contact, closing the circuit to trigger a signal. When horizontal, it remains in a "Normally Open" (OFF) state.' },
      { type: 'image', src: '/blog-pic/HS1908.jpg', alt: 'KD1908S tilt sensor', caption: 'KD1908S — precision tilt detection in a compact SMD package' },
      { type: 'h2', content: '1. Customizable Tilt Angles' },
      { type: 'paragraph', content: 'One size does not fit all. A smart iron might need a shallow tilt angle to detect use, while a space heater needs a steep angle to detect a fall. The KD1908S series can be customized to trigger at specific angles: 15°, 30°, 45°, 60°, or 75°. This flexibility allows engineers to tailor the sensor exactly to the application\'s safety requirements.' },
      { type: 'h2', content: '2. 360° Omnidirectional Detection' },
      { type: 'paragraph', content: 'The KD1908S provides consistent performance regardless of the direction of the fall or tilt. Whether the device tips forward, backward, or sideways, the sensor will accurately trigger the circuit.' },
      { type: 'h2', content: '3. Technical Specifications' },
      { type: 'table', headers: ['Feature', 'Specification'], rows: [
        ['Model', 'KD1908S'],
        ['Type', 'SMD Omnidirectional Angle/Tilt Sensor'],
        ['Logic State', 'Normally Open (OFF) when horizontal'],
        ['Trigger Angles', 'Customizable (+15°, 30°, 45°, 60°, 75°)'],
        ['Operating Voltage', '1V – 6V DC'],
        ['Rated Current', '2µA – 10mA'],
        ['Operating Temp', '-40°C ~ 85°C'],
        ['Lifespan', '2,000,000 Cycles'],
        ['Dimensions', '3.45 x 3.20 x 2.80 mm'],
      ]},
      { type: 'h2', content: '4. Essential Applications' },
      { type: 'paragraph', content: 'The KD1908S is versatile, finding its home in safety systems, home automation, and medical devices: Anti-tamper mechanisms in smart meters and intelligent manhole covers; Smart Home appliances (toilet lids, sweeping robots, smart ironing systems); Medical & Elderly Care (fall detection in intelligent crutches, smart monitoring beds); Smart Wearables ("Lift-to-wake" functionality); and Home Safety (electric fans, humidifiers, air purifiers — instant power cutoff when tipped).' },
    ]
  },
  'kd1918s': {
    slug: 'kd1918s',
    title: 'KD1918S-30: Redefining Safety with 360° SMD Optical Tilt Detection',
    subtitle: 'A revolutionary SMD Photoelectric Tilt Switch offering high-precision, 360° omnidirectional detection in a compact surface-mount package.',
    date: 'Dec 12, 2025',
    readTime: '9 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/KD1918S.jpg',
    productLink: '/products#kd1918s',
    sections: [
      { type: 'paragraph', content: 'In the rapidly evolving world of smart home appliances and portable electronics, safety is not just a feature—it is a requirement. Whether it is an electric heater falling over or a service robot navigating a slope, detecting device orientation instantly is critical. The KD1918S-30 offers high-precision, 360° omnidirectional detection in a compact surface-mount package.' },
      { type: 'image', src: '/blog-pic/KD1918S.jpg', alt: 'KD1918S optical tilt sensor', caption: 'KD1918S — optical precision in a miniature SMD package' },
      { type: 'h2', content: '1. How It Works: Optical Precision vs. Mechanical Chaos' },
      { type: 'paragraph', content: 'The core innovation of the KD1918S-30 lies in its internal structure. Traditional tilt switches often rely on physical contacts that can oxidize or suffer from contact bounce. The KD1918S uses a photoelectric ball mechanism. When upright, the internal conductive ball aligns with the optical path and the phototransistor conducts, sending a High Level signal. When tilted beyond the threshold (30°±10°), the ball rolls away, blocking the light path, and the output instantly switches to Low Level. This "Non-Contact" design ensures an electrical lifespan of over 1,000,000 cycles.' },
      { type: 'image', src: '/blog-pic/KD1918S-1.jpg', alt: 'KD1918S internal mechanism', caption: 'The photoelectric mechanism ensures no contact wear' },
      { type: 'h2', content: '2. Technical Specifications' },
      { type: 'table', headers: ['Parameter', 'Value', 'Note'], rows: [
        ['Supply Voltage (Vcc)', '4.5V – 5.5V', 'Standard 5V logic'],
        ['Operating Current', '6 – 10mA', 'Low power consumption'],
        ['Response Time', '5ms – 100ms', 'Rapid detection'],
        ['Output Type', 'Digital', 'Open-Collector (requires pull-up)'],
        ['Stable Trigger Zone', '> ±40°', 'Low output (trigger zone)'],
        ['Safe Zone', '0° to ±20°', 'High output (stable)'],
        ['Temperature Range', '-40°C to +85°C', 'Harsh environment ready'],
      ]},
      { type: 'image', src: '/blog-pic/KD1918S-2.jpg', alt: 'KD1918S angle zones', caption: 'Trigger zones ensure precise, bounce-free detection' },
      { type: 'h2', content: '3. Designed for Manufacturing: SMD & Soldering' },
      { type: 'paragraph', content: 'The KD1918S-30 features SMD form factor, saving valuable PCB space. Soldering guidelines: Manual soldering at max 330°C for <3 seconds. Reflow soldering at peak 255°C ±10°C (max exposure <5 seconds). Do not reflow more than twice.' },
      { type: 'image', src: '/blog-pic/KD1918S-3.jpg', alt: 'KD1918S PCB mounting', caption: 'Easy SMD integration for automated assembly lines' },
      { type: 'h2', content: '4. Applications' },
      { type: 'paragraph', content: 'Charging Piles (detecting if a charging post has been impacted or tilted); Robotics (educational and service robots detecting falls or steep inclines); Smart Home (air purifiers and interactive smart products); Safety Protection (auto-shutoff for electric heaters, fans, and humidifiers).' },
      { type: 'image', src: '/blog-pic/KD1918S-4.jpg', alt: 'KD1918S application', caption: 'Safety-critical applications trust the KD1918S' },
      { type: 'image', src: '/blog-pic/KD1918S-5.jpg', alt: 'KD1918S finished product', caption: 'KD1918S integrated in a completed smart safety device' },
    ]
  },
  'kd1912': {
    slug: 'kd1912',
    title: 'KD1912: Setting the 5-Million-Cycle Benchmark for Vibration Sensors',
    subtitle: 'For industrial asset trackers, automotive safety systems, or smart meters installed for a decade, you need components that refuse to quit.',
    date: 'Nov 28, 2025',
    readTime: '8 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/KD1912S.jpg',
    productLink: '/products#kd1912',
    sections: [
      { type: 'paragraph', content: 'In the realm of electromechanical components, mechanical fatigue is the enemy. For standard consumer electronics, a sensor that lasts a few years is sufficient. But for industrial asset trackers, automotive safety systems, or smart meters installed for a decade, you need components that refuse to quit. The KD1912 is the flagship of endurance in the SMT vibration sensor lineup, with a massive rated lifespan of ≥ 5,000,000 cycles.' },
      { type: 'h2', content: '1. Unmatched Durability: 5 Million Triggers' },
      { type: 'paragraph', content: 'The defining feature of the KD1912 is its longevity. While standard market alternatives often fail around 100k to 500k cycles, the KD1912 utilizes advanced materials and a vacuum-sealed core-shell structure to achieve 5 million reliable triggers. This makes it perfect for high-frequency environments: Machinery Condition Monitoring (detecting continuous vibrations in industrial equipment), Smart Logistics (tracking packages that undergo constant handling), and Automotive (systems exposed to perpetual road vibration).' },
      { type: 'image', src: '/blog-pic/KD1912S.jpg', alt: 'KD1912 sensor', caption: 'KD1912 — engineered for 5 million cycles of reliable triggering' },
      { type: 'h2', content: '2. Omnidirectional "Wake-Up" Technology' },
      { type: 'paragraph', content: 'Like its predecessors, the KD1912 solves the power consumption paradox in IoT: How do you keep a device ready without draining the battery? The solution: the sensor acts as a passive hardware switch. Static: Ideally 0 power consumption (High Impedance). Motion: When moved in any direction (360° coverage), the internal ball closes the circuit, sending a pulse to wake the MCU.' },
      { type: 'h2', content: '3. Electrical & Environmental Specs' },
      { type: 'table', headers: ['Feature', 'Specification', 'Note'], rows: [
        ['Operating Voltage', '0.5V – 36V DC', 'Wide compatibility'],
        ['Current Rating', '50nA – 10mA', 'Ultra-low power'],
        ['Temperature', '-40°C to +85°C', 'Harsh environment ready'],
        ['Life Cycles', '≥ 5,000,000', 'Industrial benchmark'],
        ['Sealing', 'Hermetically Sealed', 'Waterproof & dustproof'],
        ['Package', 'SMD', 'Automated assembly compatible'],
      ]},
      { type: 'image', src: '/blog-pic/KD1912S-1.jpg', alt: 'KD1912 packaging', caption: 'Standard SMD packaging for automated PCB assembly' },
      { type: 'h2', content: '4. Application Circuit Design' },
      { type: 'paragraph', content: 'To get the most out of the KD1912, correct circuit implementation is key. The output is a series of rapid pulses rather than a steady state change. Connect the sensor between Ground and an MCU Pin pulled High. For debouncing: use the recommended RC filter (Capacitor C1 + Resistor R2) to smooth transients (hardware approach), or implement a counter in firmware — only wake the full system if N pulses are detected within T milliseconds (software approach).' },
      { type: 'image', src: '/blog-pic/KD1912S-2.jpg', alt: 'KD1912 circuit design', caption: 'Recommended circuit with RC debounce filter' },
      { type: 'h2', content: '5. Where to Use the KD1912?' },
      { type: 'paragraph', content: 'The premium endurance of this sensor qualifies it for: Smart Metering (tamper detection for utility meters expected to last 10+ years), Animal Tracking (smart collars for livestock that move constantly), Bicycle/E-Bike Alarms (detecting movement for anti-theft systems), and Remote Controls (power-saving wake-up features).' },
      { type: 'image', src: '/blog-pic/KD1912S-3.jpg', alt: 'KD1912 applications', caption: 'KD1912 deployed in diverse industrial applications' },
    ]
  },
  'kd1901s': {
    slug: 'kd1901s',
    title: 'KD1901S: Extending IoT Battery Life with Nano-Ampere Motion Wake-Up',
    subtitle: 'In the world of battery-powered IoT devices, power management is everything. The KD1901S proves that big innovation comes in small packages.',
    date: 'Dec 20, 2025',
    readTime: '7 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/KD1901S.jpg',
    productLink: '/products#kd1901s',
    sections: [
      { type: 'paragraph', content: 'In the world of battery-powered IoT devices — from smart styluses to anti-theft trackers — power management is everything. The most energy-efficient device is one that sleeps until it is absolutely needed. Enter the KD1901S, a miniature SMD omnidirectional vibration sensor designed specifically for "Motion Wake-Up" functions. Unlike active accelerometers that drain battery continuously, the KD1901S is a passive component that consumes effectively zero power until movement occurs.' },
      { type: 'image', src: '/blog-pic/KD1901S.jpg', alt: 'KD1901S ultra-low power sensor', caption: 'KD1901S — nano-ampere standby, instant motion response' },
      { type: 'h2', content: '1. The "Zero-Power" Advantage' },
      { type: 'paragraph', content: 'The standout feature of the KD1901S is its efficiency. It operates as a mechanical switch triggered by inertia. Current draw: as low as 50nA (depending on your external resistor). Active state: when vibration occurs, the internal ball bridges the contacts. Static state: High Impedance (Open Circuit). For engineers designing wearables or remote controls, this means your device can remain in deep sleep for months or years, waking up only when the user picks it up.' },
      { type: 'image', src: '/blog-pic/KD1901S-1.jpg', alt: 'KD1901S circuit', caption: 'Passive architecture eliminates standby power drain' },
      { type: 'h2', content: '2. Omnidirectional Detection Technology' },
      { type: 'paragraph', content: 'Mechanical switches often suffer from "dead zones" — angles where vibration isn\'t detected. The KD1901S solves this with a precision-engineered internal cavity. The free-moving metallic ball moves 360°, generating a reliable pulse train regardless of axis. Rated for over 1,000,000 cycles, optimized sensitivity on 4 major axes.' },
      { type: 'image', src: '/blog-pic/KD1901S-2.jpg', alt: 'KD1901S detection', caption: '360° omnidirectional detection — no blind spots' },
      { type: 'h2', content: '3. Technical Specifications' },
      { type: 'table', headers: ['Feature', 'Specification'], rows: [
        ['Operating Voltage', '1.8V – 3.6V'],
        ['Standby Current', '< 100nA (nano-ampere)'],
        ['Life Cycles', '≥ 1,000,000'],
        ['Package', 'SMD 2.0×1.6mm (ultra-compact)'],
        ['Operating Temp', '-40°C to +85°C'],
        ['Compliance', 'RoHS'],
        ['Soldering Peak', '260°C (≤5 seconds)'],
      ]},
      { type: 'image', src: '/blog-pic/KD1901S-3.jpg', alt: 'KD1901S integration', caption: 'Ultra-compact footprint enables integration into the smallest devices' },
      { type: 'h2', content: '4. Ideal Applications' },
      { type: 'paragraph', content: 'This sensor is the perfect replacement for traditional spring switches or expensive accelerometers in: Smart Home (vibration sensors for window break detection), RFID Tags (transmit signal only during transport to save battery), TPMS (activate sensors only when the car moves), Smart Pens (wake up Bluetooth connection only when writing begins).' },
      { type: 'image', src: '/blog-pic/KD1901S-4.jpg', alt: 'KD1901S applications', caption: 'From smart pens to IoT tags — KD1901S enables them all' },
    ]
  },
  'smart-lighting': {
    slug: 'smart-lighting',
    title: 'Case Study: Creating Interactive Magic with Vibration Sensors in Smart Lighting',
    subtitle: 'How a simple "Shake-to-Change" RGB light bulb reveals the power of vibration sensors in consumer electronics.',
    date: 'Nov 15, 2025',
    readTime: '5 min read',
    category: 'Case Study',
    coverImg: '/blog-pic/Blog.png',
    sections: [
      { type: 'paragraph', content: 'In the world of consumer electronics, user interaction is key. Gone are the days of static, boring products. Today, users expect devices that respond to touch, movement, and play. At Kingdta, we often get asked how to implement simple yet effective motion detection in compact devices. Today, we examine a "Shake-to-Change" RGB light bulb and see how a simple Vibration Sensor makes this interactive experience possible.' },
      { type: 'image', src: '/blog-pic/Blog.png', alt: 'Smart lighting bulb', caption: 'A stylish RGB bulb that changes color on shake — powered by a Kingdta vibration sensor' },
      { type: 'h2', content: 'The Application: Motion-Activated Color Changing' },
      { type: 'paragraph', content: 'On the outside, this appears to be a stylish, novelty light bulb featuring glowing text. But the real magic happens when you hold it. With a gentle shake, the LED filaments change color — switching from orange to green, blue, or a breathing mode. This interactive feature transforms a simple gift into an engaging gadget.' },
      { type: 'image', src: '/blog-pic/Blog2.png', alt: 'Smart bulb PCB teardown', caption: 'PCB teardown — the vibration sensor is the star component' },
      { type: 'h2', content: 'Under the Hood: The Role of the Vibration Sensor' },
      { type: 'paragraph', content: 'The driver board (PCB) contains: the Vibration Sensor (the star of the show), the MCU that manages logic, a Tactile Switch for power On/Off, and a Type-C Port for fast charging. When the user shakes the bulb, a small internal mechanism inside the sensor moves due to inertia, momentarily bridging contact points and sending a digital pulse to the MCU. The MCU then cycles to the next RGB color pattern.' },
      { type: 'image', src: '/blog-pic/Blog21.png', alt: 'Vibration sensor on PCB', caption: 'The vibration sensor (highlighted) occupies minimal PCB space' },
      { type: 'h2', content: 'Why Choose Vibration Sensors for Interactive Electronics?' },
      { type: 'paragraph', content: 'For product designers developing toys, promotional gifts, or smart home gadgets, vibration sensors offer distinct advantages: High Sensitivity (tunable for subtle or strong shakes), Compact Size (minimal PCB footprint), Low Power Consumption (crucial for battery-operated devices), and Cost-Effectiveness (significantly cheaper than 6-axis gyroscopes).' },
    ]
  },
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function BlogPostPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  // Interactive demo states
  const [shakeActive, setShakeActive] = useState(false)
  const [shakeCount, setShakeCount] = useState(0)
  const [tiltAngle, setTiltAngle] = useState(0)
  const [holdActive, setHoldActive] = useState(false)
  const [pulseCount, setPulseCount] = useState(0)
  const [scopeActive, setScopeActive] = useState(false)
  const holdTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const shakeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scopeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // KD1912 hold-to-vibrate logic
  const startHold = () => {
    setHoldActive(true)
    holdTimerRef.current = setInterval(() => {
      setPulseCount(p => Math.min(p + 1, 10))
    }, 300)
  }
  const stopHold = () => {
    setHoldActive(false)
    if (holdTimerRef.current) clearInterval(holdTimerRef.current)
    setTimeout(() => setPulseCount(0), 1500)
  }

  // KD1902S shake logic
  const doShake = () => {
    setShakeActive(true)
    setShakeCount(c => c + 1)
    if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current)
    shakeTimerRef.current = setTimeout(() => setShakeActive(false), 1200)
  }

  // KD1901S oscilloscope logic
  const doScope = () => {
    setScopeActive(true)
    if (scopeTimerRef.current) clearTimeout(scopeTimerRef.current)
    scopeTimerRef.current = setTimeout(() => setScopeActive(false), 2000)
  }

  const post = BLOG_POSTS[params.slug]
  if (!post) { notFound(); return null }

  const allSlugs = Object.keys(BLOG_POSTS)
  const currentIdx = allSlugs.indexOf(params.slug)
  const prevSlug = currentIdx > 0 ? allSlugs[currentIdx - 1] : null
  const nextSlug = currentIdx < allSlugs.length - 1 ? allSlugs[currentIdx + 1] : null

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .anim { animation: fadeUp 0.6s ease both; }
        .hero-pattern { background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px); background-size: 32px 32px; }
        .prose h2 { font-size: 1.35rem; font-weight: 700; color: #111827; margin: 2rem 0 0.75rem; }
        .prose p { color: #6b7280; line-height: 1.8; margin-bottom: 1rem; font-size: 0.97rem; }
        .prose table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; border-radius: 12px; overflow: hidden; }
        .prose th { background: #f9fafb; text-align: left; padding: 10px 16px; font-size: 0.75rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #f3f4f6; }
        .prose td { padding: 10px 16px; font-size: 0.875rem; color: #374151; border-bottom: 1px solid #f9fafb; }
        .prose tr:last-child td { border-bottom: none; }
        .prose tr:hover td { background: #f9fafb; }
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

      <main className="pt-16 bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gray-950 py-20">
          <img src={post.coverImg} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 anim">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <a href="/" className="hover:text-green-400 transition-colors">Home</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <a href="/blog" className="hover:text-green-400 transition-colors">Blog</a>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <span className="text-gray-300">{post.title.slice(0, 40)}...</span>
            </div>
            <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-5">{post.category}</span>
            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">{post.subtitle}</p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                {post.readTime}
              </span>
              {post.productLink && (
                <a href={post.productLink} className="flex items-center gap-1.5 bg-green-600/20 hover:bg-green-600/40 text-green-400 px-3 py-1 rounded-full transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                  View Product
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

              {/* Main content */}
              <article className="lg:col-span-3 prose">
                {post.sections.map((sec, i) => {
                  if (sec.type === 'h2') return <h2 key={i}>{sec.content}</h2>
                  if (sec.type === 'paragraph') return <p key={i}>{sec.content}</p>
                  if (sec.type === 'image') return (
                    <figure key={i} className="my-8">
                      <div className="rounded-2xl overflow-hidden bg-black">
                        <img src={sec.src} alt={sec.alt} className="w-full h-auto" />
                      </div>
                      {sec.caption && <figcaption className="text-center text-gray-400 text-xs mt-3 italic">{sec.caption}</figcaption>}
                    </figure>
                  )
                  if (sec.type === 'table') return (
                    <div key={i} className="my-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <table>
                        <thead>
                          <tr>{sec.headers?.map(h => <th key={h}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                          {sec.rows?.map((row, ri) => (
                            <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                  return null
                })}

                {/* Interactive Demo Section */}
                {params.slug === 'kd1902s' && (
                  <div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
                    <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Interactive Demo</p>
                    <h3 className="text-white font-bold text-lg mb-4">360° Detection Logic Simulator</h3>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="relative w-32 h-32 shrink-0">
                        <div className={`absolute inset-0 rounded-full border-2 ${shakeActive ? 'border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.6)]' : 'border-gray-600'} transition-all duration-300`} />
                        <div className={`absolute inset-3 rounded-full border ${shakeActive ? 'border-green-500' : 'border-gray-700'} transition-all duration-300`} />
                        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-100 ${shakeActive ? 'animate-bounce' : ''}`}>
                          <div className={`w-4 h-4 rounded-full ${shakeActive ? 'bg-green-400' : 'bg-gray-500'} transition-colors`} />
                        </div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">KD1902S</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="bg-gray-900 rounded-xl p-3 font-mono text-xs space-y-1.5">
                          <div className="flex justify-between"><span className="text-gray-500">Movement Axis:</span><span className={shakeActive ? 'text-green-400' : 'text-gray-400'}>{shakeActive ? 'XY ±360°' : 'Static'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Pulse Output:</span><span className={shakeActive ? 'text-yellow-400' : 'text-gray-400'}>{shakeActive ? 'LOW (Bridged)' : 'HIGH (Open)'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Trigger Count:</span><span className="text-blue-400">{shakeCount}</span></div>
                        </div>
                        <div className={`text-center text-xs font-bold py-2 rounded-xl ${shakeActive ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-500'} transition-colors`}>
                          {shakeActive ? '⚡ WAKE-UP TRIGGERED' : '💤 SYSTEM SLEEPING'}
                        </div>
                        <button onClick={doShake} className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                          Random Shake
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {params.slug === 'kd1901s' && (
                  <div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
                    <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Interactive Lab</p>
                    <h3 className="text-white font-bold text-lg mb-4">Virtual Oscilloscope — KD1901S</h3>
                    <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono">
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Signal Monitor: KD1901S</span><span>VCC: 3.3V · 10ms/div</span>
                      </div>
                      <div className="h-16 flex items-end gap-0.5 border-b border-gray-700">
                        {Array.from({ length: 40 }).map((_, i) => {
                          const pulse = scopeActive && (i % 4 === 0 || i % 4 === 1)
                          return <div key={i} className={`flex-1 transition-all duration-75 ${pulse ? 'bg-green-400 h-full' : 'bg-gray-700 h-1'}`} style={{ transitionDelay: `${i * 20}ms` }} />
                        })}
                      </div>
                      <div className={`mt-2 text-center text-xs font-bold ${scopeActive ? 'text-green-400' : 'text-gray-600'}`}>
                        {scopeActive ? '⚡ WAKE-UP SIGNAL DETECTED' : '— NO SIGNAL —'}
                      </div>
                    </div>
                    <button onClick={doScope} className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                      Simulate Vibration
                    </button>
                  </div>
                )}

                {params.slug === 'kd1912' && (
                  <div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
                    <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Interactive Simulation</p>
                    <h3 className="text-white font-bold text-lg mb-4">MCU Wake-Up Filter Logic — KD1912</h3>
                    <div className="bg-gray-900 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-gray-400">Pulse Counter (Filter Accumulator)</span>
                        <span className="text-xs text-gray-500">5M Cycles Rated</span>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div key={i} className={`flex-1 h-6 rounded transition-colors duration-150 ${i < pulseCount ? (pulseCount >= 5 ? 'bg-green-500' : 'bg-yellow-500') : 'bg-gray-700'}`} />
                        ))}
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-gray-500">Raw Pulses: <span className="text-white">{pulseCount}</span></span>
                        <span className="text-gray-500">Wake Threshold: <span className="text-yellow-400">5</span></span>
                      </div>
                      <div className={`mt-3 text-center text-xs font-bold py-2 rounded-xl ${pulseCount >= 5 ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-500'} transition-colors`}>
                        {pulseCount >= 5 ? '⚡ SYSTEM AWAKE' : '💤 SYSTEM SLEEPING'}
                      </div>
                    </div>
                    <button
                      onMouseDown={startHold} onMouseUp={stopHold} onMouseLeave={stopHold}
                      onTouchStart={startHold} onTouchEnd={stopHold}
                      className={`w-full font-semibold py-2.5 rounded-xl text-sm transition-colors select-none ${holdActive ? 'bg-yellow-500 text-gray-900' : 'bg-green-600 hover:bg-green-500 text-white'}`}>
                      {holdActive ? 'Vibrating...' : 'Hold to Vibrate'}
                    </button>
                  </div>
                )}

                {params.slug === 'kd1918s' && (
                  <div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
                    <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Interactive Demo</p>
                    <h3 className="text-white font-bold text-lg mb-4">KD1918S Tilt Angle Simulator</h3>
                    <div className="bg-gray-900 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-center mb-4" style={{ height: 80 }}>
                        <div className="relative w-16 h-16 flex items-center justify-center" style={{ transform: `rotate(${tiltAngle}deg)`, transition: 'transform 0.1s ease' }}>
                          <div className={`w-16 h-16 rounded-full border-4 ${Math.abs(tiltAngle) > 30 ? 'border-red-500' : 'border-green-400'} flex items-center justify-center transition-colors`}>
                            <div className={`w-5 h-5 rounded-full ${Math.abs(tiltAngle) > 30 ? 'bg-red-500' : 'bg-green-400'} transition-colors`} />
                          </div>
                        </div>
                      </div>
                      <input type="range" min={-90} max={90} value={tiltAngle} onChange={e => setTiltAngle(Number(e.target.value))}
                        className="w-full accent-green-500 mb-3" />
                      <div className="flex justify-between text-xs text-gray-500 mb-3">
                        <span>-90° (Left)</span><span>0° (Upright)</span><span>+90° (Right)</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                        <div className="bg-gray-800 rounded-lg p-2 text-center"><div className="text-gray-500 mb-1">Tilt Angle</div><div className="text-white font-bold">{tiltAngle}°</div></div>
                        <div className="bg-gray-800 rounded-lg p-2 text-center"><div className="text-gray-500 mb-1">Output</div><div className={`font-bold ${Math.abs(tiltAngle) > 30 ? 'text-red-400' : 'text-green-400'}`}>{Math.abs(tiltAngle) > 30 ? 'LOW' : 'HIGH'}</div></div>
                        <div className="bg-gray-800 rounded-lg p-2 text-center"><div className="text-gray-500 mb-1">Status</div><div className={`font-bold ${Math.abs(tiltAngle) > 30 ? 'text-red-400' : 'text-green-400'}`}>{Math.abs(tiltAngle) > 30 ? 'TRIGGER' : 'NORMAL'}</div></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 text-center">Trigger threshold: ±30°</p>
                    </div>
                  </div>
                )}

                {/* CTA in article */}
                <div className="mt-10 bg-green-50 border border-green-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-900 font-bold text-base mb-1">Interested in integrating this sensor?</p>
                    <p className="text-gray-500 text-sm">Request a free sample and get technical support from our engineering team.</p>
                  </div>
                  <button onClick={() => setModalOpen(true)} className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                    Request Sample
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                  </button>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-20 space-y-5">
                  {/* All posts */}
                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">More Articles</p>
                    <div className="space-y-1">
                      {Object.values(BLOG_POSTS).map(p => (
                        <a key={p.slug} href={`/blog/${p.slug}`}
                          className={`block px-3 py-2 rounded-xl text-sm transition-colors ${p.slug === post.slug ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-700'}`}>
                          {p.title.split(':')[0]}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-green-600 rounded-2xl p-5 text-white">
                    <p className="font-bold text-sm mb-2">Need a Sample?</p>
                    <p className="text-green-100 text-xs mb-4 leading-relaxed">Contact our engineering team for technical support and free evaluation samples.</p>
                    <button onClick={() => setModalOpen(true)} className="block w-full bg-white text-green-700 font-semibold text-xs py-2.5 rounded-xl text-center hover:bg-green-50 transition-colors">
                      Get in Touch
                    </button>
                  </div>
                </div>
              </aside>
            </div>

            {/* Prev / Next */}
            <div className="border-t border-gray-100 mt-12 pt-8 grid grid-cols-2 gap-6">
              {prevSlug ? (
                <a href={`/blog/${prevSlug}`} className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 mt-0.5 shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Previous</p>
                    <p className="text-gray-700 font-semibold text-sm group-hover:text-green-700 transition-colors line-clamp-2">{BLOG_POSTS[prevSlug!]?.title}</p>
                  </div>
                </a>
              ) : <div />}
              {nextSlug ? (
                <a href={`/blog/${nextSlug}`} className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors text-right">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Next</p>
                    <p className="text-gray-700 font-semibold text-sm group-hover:text-green-700 transition-colors line-clamp-2">{BLOG_POSTS[nextSlug!]?.title}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 mt-0.5 shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </a>
              ) : <div />}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-950 pt-12 pb-8 mt-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <img src="/sitelogo22.png" alt="Kingdta" className="h-8 w-auto" />
              <div className="flex gap-6 text-sm text-gray-400">
                {[['/', 'Home'], ['/products', 'Products'], ['/solutions', 'Solutions'], ['/blog', 'Blog'], ['/about', 'About'], ['/contact', 'Contact']].map(([h, l]) => (
                  <a key={l} href={h} className="hover:text-green-400 transition-colors">{l}</a>
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
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
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
