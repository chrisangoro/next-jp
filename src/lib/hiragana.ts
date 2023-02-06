import * as fs from "fs/promises";

export type Kana = {
    kana: string;
    romaji: string;
    type: string;
}

const getHiraganaList = async () => {
    const hiragana = JSON.parse(await fs.readFile("src/data/hiragana.json", "utf-8"));
    return hiragana as Kana[];
};

export async function getHiragana(): Promise<Kana[]> {
    const hiragana = await getHiraganaList();
    return hiragana;
}

export async function getIndividualHiragana(romaji: string): Promise<Kana> {
    const hiragana = await getHiraganaList();
    return hiragana.find((kanaObj: Kana) => kanaObj.romaji === romaji) || { kana: "", romaji: "", type: "" };
}