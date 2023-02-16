import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="mx-auto flex flex-col w-fit flex-wrap items-center justify-center p-20">
			<h4 className="text-6xl text-gray-300 mb-5">Studying Next.js</h4>
			<p className="text-2xl">heavily inspired by <a className="text-gray-600" href="https://jp-eight.vercel.app/kanji/">Nanda Syahrasyad</a></p>
		</div>
	);
}
