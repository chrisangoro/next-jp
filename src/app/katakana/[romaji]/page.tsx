import { getIndividualKatakana } from "@/lib/kanas";

export default async function KatakanaPage({ params }: { params: {romaji: string } }) {
    const kana = await getIndividualKatakana(params.romaji);

    return (
        <div className='mx-auto w-fit flex items-center justify-center flex-wrap p-20'>
            { kana.kana === "" ? 
                (<p className='text-4xl'>Not Found</p>) : 
                (
                    <div className="flex items-center border border-gray-300 rounded-3xl">
                        <p className='text-6xl p-20 border-r border-gray-300 flex-1'>{ kana.kana }</p>
                        <p className='text-6xl text-gray-400 p-20 flex-1'>{ kana.romaji }</p>        
                    </div>
                )
            }
        </div>
    );
}