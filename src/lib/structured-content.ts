export const SENSOR_PRODUCTS = [
	{
		name: "KD1902S Omni-directional Vibration Sensor",
		sku: "KD1902S",
		path: "/sensor-modules#kd1902s",
		image: "/blog-pic/KD1902S.jpg",
		description:
			"Industry-leading omnidirectional vibration sensing with a proven 2M+ cycle lifespan for smart security, IoT wake-up triggers, and TPMS applications.",
		category: "Vibration Sensor",
	},
	{
		name: "KD1908S Tilt & Angle Sensor",
		sku: "KD1908S",
		path: "/sensor-modules#kd1908s",
		image: "/blog-pic/HS1908.jpg",
		description:
			"Ultra-low power tilt detection with micro-ampere standby current and precise angular response for always-on consumer devices and safety shutoff applications.",
		category: "Tilt Sensor",
	},
	{
		name: "KD1918S Optical Tilt Sensor",
		sku: "KD1918S",
		path: "/sensor-modules#kd1918s",
		image: "/blog-pic/KD1918S-5.jpg",
		description:
			"Non-contact optical tilt detection covering the full 360-degree sphere for anti-tamper, safety shutoff, and smart locking scenarios.",
		category: "Optical Tilt Sensor",
	},
	{
		name: "KD1912 Long-Life Vibration Sensor",
		sku: "KD1912",
		path: "/sensor-modules#kd1912",
		image: "/blog-pic/HS1912.jpg",
		description:
			"A durable sensor built for high-cycle industrial and automotive use, with 5M+ trigger cycles and stable sensitivity.",
		category: "Vibration Sensor",
	},
	{
		name: "KD1901S Nano-Ampere Motion Wake-Up Sensor",
		sku: "KD1901S",
		path: "/sensor-modules#kd1901s",
		image: "/blog-pic/KD1901S.jpg",
		description:
			"An ultra-low-power motion wake-up sensor designed for battery-powered IoT devices that require nano-amp standby current.",
		category: "Motion Wake-Up Sensor",
	},
] as const;

export const RADAR_PRODUCTS = [
	{
		name: "BD4101A-C04 Microwave Radar Sensing Module",
		sku: "BD4101A-C04",
		path: "/radar-modules",
		image: "/radar/bd4101a-front-pcba.png",
		description:
			"A compact microwave radar sensing module for presence detection, motion sensing, smart lighting, and home automation scenarios.",
		category: "Microwave Radar Module",
	},
	{
		name: "BD4104B-C01 Blind-Spot Detection Radar Module",
		sku: "BD4104B-C01",
		path: "/radar-modules",
		image: "/radar/wt4104b-front-pcba.png",
		description:
			"A compact FMCW blind-spot detection radar module designed for low-speed vehicles, e-bikes, and safety-assistance applications.",
		category: "Blind-Spot Detection Radar",
	},
] as const;

export const CONTACT_FAQS = [
	{
		question: "How quickly can I get a sample for evaluation?",
		answer:
			"Standard samples are typically shipped within 3-5 business days after confirmation. For custom specifications, lead time depends on your requirements. Contact us to discuss.",
	},
	{
		question: "Do you support custom sensor sensitivity or packaging?",
		answer:
			"Yes. We offer custom sensitivity adjustment, threshold tuning, and SMD/through-hole packaging options depending on the product line. Share your requirements and our engineering team will evaluate feasibility.",
	},
	{
		question: "What is the minimum order quantity (MOQ)?",
		answer:
			"Our standard MOQ is 1,000 pcs for most products. For prototyping and evaluation purposes, we can often accommodate smaller quantities. Please inquire directly.",
	},
	{
		question: "What certifications do your products carry?",
		answer:
			"Our products comply with RoHS directive and are manufactured under ISO 9001 quality management. PCBA production meets IPC-A-610 standards. Additional certifications are available upon request.",
	},
	{
		question: "Can you provide design-in support and application engineering?",
		answer:
			"Absolutely. We provide reference schematics, integration guides, and direct engineering support throughout your development cycle, from component selection to mass production.",
	},
] as const;
