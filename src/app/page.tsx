import AnimatedText from "@/components/animatedText";
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
	return (
		<div className="mx-auto flex flex-col w-fit flex-wrap items-center justify-center p-20">
			<AnimatedText text="日本語の練習" />
			<p className="text-2xl">Probo nihil mucius mel ne, eos vocent vidisse labores ne, eu sonet regione adolescens his</p>
			{/* <p className="text-2xl">heavily inspired by <a className="text-gray-600" href="https://jp-eight.vercel.app/kanji/">Nanda Syahrasyad</a></p> */}
		</div>
	);
}
