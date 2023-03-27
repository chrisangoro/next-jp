import AnimatedSvg from "@/components/animatedSvg";
import AnimatedText from "@/components/animatedText";
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
	return (
		// <div className="mx-auto flex flex-col w-fit flex-wrap items-center justify-center p-20">
		<div className="grid grid-cols-[400px_auto] items-center p-20">
			<div>
				<AnimatedSvg />
			</div>
			<div>
				<AnimatedText text="Testing Animations" />
				<p className="text-2xl text-left">I made this because I was bored. Click on the links in the top menu to go to the other pages.</p>
				{/* <p className="text-2xl">heavily inspired by <a className="text-neutral-600" href="https://jp-eight.vercel.app/kanji/">Nanda Syahrasyad</a></p> */}
			</div>
		</div>
	);
}
