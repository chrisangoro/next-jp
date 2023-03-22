import CharCard from "@/components/charCard";
import { getIndividualKatakana } from "@/lib/kanas";

export default async function KatakanaPage({
	params,
}: {
	params: { romaji: string };
}) {
	const kana = await getIndividualKatakana(params.romaji);

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center p-20">
			{kana.kana === "" ? (
				<p className="text-4xl">Katakana { params.romaji } Not Found</p>
			) : (
				<CharCard kana={kana.kana} romaji={kana.romaji} />
			)}
		</div>
	);
}
