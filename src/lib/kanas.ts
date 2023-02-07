import * as fs from "fs/promises";
import path from 'path';

export type Kana = {
    kana: string;
    romaji: string;
    type: string;
}

const getHiraganaList = async () => {
    const srcDirectory = path.join(process.cwd(), 'src');
    const hiragana = JSON.parse(await fs.readFile(srcDirectory + "/data/hiragana.json", "utf-8"));
    return hiragana as Kana[];
};

const getKatakanaList = async () => {
    const srcDirectory = path.join(process.cwd(), 'src');
    const katakana = JSON.parse(await fs.readFile(srcDirectory + "/data/katakana.json", "utf-8"));
    return katakana as Kana[];
};

export async function getHiragana(): Promise<Kana[]> {
    const hiragana = await getHiraganaList();
    return hiragana;
}

export async function getIndividualHiragana(romaji: string): Promise<Kana> {
    const hiragana = await getHiraganaList();
    return hiragana.find((kanaObj: Kana) => kanaObj.romaji === romaji) || { kana: "", romaji: "", type: "" };
}

export async function getKatakana(): Promise<Kana[]> {
    const katakana = await getKatakanaList();
    return katakana;
}   

export async function getIndividualKatakana(romaji: string): Promise<Kana> {
    const katakana = await getKatakanaList();
    return katakana.find((kanaObj: Kana) => kanaObj.romaji === romaji) || { kana: "", romaji: "", type: "" };
}
