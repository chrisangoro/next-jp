"use client";

import { motion } from "framer-motion";

export default function AnimatedText(props: { text: string }) {
    const chars = [...props.text];

    return (
        <h4 className="text-6xl text-[#FFC9B5] mb-5">
            {chars.map((char, index) => {
                return (
                    <>
                        <motion.span
                            animate={{ y: [-30, 0], opacity: [0, 1], color: ["#000", "#FFFFFF", "#FFC9B5"] }}
                            transition={{ duration: 0.8, delay: index * 0.1}}
                            className="inline-block opacity-0"
                            key={index}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    </>
                )
            })}
        </h4>
    )
}