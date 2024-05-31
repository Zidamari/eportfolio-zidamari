"use client";
import { Download } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const downloads = [
	{
		icon: <Download size={20} />,
		label: "Resume",
		handle: "Download Resume",
		href: "#",
	},
	{
		icon: <Download size={20} />,
		label: "Site Screenshot",
		handle: "Download Screenshot",
		href: "#",
	},
];

export default function DownloadPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
					{downloads.map((d) => (
						<Card key={d.label}>
							<Link
								href={d.href}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{d.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{d.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{d.label}
									</span>
								</div>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									This download is currently under construction. Please check back later.
								</span>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
