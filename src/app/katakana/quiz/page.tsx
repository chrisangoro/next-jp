import { getRandomKatakana, getKatakana } from "@/lib/kanas";
import Quiz from "@/components/quiz";

export default async function HiraganaQuiz() {
	const katakana = await getRandomKatakana();
	const katakanaList = await getKatakana();

	return (
		<div className="mx-auto flex w-fit flex-wrap items-center justify-center p-20">
			<Quiz hiragana={katakana.kana} hiraganaList={katakanaList} />
		</div>
	);
}