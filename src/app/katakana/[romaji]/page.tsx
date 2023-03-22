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
				<div className="flex flex-col items-center rounded-3xl border border-gray-300 sm:flex-row">
					<p className="flex-1 border-b border-gray-300 p-20 text-6xl sm:border-r sm:border-b-0">
						{kana.kana}
					</p>
					<p className="flex-1 p-20 text-6xl text-gray-400">
						{kana.romaji}
					</p>
				</div>
			)}
		</div>
	);
}
