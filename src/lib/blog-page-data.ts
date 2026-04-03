export const PRODUCT_MENU = [
	{
		label: "Sensor Modules",
		meta: "Vibration / Tilt / Optical",
		desc: "Core passive sensing products for smart hardware and industrial devices.",
		href: "/sensor-modules",
	},
	{
		label: "Radar Modules",
		meta: "Microwave / BSD / custom",
		desc: "Radar products for presence detection, motion sensing, and blind-spot applications.",
		href: "/radar-modules",
	},
] as const;

export const BLOG_CATEGORIES = [
	"All",
	"Application Guide",
	"Product Deep Dive",
	"Case Study",
] as const;

export const BLOG_LIST_POSTS = [
	{
		slug: "low-power-gps-tracker-motion-wakeup",
		title: "How to Reduce GPS Tracker Power Consumption with Motion Wake-Up Sensors",
		excerpt:
			"Explore how vibration-based motion wake-up sensors help reduce power consumption in GPS trackers and improve battery life with a simpler hardware design.",
		date: "Apr 3, 2026",
		readTime: "9 min read",
		category: "Application Guide",
		cover: "/blog-pic/gps-motion-wakeup-intro.png",
		tags: ["GPS Tracker", "KD1902+", "Motion Wake-Up"],
		featured: true,
	},
	{
		slug: "how-vibration-sensors-extend-iot-battery-life",
		title: "How Vibration Sensors Extend IoT Battery Life",
		excerpt:
			"Mechanical vibration sensors help IoT devices achieve ultra-low power consumption by enabling wake-up detection without continuous MCU operation.",
		date: "Mar 17, 2026",
		readTime: "8 min read",
		category: "Application Guide",
		cover: "/blog-pic/vibration-iot-intro.jpeg",
		tags: ["IoT", "Battery Life", "Vibration Sensor"],
		featured: false,
	},
	{
		slug: "bd4101a-c04-microwave-radar-module-smart-lighting",
		title: "BD4101A-C04 Microwave Radar Module for Smart Lighting and Presence Detection",
		excerpt:
			"See how the BD4101A-C04 helps smart lighting, panels, locks, and automation devices achieve stable motion sensing with compact radar PCBA design.",
		date: "Mar 17, 2026",
		readTime: "7 min read",
		category: "Application Guide",
		cover: "/radar/bd4101a-front-pcba.png",
		tags: ["Radar", "Smart Lighting", "Presence Detection"],
		featured: false,
	},
	{
		slug: "bd4104b-c01-blind-spot-detection-radar-ebike-safety",
		title: "BD4104B-C01 Blind-Spot Detection Radar for E-Bikes and Low-Speed Vehicle Safety",
		excerpt:
			"Learn how the BD4104B-C01 radar module brings BSD, lane-change assistance, and rear warning capability to e-bikes, scooters, and compact vehicles.",
		date: "Mar 17, 2026",
		readTime: "7 min read",
		category: "Application Guide",
		cover: "/radar/wt4104b-front-pcba.png",
		tags: ["Radar", "BSD", "E-Bike Safety"],
		featured: false,
	},
	{
		slug: "kd1901s",
		title: "KD1901S: Extending IoT Battery Life with Nano-Ampere Motion Wake-Up",
		excerpt:
			"In the world of battery-powered IoT devices, power management is everything. The KD1901S proves that big innovation comes in the smallest of packages: nano-ampere standby with instant wake-up.",
		date: "Dec 20, 2025",
		readTime: "7 min read",
		category: "Product Deep Dive",
		cover: "/blog-pic/KD1901S.jpg",
		tags: ["KD1901S", "IoT", "Low Power"],
		featured: true,
	},
	{
		slug: "kd1918s",
		title: "KD1918S-30: Redefining Safety with 360-degree SMD Optical Tilt Detection",
		excerpt:
			"Traditional tilt switches suffer from contact wear and bounce. The KD1918S uses optical detection for a non-contact design that guarantees over 1,000,000 cycles of reliable safety shutoff.",
		date: "Dec 12, 2025",
		readTime: "9 min read",
		category: "Product Deep Dive",
		cover: "/blog-pic/KD1918S.jpg",
		tags: ["KD1918S", "Optical", "Safety"],
		featured: false,
	},
	{
		slug: "kd1908",
		title: "Mastering Motion: The KD1908 SMD Angle Sensor for Precise Tilt Detection",
		excerpt:
			"Whether it is a space heater that must shut off when it tips over, or a smartwatch that wakes up when you lift your wrist, tilt detection is a critical safety and usability feature.",
		date: "Dec 10, 2025",
		readTime: "8 min read",
		category: "Product Deep Dive",
		cover: "/blog-pic/HS1908.jpg",
		tags: ["KD1908", "Tilt", "Smart Home"],
		featured: false,
	},
	{
		slug: "kd1902",
		title: "KD1902: The 2-Million-Cycle Vibration Sensor for Industrial IoT Reliability",
		excerpt:
			"In deployed IoT devices, the sensor is often the mechanical weak point. The KD1902 uses a vacuum-sealed core-shell structure to deliver 2M+ cycles of reliable vibration sensing.",
		date: "Dec 15, 2025",
		readTime: "7 min read",
		category: "Product Deep Dive",
		cover: "/blog-pic/KD1902S.jpg",
		tags: ["KD1902", "Vibration", "TPMS"],
		featured: false,
	},
	{
		slug: "kd1902-plus",
		title: "KD1902+: Enhanced Omnidirectional Vibration Sensor for Demanding Wake-Up Applications",
		excerpt:
			"KD1902+ builds on KD1902 with additional tuning margin for harsh mechanical environments while keeping passive, ultra-low standby behavior.",
		date: "Apr 1, 2026",
		readTime: "6 min read",
		category: "Product Deep Dive",
		cover: "/blog-pic/KD1902S.jpg",
		tags: ["KD1902+", "Vibration", "IoT"],
		featured: false,
	},
	{
		slug: "kd1912",
		title: "KD1912: Setting the 5-Million-Cycle Benchmark for Vibration Sensors",
		excerpt:
			"Standard market alternatives fail around 100k-200k cycles. The KD1912 achieves 5 million reliable triggers using advanced materials and a vacuum-sealed core-shell structure.",
		date: "Nov 28, 2025",
		readTime: "8 min read",
		category: "Product Deep Dive",
		cover: "/blog-pic/HS1912.png",
		tags: ["KD1912", "Industrial", "Durability"],
		featured: false,
	},
	{
		slug: "kd1911h",
		title: "KD1911H: High-Sensitivity Vibration Sensor for Compact IoT Wake-Up",
		excerpt:
			"KD1911H delivers dependable vibration-triggered wake-up in tight PCB spaces, with passive standby and straightforward MCU integration.",
		date: "Apr 1, 2026",
		readTime: "6 min read",
		category: "Product Deep Dive",
		cover: "/blog-pic/KD1911H.png",
		tags: ["KD1911H", "Vibration", "IoT"],
		featured: false,
	},
	{
		slug: "smart-lighting",
		title: "Case Study: Creating Interactive Magic with Vibration Sensors in Smart Lighting",
		excerpt:
			"We tear down a \"Shake-to-Change\" RGB light bulb to see how a simple vibration sensor transforms a static object into an interactive experience, and the circuit design behind it.",
		date: "Nov 15, 2025",
		readTime: "5 min read",
		category: "Case Study",
		cover: "/blog-pic/Blog.png",
		tags: ["Case Study", "Smart Home", "RGB"],
		featured: false,
	},
] as const;
