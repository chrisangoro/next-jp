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
					className="text-gray-400 hover:text-gray-200 hover:underline"
				>
					Hiragana
				</Link>
				<span className="mx-4 text-gray-500">/</span>
				<Link
					href="/katakana"
					className="text-gray-400 hover:text-gray-200 hover:underline"
				>
					Katakana
				</Link>
			</div>
		</div>
	);
}
