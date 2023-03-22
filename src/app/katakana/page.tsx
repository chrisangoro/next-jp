import Link from "next/link";
import { getKatakana } from "@/lib/kanas";

export default async function Katakana() {
	const katakana = await getKatakana();

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-3 p-20">
			{katakana.map((kata) => {
				return (
					<Link
						href={"/katakana/" + kata.romaji}
						key={"katakana-" + kata.romaji + "-" + kata.kana}
						className="flex w-24 aspect-square bg-zinc-900 border border-zinc-500 rounded-md flex-col items-center p-5 hover:bg-zinc-500"
					>
						<p className="text-4xl">{kata.kana}</p>
						<p className="text-sm text-gray-400">{kata.romaji}</p>
					</Link>
				);
			})}
		</div>
	);
}
