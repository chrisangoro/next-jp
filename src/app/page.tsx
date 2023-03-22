import AnimatedText from "@/components/animatedText";
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
	return (
		<div className="mx-auto flex flex-col w-fit flex-wrap items-center justify-center p-20">
			<AnimatedText text="Testing Animations" />
			<p className="text-2xl text-center w-3/4">I made this because I was bored. Click on the links in the top menu to go to the other pages.</p>
			{/* <p className="text-2xl">heavily inspired by <a className="text-neutral-600" href="https://jp-eight.vercel.app/kanji/">Nanda Syahrasyad</a></p> */}
		</div>
	);
}
