"use client";

import { motion, useAnimate } from "framer-motion";

export default function AnimatedButton(props: {
    text: string;
    link: string;
}) {
    const { text, link } = props;
    const [scope, animate] = useAnimate();

    return (
        <motion.button 
            className="bg-neutral-900 border border-zinc-700 rounded-md px-5 py-3"
            whileHover={{
                backgroundColor: "#FFC9B5",
                color: "#171717",
                transition: { duration: 0.8 },
            }}
        >
            <a href={link}>{text}</a>
        </motion.button>
    );
}