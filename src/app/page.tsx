'use client'

import { useEffect, useRef, useState } from 'react'

const CheckSm = () => (
	<svg className="w-5 h-5 text-[#00D4AA] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
		<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
	</svg>
)

const CheckLg = () => (
	<svg className="w-6 h-6 text-[#00D4AA] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
		<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
	</svg>
)

export default function CadebotPage() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const specsRef = useRef<HTMLElement>(null)

	const toggleModal = () => setIsModalOpen((prev) => !prev)

	const scrollToSpecs = () => {
		specsRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false)
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isModalOpen])

	useEffect(() => {
		document.body.style.overflow = isModalOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isModalOpen])

	return (
		<div className="bg-[#F8FAFB]">
			{/* ===== HEADER ===== */}
			<header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
				<nav className="container mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<img
							src="https://placehold.co/180x50/0066FF/FFFFFF?text=UBTECH+ROBOTICS&font=montserrat"
							alt="UBTECH Robotics"
							className="h-12"
						/>
					</div>

					<ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
						<li><a href="/" className="hover:text-[#0066FF] transition">Home</a></li>
						<li><a href="/products" className="text-[#0066FF] font-semibold">Products</a></li>
						<li><a href="/solutions" className="hover:text-[#0066FF] transition">Solutions</a></li>
						<li><a href="/technology" className="hover:text-[#0066FF] transition">Technology</a></li>
						<li><a href="/about" className="hover:text-[#0066FF] transition">About Us</a></li>
						<li><a href="/support" className="hover:text-[#0066FF] transition">Support</a></li>
					</ul>

					<button
						type="button"
						onClick={toggleModal}
						className="hidden md:block bg-[#0066FF] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0052CC] transition shadow-md"
					>
						Get a Quote
					</button>

					<button
						type="button"
						className="md:hidden text-gray-700"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</nav>

				{isMobileMenuOpen && (
					<div className="md:hidden bg-white border-t">
						<ul className="flex flex-col space-y-4 px-6 py-4">
							<li><a href="/" className="block hover:text-[#0066FF]">Home</a></li>
							<li><a href="/products" className="block text-[#0066FF] font-semibold">Products</a></li>
							<li><a href="/solutions" className="block hover:text-[#0066FF]">Solutions</a></li>
							<li><a href="/technology" className="block hover:text-[#0066FF]">Technology</a></li>
							<li><a href="/about" className="block hover:text-[#0066FF]">About Us</a></li>
							<li><a href="/support" className="block hover:text-[#0066FF]">Support</a></li>
						</ul>
					</div>
				)}
			</header>
			<div className="h-20" />

			{/* ===== HERO SECTION ===== */}
			<section className="relative bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#00D4AA] text-white overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
					<div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
				</div>

				<div className="container mx-auto px-6 py-20 relative z-10">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="animate-slide-up">
							<div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
								🏆 2024 Red Dot Design Award Winner
							</div>
							<h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
								CADEBOT L100<br />
								<span className="text-[#00D4AA]">Smart Delivery Robot</span>
							</h1>
							<p className="text-xl mb-8 text-gray-100 leading-relaxed">
								AI-powered autonomous delivery solution for restaurants, hotels, and hospitals.
								Reduce labor costs by <strong className="text-[#00D4AA]">40%</strong> while improving service efficiency.
							</p>

							<div className="flex flex-wrap gap-4 mb-8">
								{[
									{ value: '60kg', label: 'Max Payload' },
									{ value: '24h', label: 'Continuous Work' },
									{ value: '99.8%', label: 'Delivery Accuracy' },
								].map((stat) => (
									<div key={stat.label} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
										<div className="text-3xl font-bold text-[#00D4AA]">{stat.value}</div>
										<div className="text-sm">{stat.label}</div>
									</div>
								))}
							</div>

							<div className="flex flex-wrap gap-4">
								<button
									type="button"
									onClick={toggleModal}
									className="bg-white text-[#0066FF] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
								>
									Request Demo →
								</button>
								<button
									type="button"
									onClick={scrollToSpecs}
									className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0066FF] transition-all duration-300"
								>
									View Specs
								</button>
							</div>
						</div>

						<div className="flex justify-center">
							<img
								src="https://placehold.co/600x700/FFFFFF/0066FF?text=CADEBOT+L100+3D+View"
								alt="CADEBOT L100 Robot"
								className="w-full max-w-md animate-float product-3d drop-shadow-2xl"
							/>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0">
					<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#F8FAFB" />
					</svg>
				</div>
			</section>

			{/* ===== KEY FEATURES ===== */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Why Choose CADEBOT L100?</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Revolutionary AI technology meets practical business needs. Proven by 500+ restaurants worldwide.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: '🧠',
								title: 'SLAM 3.0 Navigation',
								desc: 'Advanced LiDAR + Vision fusion for obstacle avoidance in crowded spaces. Self-charging, automatic elevator calling, multi-floor delivery.',
								features: ['360° environment perception', 'Dynamic path planning in real-time', '1cm positioning accuracy'],
							},
							{
								icon: '📦',
								title: 'Modular Tray System',
								desc: '4-layer adjustable trays supporting dishes, drinks, and hotpot. Food-grade materials, automatic tray detection, spill-proof design.',
								features: ['4 independent trays (15kg each)', 'Height adjustable (10cm range)', 'Easy cleaning & disinfection'],
							},
							{
								icon: '💬',
								title: 'Smart Interaction',
								desc: '13.3" HD touchscreen + voice commands in 8 languages. Customizable branding, multimedia ads, customer satisfaction ratings.',
								features: ['Natural language understanding', 'Animated facial expressions', 'Real-time data analytics dashboard'],
							},
						].map((feature) => (
							<div
								key={feature.title}
								className="group bg-gradient-to-br from-[#F8FAFB] to-white p-8 rounded-2xl border border-gray-200 hover:border-[#0066FF] hover:shadow-2xl transition-all duration-300"
							>
								<div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#00D4AA] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
									{feature.icon}
								</div>
								<h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{feature.title}</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">{feature.desc}</p>
								<ul className="space-y-2 text-sm text-gray-700">
									{feature.features.map((f) => (
										<li key={f} className="flex items-start">
											<CheckSm />
											<span>{f}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== VIDEO SECTION ===== */}
			<section className="py-20 bg-gradient-to-br from-[#F8FAFB] to-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">See CADEBOT L100 in Action</h2>
						<p className="text-xl text-gray-600">Watch how restaurants increase efficiency by 60% with autonomous delivery</p>
					</div>

					<div className="max-w-5xl mx-auto">
						<div className="video-container rounded-2xl shadow-2xl overflow-hidden border-4 border-[#0066FF]">
							<img
								src="https://placehold.co/1920x1080/1A1A1A/00D4AA?text=CADEBOT+L100+Demo+Video"
								alt="CADEBOT L100 Demo Video"
								className="w-full cursor-pointer hover:opacity-90 transition"
							/>
						</div>
						<div className="text-center mt-6">
							<button
								type="button"
								onClick={toggleModal}
								className="bg-[#0066FF] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0052CC] hover:shadow-xl transition-all duration-300"
							>
								Schedule Live Demo →
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ===== TECHNICAL SPECIFICATIONS ===== */}
			<section ref={specsRef} className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Technical Specifications</h2>
						<p className="text-xl text-gray-600">Enterprise-grade hardware built for 24/7 operations</p>
					</div>

					<div className="max-w-6xl mx-auto">
						<div className="grid md:grid-cols-2 gap-12">
							<div className="flex items-center justify-center">
								<img
									src="https://placehold.co/600x800/F8FAFB/0066FF?text=CADEBOT+L100+Technical+Drawing"
									alt="CADEBOT L100 Technical Specs"
									className="w-full max-w-md rounded-2xl shadow-lg"
								/>
							</div>

							<div className="space-y-0">
								{[
									{ label: 'Model', value: 'CADEBOT L100' },
									{ label: 'Dimensions (H×W×D)', value: '1250×490×545 mm' },
									{ label: 'Weight', value: '58 kg' },
									{ label: 'Max Payload', value: '60 kg', blue: true },
									{ label: 'Tray Configuration', value: '4 layers (15kg each)' },
									{ label: 'Navigation', value: 'LiDAR + RGB-D Camera SLAM 3.0' },
									{ label: 'Speed', value: '0.3 - 1.2 m/s (adjustable)' },
									{ label: 'Battery', value: 'Lithium 24V/60Ah (8-12h runtime)' },
									{ label: 'Charging', value: 'Automatic docking (3h full charge)' },
									{ label: 'Display', value: '13.3" HD Touchscreen' },
									{ label: 'Voice Languages', value: '8 (EN/CN/ES/FR/DE/JP/KR/AR)' },
									{ label: 'Connectivity', value: 'Wi-Fi 6, 4G LTE (optional)' },
									{ label: 'Operating Temp', value: '0°C ~ 40°C' },
									{ label: 'Slope Capability', value: '≤5°' },
									{ label: 'Certification', value: 'CE, FCC, RoHS' },
									{ label: 'Warranty', value: '2 Years + Lifetime Support', green: true },
								].map((row) => (
									<div key={row.label} className="spec-row flex border-b border-gray-200 py-4 px-4 rounded-lg">
										<div className="w-1/2 font-semibold text-gray-700">{row.label}</div>
										<div className={`w-1/2 ${row.blue ? 'font-bold text-[#0066FF]' : row.green ? 'font-bold text-[#00D4AA]' : 'text-gray-900'}`}>
											{row.value}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="text-center mt-12">
							<a
								href="#"
								className="inline-block bg-gradient-to-r from-[#1A1A1A] to-[#0066FF] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
							>
								📥 Download Full Datasheet (PDF)
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ===== APPLICATION SCENARIOS ===== */}
			<section className="py-20 bg-gradient-to-br from-[#F8FAFB] to-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Perfect for Multiple Scenarios</h2>
						<p className="text-xl text-gray-600">Proven in 500+ locations across 20 countries</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								img: 'https://placehold.co/400x300/FFFFFF/0066FF?text=Restaurant+Scene',
								title: 'Restaurants & Cafés',
								features: ['Deliver food from kitchen to tables', 'Return dirty dishes to washing area', 'Reduce staff walking distance by 70%'],
							},
							{
								img: 'https://placehold.co/400x300/FFFFFF/0066FF?text=Hotel+Lobby',
								title: 'Hotels & Resorts',
								features: ['24/7 room service delivery', 'Linen & amenities transport', 'Enhance guest experience & ratings'],
							},
							{
								img: 'https://placehold.co/400x300/FFFFFF/0066FF?text=Hospital+Corridor',
								title: 'Hospitals & Clinics',
								features: ['Medicine & meal delivery to wards', 'Medical waste & linen collection', 'Reduce infection risk & nurse workload'],
							},
							{
								img: 'https://placehold.co/400x300/FFFFFF/0066FF?text=Office+Building',
								title: 'Corporate Offices',
								features: ['Inter-department document delivery', 'Cafeteria food distribution', 'Modern workplace image upgrade'],
							},
						].map((scenario) => (
							<div
								key={scenario.title}
								className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
							>
								<div className="h-48 bg-gradient-to-br from-[#0066FF] to-[#00D4AA]">
									<img src={scenario.img} alt={scenario.title} className="w-full h-full object-cover opacity-80" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{scenario.title}</h3>
									<ul className="space-y-2 text-sm text-gray-700">
										{scenario.features.map((f) => (
											<li key={f} className="flex items-start">
												<span className="text-[#00D4AA] mr-2 font-bold">✓</span>
												<span>{f}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== CASE STUDY ===== */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0066FF] to-[#00D4AA] rounded-3xl overflow-hidden shadow-2xl">
						<div className="grid md:grid-cols-2">
							<div className="min-h-[400px]">
								<img
									src="https://placehold.co/800x600/1A1A1A/00D4AA?text=Haidilao+Hotpot+Case+Study"
									alt="Haidilao Case Study"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="p-12 text-white flex flex-col justify-center">
								<div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
									🏆 Featured Case Study
								</div>
								<h2 className="text-4xl font-bold mb-6">
									Haidilao Hotpot<br />300+ Robots Deployed
								</h2>
								<div className="space-y-4 mb-8">
									{[
										<><strong>40% reduction</strong> in labor costs</>,
										<><strong>200+</strong> delivery trips per robot daily</>,
										<><strong>8-month</strong> ROI period</>,
										<><strong>95%</strong> customer satisfaction increase</>,
									].map((item, i) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: static list
										<div key={i} className="flex items-start">
											<CheckLg />
											<p className="text-lg">{item}</p>
										</div>
									))}
								</div>
								<button
									type="button"
									onClick={toggleModal}
									className="bg-white text-[#0066FF] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-fit"
								>
									Get Your ROI Analysis →
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ===== RELATED PRODUCTS ===== */}
			<section className="py-20 bg-gradient-to-br from-[#F8FAFB] to-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Complete Your Smart Service Fleet</h2>
						<p className="text-xl text-gray-600">Explore other UBTECH robotics solutions</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								img: 'https://placehold.co/400x400/FFFFFF/00D4AA?text=CLEINBOT+M79',
								name: 'CLEINBOT M79',
								type: 'Smart Cleaning Robot',
								desc: 'Autonomous floor scrubbing for commercial spaces. 3000m²/h cleaning efficiency.',
							},
							{
								img: 'https://placehold.co/400x400/FFFFFF/00D4AA?text=CLEINBOT+CC201',
								name: 'CLEINBOT CC201',
								type: 'Carpet Cleaning Machine',
								desc: 'Deep carpet cleaning for hotels & offices. IoT-enabled maintenance.',
							},
							{
								img: 'https://placehold.co/400x400/FFFFFF/00D4AA?text=CRUZR',
								name: 'CRUZR',
								type: 'Humanoid Service Robot',
								desc: 'Interactive reception & guidance robot. Perfect for retail & exhibitions.',
							},
						].map((product) => (
							<div key={product.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
								<div className="h-64 bg-gradient-to-br from-[#1A1A1A] to-[#0066FF] flex items-center justify-center p-6">
									<img
										src={product.img}
										alt={product.name}
										className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{product.name}</h3>
									<p className="text-gray-600 mb-4">{product.type}</p>
									<p className="text-sm text-gray-700 mb-4">{product.desc}</p>
									<div className="flex space-x-3">
										<a
											href="#"
											className="flex-1 text-center border-2 border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#0066FF] hover:text-white transition"
										>
											Learn More
										</a>
										<button
											type="button"
											onClick={toggleModal}
											className="flex-1 bg-[#0066FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0052CC] transition"
										>
											Inquire
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== FAQ SECTION ===== */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
						<p className="text-xl text-gray-600">Everything you need to know about CADEBOT L100</p>
					</div>

					<div className="max-w-4xl mx-auto space-y-4">
						{[
							{
								q: 'How long does it take to deploy CADEBOT L100?',
								a: 'Initial setup takes 2-4 hours including map creation. Our engineers provide on-site training. Most restaurants are fully operational within 1 day. Remote support available 24/7.',
							},
							{
								q: 'What is the ROI timeline?',
								a: 'Average ROI is 8-12 months based on reduced labor costs, increased table turnover, and improved customer experience. Financing options available.',
							},
							{
								q: 'Can it work with our existing POS system?',
								a: 'Yes! CADEBOT L100 integrates with major POS systems via API (Toast, Square, Lightspeed, etc.). We also provide a standalone tablet interface if needed. Custom integrations available.',
							},
							{
								q: 'What maintenance is required?',
								a: 'Daily: Wipe trays & sensors (5 mins). Weekly: Check wheels & charging contacts. Monthly: Software updates (automatic). Annual: Professional servicing included in warranty.',
							},
							{
								q: 'Is it safe around customers and staff?',
								a: 'Absolutely. 360° sensors detect people 5 meters away. Automatic speed reduction near obstacles. Emergency stop button + remote kill switch. Certified to ISO 13482. Over 10 million km driven without a single injury incident globally.',
							},
						].map((faq) => (
							<details
								key={faq.q}
								className="group bg-gradient-to-br from-[#F8FAFB] to-white p-6 rounded-xl border border-gray-200 hover:border-[#0066FF] transition-all cursor-pointer"
							>
								<summary className="flex justify-between items-center font-bold text-lg text-[#1A1A1A] list-none">
									<span>{faq.q}</span>
									<svg
										className="w-6 h-6 text-[#0066FF] group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</summary>
								<p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
							</details>
						))}
					</div>

					<div className="text-center mt-12">
						<p className="text-gray-600 mb-4">Still have questions?</p>
						<button
							type="button"
							onClick={toggleModal}
							className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
						>
							Talk to Our Robotics Expert →
						</button>
					</div>
				</div>
			</section>

			{/* ===== FINAL CTA ===== */}
			<section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00D4AA] text-white">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Transform Your Business?</h2>
					<p className="text-xl mb-10 max-w-3xl mx-auto">
						Join 500+ restaurants worldwide using CADEBOT L100. Schedule your personalized demo today.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							type="button"
							onClick={toggleModal}
							className="bg-white text-[#0066FF] px-12 py-5 rounded-lg font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
						>
							Get a Quote Now →
						</button>
						<a
							href="tel:157xxxxxxxx"
							className="border-2 border-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-[#0066FF] transition-all duration-300 text-center"
						>
							📞 Call: 157xxxxxxxx
						</a>
					</div>
					<p className="text-sm mt-6 opacity-80">✓ Free consultation ✓ ROI calculator ✓ Custom demo at your location</p>
				</div>
			</section>

			{/* ===== FOOTER ===== */}
			<footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-8">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-4 gap-12 mb-12">
						<div>
							<img
								src="https://placehold.co/160x45/0066FF/FFFFFF?text=UBTECH&font=montserrat"
								alt="UBTECH"
								className="mb-4"
							/>
							<p className="text-sm mb-4">Leading Humanoid Robots and Smart Service Robots Company</p>
							<p className="text-sm"><strong>Stock Code:</strong> 9880.HK</p>
						</div>

						<div>
							<h4 className="text-white font-bold mb-4">Products</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#" className="text-[#00D4AA] font-semibold">CADEBOT L100</a></li>
								<li><a href="#" className="hover:text-[#00D4AA] transition">CLEINBOT M79</a></li>
								<li><a href="#" className="hover:text-[#00D4AA] transition">CLEINBOT CC201</a></li>
								<li><a href="#" className="hover:text-[#00D4AA] transition">CRUZR</a></li>
							</ul>
						</div>

						<div>
							<h4 className="text-white font-bold mb-4">Solutions</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#" className="hover:text-[#00D4AA] transition">Smart Catering</a></li>
								<li><a href="#" className="hover:text-[#00D4AA] transition">Smart Cleaning</a></li>
								<li><a href="#" className="hover:text-[#00D4AA] transition">Smart Exhibition</a></li>
								<li><a href="#" className="hover:text-[#00D4AA] transition">Smart Logistics</a></li>
							</ul>
						</div>

						<div>
							<h4 className="text-white font-bold mb-4">Contact Us</h4>
							<ul className="space-y-3 text-sm">
								<li className="flex items-start">
									<svg className="w-5 h-5 mr-2 mt-0.5 text-[#00D4AA] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									<a href="mailto:info@huaxingrobot.com" className="hover:text-[#00D4AA]">info@huaxingrobot.com</a>
								</li>
								<li className="flex items-start">
									<svg className="w-5 h-5 mr-2 mt-0.5 text-[#00D4AA] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
									</svg>
									<span>157xxxxxxxx</span>
								</li>
								<li className="flex items-start">
									<svg className="w-5 h-5 mr-2 mt-0.5 text-[#00D4AA] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
									</svg>
									<span>Shenzhen, China</span>
								</li>
							</ul>
							<button
								type="button"
								onClick={toggleModal}
								className="mt-6 bg-[#0066FF] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#0052CC] transition"
							>
								Request Demo
							</button>
						</div>
					</div>

					<div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
						<p>© 2024 UBTECH Robotics Corp. Ltd. All rights reserved. | Stock Code: 9880.HK</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<a href="#" className="hover:text-[#00D4AA] transition">Privacy Policy</a>
							<a href="#" className="hover:text-[#00D4AA] transition">Terms of Service</a>
							<a href="#" className="hover:text-[#00D4AA] transition">Downloads</a>
						</div>
					</div>
				</div>
			</footer>

			{/* ===== INQUIRY MODAL ===== */}
			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
					onClick={toggleModal}
				>
					<div
						className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-fadeIn"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							type="button"
							onClick={toggleModal}
							className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-2xl font-light transition"
						>
							✕
						</button>

						<div className="mb-6">
							<h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">Get CADEBOT L100 Quote</h3>
							<p className="text-gray-600">Fill out the form below and our robotics expert will contact you within 24 hours</p>
						</div>

						<form
							action="https://formsubmit.co/0939ddf4c80157259be95797bb7d95b8"
							method="POST"
							className="space-y-4"
						>
							<input type="hidden" name="_subject" value="New CADEBOT L100 Inquiry" />
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="table" />
							<input type="hidden" name="product" value="CADEBOT L100" />

							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
									<input
										type="text"
										name="name"
										placeholder="Your full name"
										className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition outline-none"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
									<input
										type="text"
										name="company"
										placeholder="Company name"
										className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition outline-none"
										required
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
									<input
										type="email"
										name="email"
										placeholder="your@email.com"
										className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition outline-none"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
									<input
										type="tel"
										name="phone"
										placeholder="+86 xxx xxxx xxxx"
										className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition outline-none"
										required
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
									<select
										name="industry"
										className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition outline-none"
										required
									>
										<option value="">Select your industry</option>
										<option value="Restaurant">Restaurant & Café</option>
										<option value="Hotel">Hotel & Resort</option>
										<option value="Hospital">Hospital & Healthcare</option>
										<option value="Corporate">Corporate Office</option>
										<option value="Other">Other</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">Quantity Needed</label>
									<input
										type="number"
										name="quantity"
										placeholder="e.g., 3"
										min="1"
										className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition outline-none"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
								<textarea
									name="message"
									placeholder="Tell us about your space, daily order volume, deployment timeline..."
									className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition outline-none"
									rows={4}
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D4AA] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
							>
								Send Inquiry →
							</button>

							<p className="text-xs text-gray-500 text-center mt-4">
								By submitting, you agree to our Privacy Policy. We'll respond within 24 hours.
							</p>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}
