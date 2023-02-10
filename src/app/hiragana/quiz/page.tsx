import { getRandomHiragana, getHiragana } from "@/lib/kanas";
import Quiz from "@/components/quiz";

export default async function HiraganaQuiz() {
	const hiragana = await getRandomHiragana();
	const hiraganaList = await getHiragana();

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center p-20">
			<Quiz hiragana={hiragana.kana} hiraganaList={hiraganaList} />
		</div>
	);
}
