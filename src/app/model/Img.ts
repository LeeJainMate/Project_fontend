// export interface GetImg {
//     imgid:  number;
//     imgurl: string;
//     uid : number;
//     name : string;
//     score:  number;
//     isWinner: boolean;
//     isLoser: boolean;
// }
export interface Getranktoday {
    sid:            number;
    image:           string;
    name:             string;
    score:            number;
    uid_fk:              number;
    rankingyesterday : number;
    rankingtoday :     number;
    rankdifferent : number;
}

// export interface VoteImg {
//     imgid: number;
//     name : string;
//     voteDate: string;
//     score: string;
//     imgurl : string;
// }