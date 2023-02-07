import { getRandomHiragana } from "@/lib/kanas";

export default async function HiraganaQuiz() {
	const hiragana = await getRandomHiragana();

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center p-20">
			<div className="flex flex-col items-center rounded-3xl border border-gray-300 text-center sm:flex-row">
				<p className="w-full border-b border-gray-300 p-20 text-6xl  sm:w-auto sm:border-r sm:border-b-0">
					{hiragana.kana}
				</p>
				<input
					name="pronunctiation"
					className="w-full rounded-b-3xl p-20 text-center text-6xl text-gray-400 sm:rounded-r-3xl sm:rounded-bl-none sm:text-left"
					type="text"
				></input>
			</div>
		</div>
	);
}
