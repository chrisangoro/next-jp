export default function Header () {
    return (
        <div className="flex w-full py-4 px-6 font-mono justify-between">
            <h1><a href="/">JP</a></h1>
            <div>
                <a href="/hiragana" className="text-gray-400 hover:text-gray-200 hover:underline">Hiragana</a>
                <span className="text-gray-500 mx-4">/</span>
                <a href="/katakana" className="text-gray-400 hover:text-gray-200 hover:underline">Katakana</a>
            </div>
        </div>
    );
}