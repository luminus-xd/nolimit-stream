import type { StreamersData } from "@/src/types/streamer";

/**
 * @description　JSONから配信者のデータを取得する
 */
export async function fetchStreamersData(): Promise<StreamersData> {
    const res = await fetch("https://nolimit.stream/assets/json/stream.json", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
}
