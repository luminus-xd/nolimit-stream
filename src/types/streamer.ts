/**
 * @description　配信者のパラメータ
 */
export type Streamer = {
    name: string;
    stgrName: string;
    twitchId: string;
};

/**
 * @description STREAMER JSON ROOT
 */
export type StreamersData = {
    streamer: Streamer[];
};
