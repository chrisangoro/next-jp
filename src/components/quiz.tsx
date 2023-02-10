"use client";

import { KeyboardEvent, useState, useEffect } from "react";

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

	useEffect(() => {
		if (result === "incorrect") {
			setTimeout(() => {
				setResult("");
			}, 500);
		}
	}, [result]);

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setResult("");
			const romaji = e.currentTarget.value;

			props.hiraganaList.find(
				(kanaObj: Kana) =>
					kanaObj.kana === props.hiragana && kanaObj.romaji === romaji
			)
				? setResult("correct")
				: setResult("incorrect");
		}
	};

	return (
		<div
			className={
				"flex flex-col items-center rounded-3xl border border-gray-300 text-center sm:flex-row " +
				result
			}
		>
			<p className="w-full border-b border-gray-300 p-20 text-6xl  sm:w-auto sm:border-r sm:border-b-0">
				{props.hiragana}
			</p>
			<input
				onKeyDown={(e) => onEnter(e)}
				name="pronunctiation"
				className="w-full rounded-b-3xl p-20 text-center text-6xl text-gray-400 sm:rounded-r-3xl sm:rounded-bl-none sm:text-left"
				type="text"
			></input>
		</div>
	);
}
