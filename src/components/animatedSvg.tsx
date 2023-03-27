'use client';

import { motion } from 'framer-motion';

export default function AnimatedSvg() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0, stroke: "none" },
        visible: (i : any) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                fill: "rgba(163, 163, 163, 0)",
                stroke: "rgba(163, 163, 163, 0.5)",
                transition: {
                    pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { duration: 0.01 },
                },
                transitionEnd: { fill: "rgba(163, 163, 163, 0.3)" }
            };
        }
    };

    return(
        <>
            <motion.svg 
                className="w-96 h-96"
                width="1127" height="1779" viewBox="0 0 1127 1779" fill="none" xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <motion.path
                    variants={draw}
                    custom={1}
                    strokeWidth="5"
                    d="M1081.79 135.624L928.192 0.455933C905.664 37.3199 852.416 96.7119 811.456 137.672C674.24 276.936 362.944 522.696 207.296 651.72C22.976 807.368 0.448029 895.432 192.96 1057.22C385.472 1214.92 694.72 1481.16 840.128 1628.62C889.28 1679.82 938.432 1728.97 981.44 1778.12L1126.85 1645C909.76 1425.86 547.264 1135.05 360.896 981.448C227.776 870.856 229.824 840.136 352.704 733.64C504.256 606.664 799.168 375.24 940.48 252.36C973.248 223.688 1036.74 168.392 1081.79 135.624Z"/>
            </motion.svg>
        </>
    );
}