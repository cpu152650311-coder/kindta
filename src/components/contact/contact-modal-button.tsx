"use client";

import { useState } from "react";

import ContactModal from "@/components/contact/contact-modal";

type ContactModalButtonProps = {
	label: string;
	className: string;
	title?: string;
	description?: string;
	placeholder?: string;
};

export default function ContactModalButton({
	label,
	className,
	title,
	description,
	placeholder,
}: ContactModalButtonProps) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button onClick={() => setOpen(true)} className={className}>
				{label}
			</button>
			<ContactModal
				open={open}
				onClose={() => setOpen(false)}
				title={title}
				description={description}
				placeholder={placeholder}
			/>
		</>
	);
}
