import CharCard from "@/components/charCard";
import { getIndividualHiragana } from "@/lib/kanas";

export default async function HiraganaPage({
	params,
}: {
	params: { romaji: string };
}) {
	const kana = await getIndividualHiragana(params.romaji);

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center p-20">
			{kana.kana === "" ? (
				<p className="text-4xl">Not Found</p>
			) : (
				<CharCard kana={kana.kana} romaji={kana.romaji} />
			)}
		</div>
	);
}
