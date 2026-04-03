'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

const ContactModal = dynamic(() => import('@/components/contact/contact-modal'), {
  ssr: false,
})

const BlogPostInteractiveDemo = dynamic(
  () => import('@/components/blog/blog-post-interactive-demo'),
  {
    ssr: false,
    loading: () => (
      <div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
        <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Interactive Demo</p>
        <div className="h-28 rounded-xl bg-gray-900 animate-pulse" />
      </div>
    ),
  }
)

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
  pdfLink?: string
  cta1?: { text: string; linkText: string; href: string }
  cta2?: { text: string; linkText: string; href: string }
  sections: Array<{
    type: string
    content?: string
    /** 内联链接段落：与站点地图一致，如 /sensor-modules、/sensor-modules#kd1902-plus */
    segments?: Array<{ text: string; href?: string }>
    src?: string
    alt?: string
    caption?: string
    headers?: string[]
    rows?: string[][]
  }>
}> = {
  'bd4101a-c04-microwave-radar-module-smart-lighting': {
    slug: 'bd4101a-c04-microwave-radar-module-smart-lighting',
    title: 'BD4101A-C04 Microwave Radar Module for Smart Lighting and Presence Detection',
    subtitle: 'A compact 5.8GHz radar module that helps smart lighting, panels, locks, and security devices detect human movement with low power consumption and strong environmental immunity.',
    date: 'Mar 17, 2026',
    readTime: '7 min read',
    category: 'Application Guide',
    coverImg: '/radar/bd4101a-front-pcba.png',
    productLink: '/radar-modules',
    pdfLink: '/downloads/bd4101a-c04-microwave-radar-spec.pdf',
    sections: [
      { type: 'paragraph', content: 'Microwave radar sensing is becoming a practical upgrade for smart lighting, access control, and compact automation devices. Compared with traditional PIR solutions, a radar module can offer stronger penetration, better environmental tolerance, and more flexible installation. The BD4101A-C04 is designed for exactly these scenarios: compact devices that need reliable human-motion sensing without adding unnecessary system complexity.' },
      { type: 'paragraph', content: 'According to the product specification, the module operates in the 5.725GHz to 5.875GHz band, supports front detection from 1 to 13 meters, and can be integrated into designs such as smart panels, door locks, doorbells, alarms, and lighting products. Its low default current and UART adjustment capability make it especially suitable for embedded smart-device applications.' },
      { type: 'image', src: '/radar/bd4101a-front-pcba.png', alt: 'BD4101A-C04 microwave radar module PCBA front view', caption: 'BD4101A-C04 front-side PCBA for compact radar sensing integration.' },
      { type: 'h2', content: '1. Why Use a Microwave Radar Module in Smart Devices?' },
      { type: 'paragraph', content: 'Many smart products need to know when a person is nearby or when movement occurs, but the installation environment is often far from ideal. Temperature variation, humidity, airflow, dust, and ambient light can all affect ordinary sensing methods. A microwave radar module helps reduce these limitations by relying on electromagnetic detection instead of visible-light or passive infrared-only behavior.' },
      { type: 'paragraph', content: 'That makes it a strong fit for smart lighting, wake-up panels, security triggers, and home automation products that need stable sensing behavior in real-world environments.' },
      { type: 'h2', content: '2. Key Advantages of the BD4101A-C04' },
      { type: 'paragraph', content: 'The BD4101A-C04 combines compact size, low power, and strong anti-interference capability. The specification highlights resistance to temperature, humidity, airflow, dust, noise, and brightness changes. It can also penetrate acrylic, glass, and thin non-metallic materials, which gives hardware teams more freedom when placing the module behind decorative covers or industrial design surfaces.' },
      { type: 'paragraph', content: 'An onboard MCU with digital filtering, mains-frequency suppression, and wireless-interference mitigation further improves stability in crowded electronic environments.' },
      { type: 'image', src: '/radar/bd4101a-back-pcba.png', alt: 'BD4101A-C04 microwave radar module PCBA back view', caption: 'The rear side of the module shows its simple I/O-oriented integration layout.' },
      { type: 'h2', content: '3. Performance and Electrical Specifications' },
      { type: 'table', headers: ['Parameter', 'Specification', 'Note'], rows: [
        ['Working Frequency', '5.725GHz-5.875GHz', 'Microwave radar band'],
        ['Detection Range', 'Front 1-13m', 'Indoor reference value'],
        ['Mounting Height', '3m', 'Typical installation'],
        ['Coverage Radius', '3-5m', 'Application dependent'],
        ['Working Voltage', '3V-12V', 'Wide power input'],
        ['Current', '880uA default / 9.6mA high-power', 'Low-power sensing'],
        ['Output', 'IO / UART, 0-3.3V', 'Supports parameter tuning'],
        ['Module Size', '19.5 x 18 x 1.6mm', 'Compact PCBA form factor'],
      ]},
      { type: 'h2', content: '4. Typical Applications' },
      { type: 'paragraph', content: 'The module is well suited for smart home panels, door locks, video doorbells, sensor lighting, access systems, and alarm-trigger devices. In lighting applications, it can detect user presence to wake the product and activate illumination. In security applications, it can trigger alerts or camera linkage when movement is detected. In smart-entry systems, it can support touchless wake-up or approach-based interaction.' },
      { type: 'h2', content: '5. Integration Notes for Reliable Results' },
      { type: 'paragraph', content: 'The specification includes several practical installation guidelines. The antenna side should keep distance from metal planes, avoid direct coverage by high-current circuits, and stay away from strong wireless equipment where possible. The module also performs best when the front cover uses non-metal materials such as suitable plastics or acrylic.' },
      { type: 'paragraph', content: 'These layout and installation details are important because they directly affect real-world sensing range, false-trigger behavior, and consistency between prototype and production units.' },
      { type: 'h2', content: '6. Conclusion' },
      { type: 'paragraph', content: 'For engineers building smart lighting, access control, or compact presence-detection products, the BD4101A-C04 offers a practical balance of low power, stable performance, compact size, and easy integration. It is a strong radar option when the design goal is dependable human-motion sensing in a clean, board-level module format.' },
    ]
  },
  'bd4104b-c01-blind-spot-detection-radar-ebike-safety': {
    slug: 'bd4104b-c01-blind-spot-detection-radar-ebike-safety',
    title: 'BD4104B-C01 Blind-Spot Detection Radar for E-Bikes and Low-Speed Vehicle Safety',
    subtitle: 'A compact FMCW radar module built for blind-spot monitoring, lane-change assistance, and rear-collision warning in e-bikes, scooters, motorcycles, and other low-speed vehicles.',
    date: 'Mar 17, 2026',
    readTime: '7 min read',
    category: 'Application Guide',
    coverImg: '/radar/wt4104b-front-pcba.png',
    productLink: '/radar-modules',
    pdfLink: '/downloads/bd4104b-c01-bsd-radar-spec.pdf',
    sections: [
      { type: 'paragraph', content: 'Blind-spot awareness is no longer limited to premium cars. As e-bikes, electric tricycles, scooters, and compact special-purpose vehicles become more common, safety-assistance hardware is moving into lower-speed mobility platforms as well. The BD4104B-C01 radar module is designed for this trend, bringing rear blind-spot detection and warning capability into a compact board-level solution.' },
      { type: 'paragraph', content: 'Based on the specification, the module integrates a 77GHz to 81GHz FMCW radar transceiver, 2Tx 2Rx PCB antenna array, radar signal processing, and a high-performance automotive-grade MCU. It supports CAN connectivity and warning outputs for left and right indicators, making it suitable for system-level safety integration.' },
      { type: 'image', src: '/radar/wt4104b-front-pcba.png', alt: 'BD4104B-C01 blind-spot detection radar module front view', caption: 'BD4104B-C01 front-side PCBA with integrated radar section and signal-processing circuitry.' },
      { type: 'h2', content: '1. Why Blind-Spot Radar Matters for Low-Speed Vehicles' },
      { type: 'paragraph', content: 'Riders of e-bikes, scooters, motorcycles, and utility vehicles are often exposed to limited rear visibility. Mirrors and rider attention help, but they are not always enough when nearby vehicles approach quickly from the side or rear. A blind-spot radar module can continuously watch these dangerous zones and provide earlier warning to the rider or vehicle controller.' },
      { type: 'paragraph', content: 'This is particularly useful in lane-change scenarios, dense city traffic, and mixed-vehicle environments where small mobility platforms share the road with larger vehicles.' },
      { type: 'h2', content: '2. Core Functional Strengths' },
      { type: 'paragraph', content: 'The BD4104B-C01 uses FMCW radar processing, which enables distance, speed, and angle estimation for moving targets. The specification highlights wide angular coverage, high sensitivity, support for up to 16 targets, and resistance to environmental conditions such as dust, airflow, light, temperature, and humidity. These are exactly the conditions where optical-only approaches may become unreliable.' },
      { type: 'paragraph', content: 'For practical vehicle integration, the module also supports CAN communication and controlled warning outputs that can directly cooperate with left and right indicator logic.' },
      { type: 'image', src: '/radar/wt4104b-back-pcba.png', alt: 'BD4104B-C01 blind-spot detection radar module back view', caption: 'Rear-side PCBA view of the BD4104B-C01 radar module used for BSD integration.' },
      { type: 'h2', content: '3. Detection Capability and Technical Parameters' },
      { type: 'table', headers: ['Parameter', 'Specification', 'Note'], rows: [
        ['Working Mode', 'FMCW', 'Continuous-wave radar processing'],
        ['Working Frequency', '77-81GHz', 'Millimeter-wave band'],
        ['Antenna', '2Tx 2Rx', 'Integrated PCB antenna'],
        ['Vehicle Detection', '40m', '10dBsm reference'],
        ['E-bike Detection', '25m', '0dBsm reference'],
        ['Pedestrian Detection', '15m', '-7dBsm reference'],
        ['Angle Coverage', 'Horizontal +/-60 deg, vertical +/-15 deg', 'Wide warning zone'],
        ['Refresh Time', '100ms', 'Fast update'],
        ['Working Voltage', '9V-16V', 'Vehicle power range'],
        ['Module Size', '32 x 32 x 9mm', 'Compact installation'],
      ]},
      { type: 'h2', content: '4. BSD, Lane Change Assist, and Rear Collision Warning' },
      { type: 'paragraph', content: 'The specification describes several practical warning functions. BSD covers blind-spot monitoring around the rear side area of the vehicle. LCA supports lane-change assistance by warning when a target approaches quickly from the adjacent rear lane. RCW adds rear collision warning logic for specific near-center rear scenarios. Together, these functions help riders avoid dangerous merging and turning decisions.' },
      { type: 'paragraph', content: 'This kind of functional layering makes the module more than a raw radar sensor. It becomes a compact safety subsystem for mobility products.' },
      { type: 'h2', content: '5. Application Scenarios' },
      { type: 'paragraph', content: 'According to the specification, target applications include low-speed passenger vehicles, lightweight motorcycles, electric tricycles, electric bicycles, scooters, self-balancing vehicles, and special-purpose machinery vehicles. These are all platforms where cost, space, and integration simplicity matter, but safety demand is rising quickly.' },
      { type: 'h2', content: '6. Installation Considerations' },
      { type: 'paragraph', content: 'The module is intended for rear installation, typically at a height of roughly 30cm to 100cm above ground. The front cover should use non-metal material without metallic coating, and the space between the radar and cover should follow the recommended distance guidance. Mechanical alignment is also important, with azimuth and pitch tolerance kept within the specification range for best performance.' },
      { type: 'paragraph', content: 'These requirements are critical because blind-spot radar performance depends not only on the RF design itself, but also on cover material, mounting angle, and installation position inside the vehicle body.' },
      { type: 'h2', content: '7. Conclusion' },
      { type: 'paragraph', content: 'The BD4104B-C01 is a practical radar module for brands developing safer e-bikes, scooters, motorcycles, and other low-speed vehicles. With compact size, CAN-friendly integration, wide detection coverage, and dedicated safety-warning logic, it offers a clear upgrade path for mobility products that need blind-spot awareness without a large hardware footprint.' },
    ]
  },
  'how-vibration-sensors-extend-iot-battery-life': {
    slug: 'how-vibration-sensors-extend-iot-battery-life',
    title: 'How Vibration Sensors Extend IoT Battery Life',
    subtitle: 'Mechanical vibration sensors help IoT devices achieve ultra-low power consumption by enabling wake-up detection without continuous MCU operation. Learn how vibration sensors extend IoT battery life.',
    date: 'Mar 17, 2026',
    readTime: '8 min read',
    category: 'Application Guide',
    coverImg: '/blog-pic/vibration-iot-intro.jpeg',
    productLink: '/sensor-modules',
    cta1: { text: 'Looking for ultra-low-power vibration sensors for your IoT device?', linkText: 'View Vibration Sensors', href: '/sensor-modules' },
    cta2: { text: 'Explore our vibration sensor solutions or contact our engineering team for technical support.', linkText: 'Contact Us', href: '/contact' },
    sections: [
      { type: 'h2', content: '1. Introduction' },
      { type: 'paragraph', content: 'Battery life is one of the most critical design challenges in modern IoT devices. Many products such as asset trackers, smart locks, wearable devices, and wireless sensors are expected to operate for months or even years without frequent battery replacement.' },
      { type: 'paragraph', content: 'However, traditional motion detection methods often rely on active electronic components such as MEMS accelerometers or gyroscopes. While these sensors provide precise motion data, they also require continuous power consumption.' },
      { type: 'paragraph', content: 'Mechanical vibration sensors offer a simple and ultra-low-power alternative. By acting as a hardware trigger, they allow IoT systems to remain in sleep mode most of the time and wake up only when motion occurs. This approach significantly extends battery life while maintaining reliable motion detection.' },
      { type: 'paragraph', content: 'As IoT deployments continue to expand across industries, vibration sensors are becoming an increasingly valuable component for engineers designing energy-efficient systems.' },
      { type: 'image', src: '/blog-pic/vibration-iot-intro.jpeg', alt: 'Mechanical vibration sensors for IoT wake-up', caption: 'Mechanical vibration sensors enable ultra-low-power IoT wake-up designs.' },
      { type: 'h2', content: '2. Why Battery Life Is Critical in IoT Devices' },
      { type: 'paragraph', content: 'Unlike traditional electronic devices that are connected to constant power sources, many IoT systems rely entirely on battery power.' },
      { type: 'paragraph', content: 'These devices are often deployed in locations where frequent maintenance is impractical. In large-scale deployments, replacing batteries regularly can dramatically increase operational costs.' },
      { type: 'paragraph', content: 'For example:' },
      { type: 'paragraph', content: '• asset tracking devices used in logistics' },
      { type: 'paragraph', content: '• wireless environmental sensors' },
      { type: 'paragraph', content: '• smart building monitoring systems' },
      { type: 'paragraph', content: '• wearable electronics' },
      { type: 'paragraph', content: '• agricultural IoT sensors' },
      { type: 'paragraph', content: 'In such applications, battery lifetime directly influences the success of the product.' },
      { type: 'paragraph', content: 'Engineers often aim to design devices that can operate for one to five years on a single battery. Achieving this goal requires minimizing energy consumption across every component in the system.' },
      { type: 'paragraph', content: 'Even small reductions in standby current can dramatically extend the operational lifetime of a device.' },
      { type: 'paragraph', content: 'The relationship between current consumption and battery lifetime is illustrated in the figure below.' },
      { type: 'image', src: '/blog-pic/vibration-iot-battery.png', alt: 'Battery lifetime vs standby current', caption: 'As shown in the figure, even a small increase in standby current can significantly reduce battery lifetime in battery-powered IoT systems.' },
      { type: 'h2', content: '3. Challenges of Continuous Motion Monitoring' },
      { type: 'paragraph', content: 'Many IoT devices need to detect motion events such as movement, vibration, or tampering.' },
      { type: 'paragraph', content: 'A common solution is to use electronic motion sensors such as: MEMS accelerometers, gyroscopes, and digital motion sensors.' },
      { type: 'paragraph', content: 'These sensors provide detailed motion data and are widely used in smartphones and consumer electronics.' },
      { type: 'paragraph', content: 'However, they also introduce a significant challenge for battery-powered devices.' },
      { type: 'paragraph', content: 'Even in low-power modes, these sensors typically consume tens to hundreds of microamps of current in the system.' },
      { type: 'paragraph', content: 'For devices designed to operate for years on a small battery, this level of power consumption may be unacceptable.' },
      { type: 'paragraph', content: 'The diagram below illustrates a typical continuous motion detection architecture.' },
      { type: 'image', src: '/blog-pic/vibration-iot-continuous.png', alt: 'Continuous motion detection architecture', caption: 'Typical continuous motion detection architecture with active sensors.' },
      { type: 'h2', content: '4. How Mechanical Vibration Sensors Work' },
      { type: 'paragraph', content: 'Mechanical vibration sensors operate based on a simple physical principle. Inside the sensor, a small conductive spring or metal element moves when vibration occurs.' },
      { type: 'image', src: '/blog-pic/vibration-iot-sensor.jpeg', alt: 'Medium Vibration Sensor Switch', caption: 'Medium Vibration Sensor Switch' },
      { type: 'paragraph', content: 'When the device experiences motion or vibration: the internal element moves, the electrical contacts briefly close, and a signal is generated.' },
      { type: 'paragraph', content: 'This signal can be used to trigger an interrupt in the microcontroller.' },
      { type: 'paragraph', content: 'Unlike electronic sensors, mechanical vibration sensors do not require continuous power to monitor motion. They act as passive switches that only generate a signal when vibration occurs.' },
      { type: 'paragraph', content: 'Because of this passive behavior, their standby power consumption is essentially zero.' },
      { type: 'paragraph', content: 'This makes them ideal for ultra-low-power IoT systems where minimizing standby current is critical.' },
      { type: 'h2', content: '5. Event-Driven Wake-Up Architecture' },
      { type: 'paragraph', content: 'One of the most effective ways to reduce power consumption in IoT systems is to use an event-driven architecture.' },
      { type: 'paragraph', content: 'Instead of continuously monitoring sensors, the system remains in sleep mode until a trigger event occurs.' },
      { type: 'paragraph', content: 'A typical low-power design may include: battery power supply, mechanical vibration sensor, ultra-low-power microcontroller, and wireless communication module.' },
      { type: 'paragraph', content: 'During standby: the microcontroller enters deep sleep mode, the wireless module is powered down, and the vibration sensor passively monitors movement.' },
      { type: 'paragraph', content: 'When vibration is detected: the sensor triggers an interrupt, the microcontroller wakes up, and the device processes the event or transmits data.' },
      { type: 'paragraph', content: 'This architecture allows the system to remain inactive most of the time, dramatically reducing energy consumption.' },
      { type: 'image', src: '/blog-pic/vibration-iot-event.png', alt: 'Event-driven wake-up architecture', caption: 'Event-driven wake-up architecture with mechanical vibration sensor.' },
      { type: 'h2', content: '6. Typical Applications' },
      { type: 'paragraph', content: 'Mechanical vibration sensors are widely used in applications that require long battery life and simple motion detection.' },
      { type: 'paragraph', content: 'Asset Tracking: In logistics applications, vibration sensors can detect when an asset starts moving. The tracking device wakes up and activates GPS only when motion occurs.' },
      { type: 'paragraph', content: 'Smart Home Security: Door and window sensors can use vibration detection to identify tampering or forced entry attempts.' },
      { type: 'paragraph', content: 'Wearable Devices: Some wearable devices use vibration sensors to detect user activity without constantly running complex motion algorithms.' },
      { type: 'paragraph', content: 'Industrial Monitoring: Battery-powered monitoring systems can detect abnormal machine vibration and activate wireless communication only when needed.' },
      { type: 'image', src: '/blog-pic/vibration-iot-apps.png', alt: 'IoT applications for vibration sensors', caption: 'Typical IoT applications for mechanical vibration sensors.' },
      { type: 'h2', content: '7. Advantages of Mechanical Vibration Sensors' },
      { type: 'paragraph', content: 'Mechanical vibration sensors provide several benefits for IoT system designers.' },
      { type: 'paragraph', content: 'Ultra-low standby power — They consume virtually no power while waiting for motion events.' },
      { type: 'paragraph', content: 'Simple integration — They can be connected directly to microcontroller interrupt pins.' },
      { type: 'paragraph', content: 'Fast response — They respond immediately to physical vibration.' },
      { type: 'paragraph', content: 'Cost-effective solution — They are often less expensive than complex MEMS motion sensors.' },
      { type: 'paragraph', content: 'Long operational lifetime — The absence of active electronics contributes to long-term reliability.' },
      { type: 'table', headers: ['Feature', 'Mechanical Sensor', 'MEMS Sensor'], rows: [
        ['Standby Power', '~0', '10-100 µA'],
        ['Complexity', 'Low', 'High'],
        ['Cost', 'Low', 'Higher'],
      ]},
      { type: 'h2', content: '8. Conclusion' },
      { type: 'paragraph', content: 'As IoT technology continues to expand into new industries, the demand for energy-efficient devices is increasing.' },
      { type: 'paragraph', content: 'Mechanical vibration sensors offer a simple and reliable way to extend battery life by enabling event-driven motion detection.' },
      { type: 'paragraph', content: 'By allowing devices to remain in sleep mode until vibration occurs, these sensors significantly reduce standby power consumption.' },
      { type: 'paragraph', content: 'For engineers designing long-lifetime IoT systems, vibration-based wake-up detection remains one of the most practical solutions for achieving ultra-low power operation.' },
    ]
  },
  'low-power-gps-tracker-motion-wakeup': {
    slug: 'low-power-gps-tracker-motion-wakeup',
    title: 'How to Reduce GPS Tracker Power Consumption with Motion Wake-Up Sensors',
    subtitle: 'Learn how motion wake-up sensors reduce power consumption in GPS trackers. Improve battery life with ultra-low-power vibration sensor solutions.',
    date: 'Apr 3, 2026',
    readTime: '9 min read',
    category: 'Application Guide',
    coverImg: '/blog-pic/gps-motion-wakeup-intro.png',
    productLink: '/sensor-modules#kd1902-plus',
    pdfLink: '/downloads/kd1902-plus-datasheet.pdf',
    cta1: { text: 'Need a motion wake-up sensor for your GPS or asset tracker design?', linkText: 'View KD1902+', href: '/sensor-modules#kd1902-plus' },
    cta2: { text: 'Contact Kingdta for samples and integration guidance.', linkText: 'Contact Us', href: '/contact' },
    sections: [
      { type: 'h2', content: '1. Introduction' },
      { type: 'paragraph', content: 'Power consumption is one of the biggest challenges in low power GPS tracker design, especially for battery-powered devices used in vehicle tracking, asset monitoring, and logistics applications.' },
      { type: 'paragraph', content: 'In real-world scenarios, most GPS trackers remain stationary for long periods and only need to activate when movement occurs. This makes motion detection a critical factor in optimizing battery life.' },
      { type: 'image', src: '/blog-pic/gps-motion-wakeup-intro.png', alt: 'Low power GPS tracker and motion wake-up concept', caption: 'Motion wake-up sensing helps GPS trackers stay in deep sleep until real movement occurs.' },
      { type: 'h2', content: '2. The Limitation of Traditional Motion Detection' },
      { type: 'paragraph', content: 'Most GPS tracking devices rely on MEMS accelerometers for motion detection. While these sensors provide accurate data, they introduce several challenges:' },
      { type: 'paragraph', content: '• Continuous power consumption (typically in the microamp range)' },
      { type: 'paragraph', content: '• Dependence on MCU processing' },
      { type: 'paragraph', content: '• Increased system complexity' },
      { type: 'paragraph', content: '• Higher overall cost' },
      { type: 'paragraph', content: 'Even in low-power modes, accelerometers still consume energy, which reduces overall battery life in long-term deployments.' },
      { type: 'h2', content: '3. A Different Approach: Motion Wake-Up Sensors' },
      { type: 'paragraph', content: 'Instead of continuously monitoring motion, an alternative is to use a motion wake-up sensor based on vibration detection.' },
      { type: 'paragraph', content: 'This approach allows the system to remain in deep sleep and only wake up when real movement occurs.' },
      { type: 'richText', segments: [
        { text: 'A passive vibration sensor from our ' },
        { text: 'Sensor Modules', href: '/sensor-modules' },
        { text: ' family can function as a hardware trigger, generating a signal only when motion is detected—without consuming meaningful standby power. Browse passive vibration switches on the ' },
        { text: 'Sensor Modules', href: '/sensor-modules' },
        { text: ' page for model lineup and specs.' },
      ] },
      { type: 'table', headers: ['Feature', 'Accelerometer', 'Vibration Sensor'], rows: [
        ['Power Consumption', 'Continuous', 'Near Zero'],
        ['MCU Required', 'Yes', 'No'],
        ['Cost', 'Higher', 'Lower'],
      ]},
      { type: 'h2', content: '4. How the Vibration Sensor Works' },
      { type: 'paragraph', content: 'A vibration-based wake-up sensor uses a simple mechanical structure:' },
      { type: 'paragraph', content: '• In a static state, the circuit remains open.' },
      { type: 'paragraph', content: '• When vibration occurs, internal contact generates pulse signals.' },
      { type: 'paragraph', content: '• These pulses can directly trigger the MCU via a GPIO interrupt.' },
      { type: 'paragraph', content: 'This eliminates the need for continuous sensing and enables true ultra-low-power system design.' },
      { type: 'h2', content: '5. Example System Architecture' },
      { type: 'paragraph', content: 'In a typical low power GPS tracker design:' },
      { type: 'paragraph', content: '• Vibration sensor → connected to MCU GPIO (interrupt input)' },
      { type: 'paragraph', content: '• MCU → remains in deep sleep mode' },
      { type: 'paragraph', content: '• GPS module → powered off during standby' },
      { type: 'paragraph', content: 'When motion is detected: the sensor outputs a pulse signal → the MCU wakes from sleep → the GPS module powers on for positioning. This architecture ensures that energy is only consumed when necessary.' },
      { type: 'image', src: '/blog-pic/gps-motion-wakeup-architecture.png', alt: 'GPS tracker block diagram with vibration wake-up', caption: 'Example signal path: vibration interrupt wakes the MCU before the GPS subsystem turns on.' },
      { type: 'h2', content: '6. Key Benefits for GPS Tracker Design' },
      { type: 'paragraph', content: 'By using a hardware-based motion wake-up approach, designers can achieve:' },
      { type: 'paragraph', content: 'Ultra-low power consumption — The sensor itself consumes near-zero standby current, ideal for battery-powered systems.' },
      { type: 'paragraph', content: 'Extended battery life — The system only activates when motion is detected, minimizing unnecessary energy usage.' },
      { type: 'paragraph', content: 'Simplified design — No need for I2C/SPI interfaces or continuous MCU monitoring for basic wake-up.' },
      { type: 'paragraph', content: 'Cost optimization — Lower cost compared to many MEMS-based motion detection solutions.' },
      { type: 'paragraph', content: 'Reliable motion detection — Omnidirectional sensitivity helps detection regardless of device orientation.' },
      { type: 'h2', content: '7. Typical Applications' },
      { type: 'paragraph', content: 'This solution is widely used in:' },
      { type: 'paragraph', content: '• Vehicle GPS trackers' },
      { type: 'paragraph', content: '• Asset tracking devices' },
      { type: 'paragraph', content: '• Logistics and cargo monitoring systems' },
      { type: 'paragraph', content: '• Anti-theft tracking solutions' },
      { type: 'paragraph', content: '• Portable IoT tracking devices' },
      { type: 'h2', content: '8. Recommended Device' },
      { type: 'richText', segments: [
        { text: 'One example of a motion wake-up sensor is the ' },
        { text: 'KD1902+', href: '/sensor-modules#kd1902-plus' },
        { text: ' omnidirectional vibration sensor, designed for ultra-low-power applications.' },
      ] },
      { type: 'paragraph', content: 'Key features include: near-zero standby current (~50 nA), passive operation (no power supply required for the sensing element), direct pulse output for MCU wake-up, compact SMD package, and 360° motion detection.' },
      { type: 'richText', segments: [
        { text: 'For full electrical, mechanical, and reliability data, download the KD1902+ datasheet from the link below, open the ' },
        { text: 'KD1902+', href: '/sensor-modules#kd1902-plus' },
        { text: ' section on ' },
        { text: 'Sensor Modules', href: '/sensor-modules' },
        { text: ', or read the ' },
        { text: 'KD1902+ product article', href: '/blog/kd1902-plus' },
        { text: ' on our blog.' },
      ] },
      { type: 'h2', content: '9. Conclusion' },
      { type: 'paragraph', content: 'Optimizing power consumption is essential for improving the performance and competitiveness of GPS tracking devices.' },
      { type: 'paragraph', content: 'By replacing continuous motion sensing with a hardware-based motion wake-up sensor, designers can significantly extend battery life while simplifying system architecture.' },
      { type: 'paragraph', content: 'This makes vibration-based wake-up solutions an effective choice for next-generation low power GPS tracker designs.' },
      { type: 'richText', segments: [
        { text: 'Looking for a reliable motion wake-up sensor for your GPS tracker design? Feel free to ' },
        { text: 'contact us', href: '/contact' },
        { text: ' or request samples to evaluate how this solution can improve your device battery performance.' },
      ] },
    ]
  },
  'kd1902': {
    slug: 'kd1902',
    title: 'KD1902: The 2-Million-Cycle Vibration Sensor for Industrial IoT Reliability',
    subtitle: 'In the lifecycle of a deployed IoT device, the sensor is often the mechanical weak point. The KD1902 is engineered to change that.',
    date: 'Dec 15, 2025',
    readTime: '7 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/KD1902S.jpg',
    productLink: '/sensor-modules#kd1902',
    pdfLink: '/downloads/kd1902-datasheet.pdf',
    sections: [
      { type: 'paragraph', content: 'In the lifecycle of a deployed IoT device, the sensor is often the mechanical weak point. For applications like Tire Pressure Monitoring Systems (TPMS) or logistics trackers, a sensor must withstand years of constant movement without failure. Introducing the KD1902, an upgraded Omnidirectional SMT Vibration Trigger Sensor engineered for extreme durability, boasting a service life of over 2,000,000 cycles.' },
      { type: 'h2', content: '1. Engineered for Endurance' },
      { type: 'paragraph', content: 'While standard vibration switches may fail after prolonged exposure to harsh environments, the KD1902 uses a specialized vacuum-sealed core-shell structure and premium electroplating. It can withstand short-term solder heat up to 400°C, temperature extremes from -40°C to +85°C, and more than 2,000,000 vibration cycles. That level of durability makes it a strong choice for automotive electronics and industrial asset tracking.' },
      { type: 'image', src: '/blog-pic/KD1902S-1.jpg', alt: 'KD1902 sensor close-up', caption: 'KD1902 in SMD package — compact and durable' },
      { type: 'h2', content: '2. 360° Omnidirectional Triggering' },
      { type: 'paragraph', content: 'The KD1902 replaces legacy mercury switches and bulky spring sensors with a miniature ball-contact structure. It features no "blind spots." It is most sensitive along the four major axes (0°, 90°, 180°, 270°) but triggers effectively from any random vibration angle. A free-moving internal sphere bridges the electrode gap upon movement.' },
      { type: 'image', src: '/blog-pic/KD1902S-2.jpg', alt: 'KD1902 internal structure', caption: 'Internal ball-contact mechanism enables 360° detection' },
      { type: 'h2', content: '3. Passive "Zero-Power" Architecture' },
      { type: 'paragraph', content: 'The KD1902 is a passive component — it requires no active power supply to monitor motion. Voltage range supports versatile 0.5V to 36V DC. Operating current is determined by your pull-up resistor (typically micro-amps or nano-amps). Standby current is effectively 0A (High Impedance). This makes it the ultimate solution for battery-powered devices that need to sit on a shelf for years and wake up instantly when moved.' },
      { type: 'h2', content: '4. Technical Specifications' },
      { type: 'table', headers: ['Parameter', 'Specification', 'Note'], rows: [
        ['Operating Voltage', '0.5V – 36V DC', 'Wide compatibility'],
        ['Trigger Direction', '360° Omnidirectional', 'No dead zones'],
        ['Life Cycles', '≥ 2,000,000', 'Industrial grade'],
        ['Operating Temperature', '-40°C to +85°C', 'Harsh environment ready'],
        ['Package', 'SMD (Surface Mount)', 'Automated assembly compatible'],
        ['Sealing', 'Hermetically Sealed', 'Waterproof & dustproof'],
      ]},
      { type: 'image', src: '/blog-pic/KD1902S-3.jpg', alt: 'KD1902 PCB integration', caption: 'KD1902 integrates seamlessly into standard PCB assemblies' },
      { type: 'h2', content: '5. Key Applications' },
      { type: 'paragraph', content: 'Due to its extended 2-million-cycle lifespan, the KD1902 is ideal for wearables (step counting or tap detection), RFID Smart Tags (logistics tracking), Smart Remote Controls (backlight activation upon pickup), and TPMS (Tire Pressure Monitoring — activating sensors only when wheels rotate).' },
      { type: 'image', src: '/blog-pic/KD1902S-4.jpg', alt: 'KD1902 application examples', caption: 'From asset trackers to TPMS — KD1902 powers them all' },
    ]
  },
  'kd1902-plus': {
    slug: 'kd1902-plus',
    title: 'KD1902+: Enhanced Omnidirectional Vibration Sensor for Demanding Wake-Up Applications',
    subtitle: 'KD1902+ builds on the KD1902 platform with additional tuning margin for challenging mechanical environments while keeping passive, ultra-low standby behavior.',
    date: 'Apr 1, 2026',
    readTime: '6 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/KD1902S.jpg',
    productLink: '/sensor-modules#kd1902-plus',
    pdfLink: '/downloads/kd1902-plus-datasheet.pdf',
    sections: [
      { type: 'paragraph', content: 'Many IoT products wake from deep sleep using a vibration trigger. The KD1902 family covers this need with omnidirectional, passive switching. KD1902+ is the enhanced variant for teams that need more flexibility when optimizing sensitivity, debounce, and firmware filtering—especially when packaging, mounting, or real-world vibration profiles are demanding.' },
      { type: 'h2', content: '1. Relationship to KD1902' },
      { type: 'paragraph', content: 'KD1902 delivers proven 360° triggering with a two-million-cycle rating and wide voltage compatibility. KD1902+ targets the same applications but gives engineers additional headroom to tune the wake path with your pull-up, RC network, and interrupt service routine. Both remain passive elements, so the sensing element itself does not consume continuous bias current when idle.' },
      { type: 'h2', content: '2. Integration Guidance' },
      { type: 'paragraph', content: 'Integrate KD1902+ like KD1902: connect between ground and an MCU GPIO with a suitable pull-up, then validate pulse shape and bounce with your enclosure and shock profile. Follow the datasheet for land pattern, reflow limits, and handling notes before mass production.' },
      { type: 'h2', content: '3. Typical Applications' },
      { type: 'paragraph', content: 'Asset trackers, smart security, TPMS wake-up, logistics tags, remote controls that wake on pickup, and compact gadgets where standby energy must stay minimal but mechanical conditions are harsh.' },
      { type: 'h2', content: '4. Conclusion' },
      { type: 'paragraph', content: 'If KD1902 is already qualified in your design, KD1902+ is the natural step-up when you need more margin without changing the fundamental sensing approach. Download the KD1902+ datasheet for full electrical, mechanical, and reliability data.' },
    ]
  },
  'kd1908': {
    slug: 'kd1908',
    title: 'Mastering Motion: The KD1908 SMD Angle Sensor for Precise Tilt Detection',
    subtitle: 'In the world of smart electronics, knowing the position of a device is just as important as knowing its location.',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/HS1908.jpg',
    productLink: '/sensor-modules#kd1908',
    pdfLink: '/downloads/kd1908-datasheet.pdf',
    sections: [
      { type: 'paragraph', content: 'In the world of smart electronics, knowing the position of a device is just as important as knowing its location. Whether it is a space heater that must shut off if it tips over, or a smartwatch that wakes up when you lift your wrist, tilt detection is a critical safety and usability feature. Meet the KD1908, a high-precision SMD Angle Sensor designed to detect tilt in any direction.' },
      { type: 'h2', content: 'What is the KD1908?' },
      { type: 'paragraph', content: 'The KD1908 is a surface-mount (SMD) tilt switch. Inside its miniature package lies a precision metal ball structure, sealed via vacuum technology within high-grade polymer materials. Unlike vibration sensors that detect momentary shocks, the KD1908 is designed to detect state changes in orientation. When the device tilts beyond a specific threshold, the internal mechanism bridges the contact, closing the circuit to trigger a signal. When horizontal, it remains in a "Normally Open" (OFF) state.' },
      { type: 'image', src: '/blog-pic/HS1908.jpg', alt: 'KD1908 tilt sensor', caption: 'KD1908 — precision tilt detection in a compact SMD package' },
      { type: 'h2', content: '1. Customizable Tilt Angles' },
      { type: 'paragraph', content: 'One size does not fit all. A smart iron might need a shallow tilt angle to detect use, while a space heater needs a steep angle to detect a fall. The KD1908 series can be customized to trigger at specific angles: 15°, 30°, 45°, 60°, or 75°. This flexibility allows engineers to tailor the sensor exactly to the application\'s safety requirements.' },
      { type: 'h2', content: '2. 360° Omnidirectional Detection' },
      { type: 'paragraph', content: 'The KD1908 provides consistent performance regardless of the direction of the fall or tilt. Whether the device tips forward, backward, or sideways, the sensor will accurately trigger the circuit.' },
      { type: 'h2', content: '3. Technical Specifications' },
      { type: 'table', headers: ['Feature', 'Specification'], rows: [
        ['Model', 'KD1908'],
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
      { type: 'paragraph', content: 'The KD1908 is versatile, finding its home in safety systems, home automation, and medical devices: Anti-tamper mechanisms in smart meters and intelligent manhole covers; Smart Home appliances (toilet lids, sweeping robots, smart ironing systems); Medical & Elderly Care (fall detection in intelligent crutches, smart monitoring beds); Smart Wearables ("Lift-to-wake" functionality); and Home Safety (electric fans, humidifiers, air purifiers — instant power cutoff when tipped).' },
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
    productLink: '/sensor-modules#kd1918s',
    pdfLink: '/downloads/kd1918s-30-datasheet.pdf',
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
    coverImg: '/blog-pic/HS1912.png',
    productLink: '/sensor-modules#kd1912',
    pdfLink: '/downloads/kd1912-datasheet.pdf',
    sections: [
      { type: 'paragraph', content: 'In the realm of electromechanical components, mechanical fatigue is the enemy. For standard consumer electronics, a sensor that lasts a few years is sufficient. But for industrial asset trackers, automotive safety systems, or smart meters installed for a decade, you need components that refuse to quit. The KD1912 is the flagship of endurance in the SMT vibration sensor lineup, with a massive rated lifespan of ≥ 5,000,000 cycles.' },
      { type: 'h2', content: '1. Unmatched Durability: 5 Million Triggers' },
      { type: 'paragraph', content: 'The defining feature of the KD1912 is its longevity. While standard market alternatives often fail around 100k to 500k cycles, the KD1912 utilizes advanced materials and a vacuum-sealed core-shell structure to achieve 5 million reliable triggers. This makes it perfect for high-frequency environments: Machinery Condition Monitoring (detecting continuous vibrations in industrial equipment), Smart Logistics (tracking packages that undergo constant handling), and Automotive (systems exposed to perpetual road vibration).' },
      { type: 'image', src: '/blog-pic/HS1912.png', alt: 'HS1912 miniature omnidirectional vibration sensor', caption: 'HS1912 — miniature omnidirectional vibration sensor for next-gen IoT' },
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
  'kd1911h': {
    slug: 'kd1911h',
    title: 'KD1911H: High-Sensitivity Vibration Sensor for Compact IoT Wake-Up',
    subtitle: 'KD1911H targets space-constrained designs that still need dependable vibration-triggered wake-up with passive switching and straightforward MCU integration.',
    date: 'Apr 1, 2026',
    readTime: '6 min read',
    category: 'Product Deep Dive',
    coverImg: '/blog-pic/KD1911H.png',
    productLink: '/sensor-modules#kd1911h',
    pdfLink: '/downloads/kd1911h-datasheet.pdf',
    sections: [
      { type: 'paragraph', content: 'As products shrink, the wake-up circuit must stay reliable without stealing battery budget. KD1911H is positioned for teams that need a vibration switch with strong sensitivity characteristics in a compact SMD footprint, paired with the same passive-on-standby philosophy as the rest of our mechanical trigger family.' },
      { type: 'h2', content: '1. Design Focus' },
      { type: 'paragraph', content: 'KD1911H emphasizes crisp trigger behavior for small-amplitude disturbances while remaining a passive element in the monitoring path—no continuous bias through the sensor when the system is waiting for motion.' },
      { type: 'h2', content: '2. Integration Overview' },
      { type: 'paragraph', content: 'Use KD1911H as a digital wake source: follow the datasheet for pull-up, optional RC debounce, and GPIO interrupt configuration. Validate thresholds with your enclosure, foam, and real vibration profile before locking production firmware.' },
      { type: 'h2', content: '3. Applications' },
      { type: 'paragraph', content: 'Anti-tamper modules, portable electronics, industrial telemetry tags, compact smart-home peripherals, and other battery-powered devices where wake latency must stay low.' },
      { type: 'h2', content: '4. Next Steps' },
      { type: 'paragraph', content: 'Download the KD1911H datasheet for dimensions, electrical limits, soldering guidance, and lifecycle data. Contact Kingdta for samples and application engineering support.' },
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
    productLink: '/sensor-modules#kd1901s',
    pdfLink: '/downloads/kd1901s-datasheet.pdf',
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[68px]">
          <a href="/" className="flex items-center shrink-0">
            <Image src="/header-logo.png" alt="Kingdta" width={140} height={28} className="h-7 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">Home</a>
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
                      <button onClick={() => setModalOpen(true)} className="w-full mt-3 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">Request Sample</button>
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
            <div className="pl-4 space-y-1 pb-1">
              {PRODUCT_MENU.map(item => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between text-gray-500 text-sm py-1.5">
                  <span>{item.label}</span><span className="text-xs text-gray-400">{item.meta}</span>
                </a>
              ))}
            </div>
            <a href="/solutions" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Solutions</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-green-700 text-sm font-medium py-2">Blog</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 text-sm font-medium py-2">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-[68px] bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gray-950 py-20">
          <Image
            src={post.coverImg}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover opacity-20"
          />
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
                  if (sec.type === 'richText' && sec.segments?.length) {
                    return (
                      <p key={i}>
                        {sec.segments.map((seg, j) =>
                          seg.href ? (
                            <a key={j} href={seg.href} className="text-green-700 font-medium underline underline-offset-2 hover:text-green-600 transition-colors">
                              {seg.text}
                            </a>
                          ) : (
                            <span key={j}>{seg.text}</span>
                          )
                        )}
                      </p>
                    )
                  }
                  if (sec.type === 'paragraph') return <p key={i}>{sec.content}</p>
                  if (sec.type === 'image') return (
                    <figure key={i} className="my-8">
                      <div className="rounded-2xl overflow-hidden bg-black">
                        <Image
                          src={sec.src ?? '/header-logo.png'}
                          alt={sec.alt ?? post.title}
                          width={1200}
                          height={750}
                          sizes="(max-width: 1024px) 100vw, 900px"
                          className="w-full h-auto"
                        />
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

                <BlogPostInteractiveDemo slug={params.slug} />

                {post.pdfLink && (
                  <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                    <div>
                      <p className="text-gray-900 font-bold text-base mb-1">Download the Product PDF</p>
                      <p className="text-gray-500 text-sm">Get the corresponding specification sheet for this article.</p>
                    </div>
                    <a href={post.pdfLink} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                      Download PDF
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4.5 18.75h15" /></svg>
                    </a>
                  </div>
                )}

                {/* CTA in article */}
                <div className="mt-10 bg-green-50 border border-green-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-900 font-bold text-base mb-1">{post.cta1?.text ?? 'Interested in integrating this sensor?'}</p>
                    {!post.cta1 && <p className="text-gray-500 text-sm">Request a free sample and get technical support from our engineering team.</p>}
                  </div>
                  {post.cta1 ? (
                    <a href={post.cta1.href} className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                      {post.cta1.linkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                    </a>
                  ) : (
                    <button onClick={() => setModalOpen(true)} className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                      Request Sample
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                    </button>
                  )}
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
                    <p className="font-bold text-sm mb-2">{post.cta2 ? 'Explore Solutions' : 'Need a Sample?'}</p>
                    <p className="text-green-100 text-xs mb-4 leading-relaxed">{post.cta2 ? post.cta2.text : 'Contact our engineering team for technical support and free evaluation samples.'}</p>
                    {post.cta2 ? (
                      <a href={post.cta2.href} className="block w-full bg-white text-green-700 font-semibold text-xs py-2.5 rounded-xl text-center hover:bg-green-50 transition-colors">
                        {post.cta2.linkText}
                      </a>
                    ) : (
                      <button onClick={() => setModalOpen(true)} className="block w-full bg-white text-green-700 font-semibold text-xs py-2.5 rounded-xl text-center hover:bg-green-50 transition-colors">
                        Get in Touch
                      </button>
                    )}
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
              <Image src="/sitelogo22.png" alt="Kingdta" width={160} height={32} className="h-8 w-auto" />
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

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
