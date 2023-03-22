"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function CharCard(props: {
    kana: string;
    romaji: string;
}) {
    const { kana, romaji } = props;
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("p", { opacity: [0, 1] }, { duration: 0.5 });
    });

    return (
        <div className="flex flex-col items-center rounded-3xl border border-neutral-300 sm:flex-row" ref={scope}>
            <p className="flex-1 border-b border-neutral-300 p-20 text-6xl sm:border-r sm:border-b-0">
                {kana}
            </p>
            <p className="flex-1 p-20 text-6xl text-neutral-400">
                {romaji}
            </p>
        </div>
    );
}