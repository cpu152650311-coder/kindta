"use client";

import { useEffect, useRef, useState } from "react";

export default function BlogPostInteractiveDemo({ slug }: { slug: string }) {
	const [shakeActive, setShakeActive] = useState(false);
	const [shakeCount, setShakeCount] = useState(0);
	const [tiltAngle, setTiltAngle] = useState(0);
	const [holdActive, setHoldActive] = useState(false);
	const [pulseCount, setPulseCount] = useState(0);
	const [scopeActive, setScopeActive] = useState(false);
	const holdTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const shakeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const scopeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (holdTimerRef.current) clearInterval(holdTimerRef.current);
			if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
			if (scopeTimerRef.current) clearTimeout(scopeTimerRef.current);
		};
	}, []);

	const startHold = () => {
		setHoldActive(true);
		holdTimerRef.current = setInterval(() => {
			setPulseCount((count) => Math.min(count + 1, 10));
		}, 300);
	};

	const stopHold = () => {
		setHoldActive(false);
		if (holdTimerRef.current) clearInterval(holdTimerRef.current);
		setTimeout(() => setPulseCount(0), 1500);
	};

	const doShake = () => {
		setShakeActive(true);
		setShakeCount((count) => count + 1);
		if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
		shakeTimerRef.current = setTimeout(() => setShakeActive(false), 1200);
	};

	const doScope = () => {
		setScopeActive(true);
		if (scopeTimerRef.current) clearTimeout(scopeTimerRef.current);
		scopeTimerRef.current = setTimeout(() => setScopeActive(false), 2000);
	};

	if (slug === "kd1902s") {
		return (
			<div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
				<p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">
					Interactive Demo
				</p>
				<h3 className="text-white font-bold text-lg mb-4">360° Detection Logic Simulator</h3>
				<div className="flex flex-col sm:flex-row items-center gap-6">
					<div className="relative w-32 h-32 shrink-0">
						<div
							className={`absolute inset-0 rounded-full border-2 ${shakeActive ? "border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.6)]" : "border-gray-600"} transition-all duration-300`}
						/>
						<div
							className={`absolute inset-3 rounded-full border ${shakeActive ? "border-green-500" : "border-gray-700"} transition-all duration-300`}
						/>
						<div
							className={`absolute inset-0 flex items-center justify-center transition-transform duration-100 ${shakeActive ? "animate-bounce" : ""}`}
						>
							<div
								className={`w-4 h-4 rounded-full ${shakeActive ? "bg-green-400" : "bg-gray-500"} transition-colors`}
							/>
						</div>
						<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">
							KD1902S
						</span>
					</div>
					<div className="flex-1 space-y-3">
						<div className="bg-gray-900 rounded-xl p-3 font-mono text-xs space-y-1.5">
							<div className="flex justify-between">
								<span className="text-gray-500">Movement Axis:</span>
								<span className={shakeActive ? "text-green-400" : "text-gray-400"}>
									{shakeActive ? "XY ±360°" : "Static"}
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-500">Pulse Output:</span>
								<span className={shakeActive ? "text-yellow-400" : "text-gray-400"}>
									{shakeActive ? "LOW (Bridged)" : "HIGH (Open)"}
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-500">Trigger Count:</span>
								<span className="text-blue-400">{shakeCount}</span>
							</div>
						</div>
						<div
							className={`text-center text-xs font-bold py-2 rounded-xl ${shakeActive ? "bg-green-600 text-white" : "bg-gray-800 text-gray-500"} transition-colors`}
						>
							{shakeActive ? "WAKE-UP TRIGGERED" : "SYSTEM SLEEPING"}
						</div>
						<button
							onClick={doShake}
							className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
						>
							Random Shake
						</button>
					</div>
				</div>
			</div>
		);
	}

	if (slug === "kd1901s") {
		return (
			<div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
				<p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">
					Interactive Lab
				</p>
				<h3 className="text-white font-bold text-lg mb-4">Virtual Oscilloscope - KD1901S</h3>
				<div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono">
					<div className="flex justify-between text-xs text-gray-500 mb-2">
						<span>Signal Monitor: KD1901S</span>
						<span>VCC: 3.3V - 10ms/div</span>
					</div>
					<div className="h-16 flex items-end gap-0.5 border-b border-gray-700">
						{Array.from({ length: 40 }).map((_, i) => {
							const pulse = scopeActive && (i % 4 === 0 || i % 4 === 1);
							return (
								<div
									key={i}
									className={`flex-1 transition-all duration-75 ${pulse ? "bg-green-400 h-full" : "bg-gray-700 h-1"}`}
									style={{ transitionDelay: `${i * 20}ms` }}
								/>
							);
						})}
					</div>
					<div
						className={`mt-2 text-center text-xs font-bold ${scopeActive ? "text-green-400" : "text-gray-600"}`}
					>
						{scopeActive ? "WAKE-UP SIGNAL DETECTED" : "NO SIGNAL"}
					</div>
				</div>
				<button
					onClick={doScope}
					className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
				>
					Simulate Vibration
				</button>
			</div>
		);
	}

	if (slug === "kd1912") {
		return (
			<div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
				<p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">
					Interactive Simulation
				</p>
				<h3 className="text-white font-bold text-lg mb-4">MCU Wake-Up Filter Logic - KD1912</h3>
				<div className="bg-gray-900 rounded-xl p-4 mb-4">
					<div className="flex justify-between items-center mb-3">
						<span className="text-xs text-gray-400">Pulse Counter (Filter Accumulator)</span>
						<span className="text-xs text-gray-500">5M Cycles Rated</span>
					</div>
					<div className="flex gap-1 mb-3">
						{Array.from({ length: 10 }).map((_, i) => (
							<div
								key={i}
								className={`flex-1 h-6 rounded transition-colors duration-150 ${i < pulseCount ? (pulseCount >= 5 ? "bg-green-500" : "bg-yellow-500") : "bg-gray-700"}`}
							/>
						))}
					</div>
					<div className="flex justify-between text-xs font-mono">
						<span className="text-gray-500">
							Raw Pulses: <span className="text-white">{pulseCount}</span>
						</span>
						<span className="text-gray-500">
							Wake Threshold: <span className="text-yellow-400">5</span>
						</span>
					</div>
					<div
						className={`mt-3 text-center text-xs font-bold py-2 rounded-xl ${pulseCount >= 5 ? "bg-green-600 text-white" : "bg-gray-800 text-gray-500"} transition-colors`}
					>
						{pulseCount >= 5 ? "SYSTEM AWAKE" : "SYSTEM SLEEPING"}
					</div>
				</div>
				<button
					onMouseDown={startHold}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={startHold}
					onTouchEnd={stopHold}
					className={`w-full font-semibold py-2.5 rounded-xl text-sm transition-colors select-none ${holdActive ? "bg-yellow-500 text-gray-900" : "bg-green-600 hover:bg-green-500 text-white"}`}
				>
					{holdActive ? "Vibrating..." : "Hold to Vibrate"}
				</button>
			</div>
		);
	}

	if (slug === "kd1918s") {
		return (
			<div className="my-10 bg-gray-950 rounded-2xl p-6 text-white">
				<p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">
					Interactive Demo
				</p>
				<h3 className="text-white font-bold text-lg mb-4">KD1918S Tilt Angle Simulator</h3>
				<div className="bg-gray-900 rounded-xl p-4 mb-4">
					<div className="flex items-center justify-center mb-4" style={{ height: 80 }}>
						<div
							className="relative w-16 h-16 flex items-center justify-center"
							style={{ transform: `rotate(${tiltAngle}deg)`, transition: "transform 0.1s ease" }}
						>
							<div
								className={`w-16 h-16 rounded-full border-4 ${Math.abs(tiltAngle) > 30 ? "border-red-500" : "border-green-400"} flex items-center justify-center transition-colors`}
							>
								<div
									className={`w-5 h-5 rounded-full ${Math.abs(tiltAngle) > 30 ? "bg-red-500" : "bg-green-400"} transition-colors`}
								/>
							</div>
						</div>
					</div>
					<input
						type="range"
						min={-90}
						max={90}
						value={tiltAngle}
						onChange={(e) => setTiltAngle(Number(e.target.value))}
						className="w-full accent-green-500 mb-3"
					/>
					<div className="flex justify-between text-xs text-gray-500 mb-3">
						<span>-90° (Left)</span>
						<span>0° (Upright)</span>
						<span>+90° (Right)</span>
					</div>
					<div className="grid grid-cols-3 gap-2 font-mono text-xs">
						<div className="bg-gray-800 rounded-lg p-2 text-center">
							<div className="text-gray-500 mb-1">Tilt Angle</div>
							<div className="text-white font-bold">{tiltAngle}°</div>
						</div>
						<div className="bg-gray-800 rounded-lg p-2 text-center">
							<div className="text-gray-500 mb-1">Output</div>
							<div
								className={`font-bold ${Math.abs(tiltAngle) > 30 ? "text-red-400" : "text-green-400"}`}
							>
								{Math.abs(tiltAngle) > 30 ? "LOW" : "HIGH"}
							</div>
						</div>
						<div className="bg-gray-800 rounded-lg p-2 text-center">
							<div className="text-gray-500 mb-1">Status</div>
							<div
								className={`font-bold ${Math.abs(tiltAngle) > 30 ? "text-red-400" : "text-green-400"}`}
							>
								{Math.abs(tiltAngle) > 30 ? "TRIGGER" : "NORMAL"}
							</div>
						</div>
					</div>
					<p className="text-xs text-gray-600 mt-2 text-center">Trigger threshold: ±30°</p>
				</div>
			</div>
		);
	}

	return null;
}
