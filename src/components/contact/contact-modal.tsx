"use client";

type ContactModalProps = {
	open: boolean;
	onClose: () => void;
	title?: string;
	description?: string;
	subject?: string;
	placeholder?: string;
};

export default function ContactModal({
	open,
	onClose,
	title = "Get a Free Quote",
	description = "We respond within 24 hours.",
	subject = "AD New Inquiry from kingdta Website Contact Form",
	placeholder = "Describe your project requirements...",
}: ContactModalProps) {
	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
			onClick={(e) => e.target === e.currentTarget && onClose()}
		>
			<div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden anim-fade-up">
				<div className="h-1.5 bg-gradient-to-r from-green-400 via-green-600 to-emerald-500" />
				<div className="p-8">
					<div className="flex items-start justify-between mb-6">
						<div>
							<h3 className="text-gray-900 font-bold text-xl mb-1">{title}</h3>
							<p className="text-gray-500 text-sm">{description}</p>
						</div>
						<button
							onClick={onClose}
							className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<form
						action="https://formsubmit.co/046212858f6a8cc4976203100919d247"
						method="POST"
						encType="multipart/form-data"
						className="space-y-4"
					>
						<input type="hidden" name="_next" value="https://kingdta.com/thank-you/" />
						<input type="hidden" name="_subject" value={subject} />
						<input type="hidden" name="_captcha" value="true" />
						<input type="hidden" name="_template" value="table" />
						<input
							type="hidden"
							name="_autoresponse"
							value="Thank you for contacting Kingdta. We have received your inquiry and will respond within 24 hours."
						/>
						<input type="text" name="_honey" style={{ display: "none" }} />
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-xs font-semibold text-gray-700 mb-1.5">Name</label>
								<input
									name="name"
									required
									className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
								<input
									name="email"
									type="email"
									required
									className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
									placeholder="your@email.com"
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-xs font-semibold text-gray-700 mb-1.5">Company</label>
								<input
									name="company"
									className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
									placeholder="Company name"
								/>
							</div>
							<div>
								<label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
								<input
									name="phone"
									className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
									placeholder="+1 xxx xxxx"
								/>
							</div>
						</div>
						<div>
							<label className="block text-xs font-semibold text-gray-700 mb-1.5">Project Details</label>
							<textarea
								name="message"
								rows={3}
								className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
								placeholder={placeholder}
							/>
						</div>
						<div>
							<label className="block text-xs font-semibold text-gray-700 mb-1.5">Attachment</label>
							<input
								name="attachment"
								type="file"
								accept="*/*"
								className="w-full text-sm text-gray-500 border border-gray-200 rounded-xl px-4 py-2 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20"
						>
							Send Inquiry
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
