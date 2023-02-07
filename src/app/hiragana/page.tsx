import Link from "next/link";
import { getHiragana } from "@/lib/kanas";

export default async function Hiragana() {
	const hiragana = await getHiragana();

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center p-20">
			{hiragana.map((kata) => {
				return (
					<Link
						href={"/hiragana/" + kata.romaji}
						key={kata.romaji + "-" + kata.kana}
						className="flex w-1/3 flex-col items-center p-5 md:w-1/5"
					>
						<p className="text-4xl">{kata.kana}</p>
						<p className="text-sm text-gray-400">{kata.romaji}</p>
					</Link>
				);
			})}
		</div>
	);
}
