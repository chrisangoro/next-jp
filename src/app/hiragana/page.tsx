import { getHiragana } from "@/lib/kanas";
import CharList from "@/components/charList";

export default async function Hiragana() {
	const hiragana = await getHiragana();
	
	return (
		<>
			<CharList list={hiragana} link="hiragana" />
		</>
	);
}
