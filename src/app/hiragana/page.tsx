import Link from 'next/link';
import { getHiragana } from '@/lib/kanas';

export default async function Hiragana() {
    const hiragana = await getHiragana();

    return (
        <div className='mx-auto w-fit flex items-center justify-center flex-wrap p-20'>
            {hiragana.map((kata) => {
                return (
                    <Link href={'/hiragana/' + kata.romaji} key={kata.romaji + '-' + kata.kana} className="w-1/3 p-5 flex flex-col items-center md:w-1/5">
                        <p className='text-4xl'>{kata.kana}</p>
                        <p className='text-sm text-gray-400'>{kata.romaji}</p>
                    </Link>
                );
            }) }
        </div>
    );
}