'use client';

interface Kana {
	kana: string;
	romaji: string;
	type: string;
}

import Link from "next/link";
import AnimatedButton from "@/components/animatedButton";
import { useEffect, useState } from "react";

export default function CharList(props: { list: { romaji: string; kana: string; }[], link: string }) {

    const [hiragana, setHiragana] = useState<{ romaji: string; kana: string; }[]>([]);

    useEffect(() => {
        setHiragana(props.list);
    }, [props.list]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const search = e.target.value;
		const filtered = props.list.filter((kana) => {
			return kana.romaji.includes(search);
		});
        setHiragana(filtered);
	};

    return (
        <>
            <div className="flex flex-row items-center justify-around p-20 pb-0">
				<input type="text" className="w-96 p-4 h-12 rounded-md border border-zinc-700 bg-neutral-900 text-neutral-100" onChange={handleSearch} />
				<AnimatedButton text="Start Quiz" link="/hiragana/quiz" />
			</div>
            <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-3 p-20">
				{hiragana.map((kata) => {
					return (
						<Link
							href={"/" + props.link + "/" + kata.romaji}
							key={kata.romaji + "-" + kata.kana}
							className="flex w-24 aspect-square bg-neutral-900 border border-zinc-700 rounded-md flex-col items-center p-5 transition-colors duration-500 hover:bg-zinc-700"
						>
							<p className="text-4xl">{kata.kana}</p>
							<p className="text-sm text-neutral-400">{kata.romaji}</p>
						</Link>
					);
				})}
			</div>
        </>
    );
}