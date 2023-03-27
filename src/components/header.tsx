import Link from "next/link";
import Image from "next/image";
import kudot from "../assets/kudot.svg";

export default function Header() {
	return (
		<div className="flex w-full justify-between py-4 px-6 font-mono">
			<h1>
				<Link href="/" className="flex flex-row items-center text-neutral-400">
					<Image src={kudot} alt="logo" className="h-[20px] w-auto mr-2" />JP
				</Link>
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
