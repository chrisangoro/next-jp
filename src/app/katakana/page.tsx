import Link from "next/link";
import { getKatakana } from "@/lib/kanas";

export default async function Katakana() {
	const katakana = await getKatakana();

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center p-20">
			{katakana.map((kata) => {
				return (
					<Link
						href={"/katakna/" + kata.romaji}
						key={"katakana-" + kata.romaji + "-" + kata.kana}
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
