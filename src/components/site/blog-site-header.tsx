"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import ContactModalButton from "@/components/contact/contact-modal-button";
import { PRODUCT_MENU } from "@/lib/blog-page-data";

export default function BlogSiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white/95 backdrop-blur-sm"}`}
		>
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
										<ContactModalButton
											label="Request Sample"
											className="w-full mt-3 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
										/>
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
						{PRODUCT_MENU.map((item) => (
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
	);
}
