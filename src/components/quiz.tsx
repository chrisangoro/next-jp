"use client";

import { KeyboardEvent, useState, useEffect } from "react";
import { useAnimate } from "framer-motion";

interface Kana {
	kana: string;
	romaji: string;
	type: string;
}

export default function Quiz(props: {
	hiragana: string;
	hiraganaList: Kana[];
}) {
	const [result, setResult] = useState<string>("");
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate("p", { x: [-30, 0], opacity: [0, 1] }, { duration: 0.5 })
	});

	useEffect(() => {
		if (result === "correct") {
			animate("p", { backgroundColor: ['#000000', '#166534'] }, { duration: 0.8 });
		}
		if (result === "incorrect") {
			animate(scope.current, { x: [0, 15, 0, 15, 0] }, { duration: 1 });
			animate("p", { backgroundColor: ['#000000', '#991B1B', '#000000'] }, { duration: 5 });
			setResult("");
		}
	}, [result]);

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setResult("");
			const romaji = e.currentTarget.value;

			props.hiraganaList.find(
				(kanaObj: Kana) =>
					kanaObj.kana === props.hiragana && kanaObj.romaji === romaji
			) ? setResult("correct") : setResult("incorrect");
		}
	};

	return (
		<>
			<div
				className="grid grid-cols-[350px_auto] rounded-3xl border border-neutral-300 text-center w-full"
				ref={scope}
			>
				<p
					className="w-full border-b opacity-0 border-neutral-300 p-20 text-6xl sm:rounded-l-3xl sm:w-auto sm:border-b-0"
				>
					{props.hiragana}
				</p>
				<input
					onKeyDown={(e) => onEnter(e)}
					name="pronunctiation"
					className="w-full rounded-b-3xl p-20 text-center text-6xl text-neutral-400 sm:rounded-r-3xl sm:rounded-bl-none sm:text-left sm:border-l"
					type="text"
				></input>
			</div>

			{/* <p className="mt-16 text-[#FFC9B5] text-xl">Write the pronunctiation for the given char</p> */}
		</>
	);
}
