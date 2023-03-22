import Link from "next/link";

export default function Header() {
	return (
		<div className="flex w-full justify-between py-4 px-6 font-mono">
			<h1>
				<Link href="/">JP</Link>
			</h1>
			<div>
				<Link
					href="/hiragana"
					className="text-neutral-400 hover:text-neutral-200 hover:underline"
				>
					Hiragana
				</Link>
				<span className="mx-4 text-neutral-500">/</span>
				<Link
					href="/katakana"
					className="text-neutral-400 hover:text-neutral-200 hover:underline"
				>
					Katakana
				</Link>
			</div>
		</div>
	);
}
