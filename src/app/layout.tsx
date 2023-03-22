import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from '@next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`${inter.variable} bg-stone-900 font-sans flex min-h-screen flex-col justify-between`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
