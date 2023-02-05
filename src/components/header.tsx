import Link from 'next/link';

export default function Header () {
    return (
        <div className="flex w-full py-4 px-6 font-mono justify-between">
            <h1><Link href="/">JP</Link></h1>
            <div>
                <Link href="/hiragana" className="text-gray-400 hover:text-gray-200 hover:underline">Hiragana</Link>
                <span className="text-gray-500 mx-4">/</span>
                <Link href="/katakana" className="text-gray-400 hover:text-gray-200 hover:underline">Katakana</Link>
            </div>
        </div>
    );
}