type Simple = {
    Name:string | null;
    Age:number | null;
    Hobbies: string[] | null;
    FavGames: string[] | null;
    KnownLang: string[] | null;
}
type Complex = {
    Addr: object;
    eat: () => string;
    play: () => string;
    sleep: () => string;
}

type Params = Simple & Complex; // Combined Simple and Complex types into a single Params type

const person:Params = {
    Name:`Davidson`,
    Age:20,
    Hobbies: [`Anime`, `Genshin`, `Zenless Zone Zero`],
    FavGames: [`Genshin`, `Zenless Zone Zero`, `Honkai Star Rail`, `Honkai Impact 3`,`Sekiro`, `Ghost of Tsushima`],
    KnownLang:[`Tamil`, `English`, `Japanese`],
    Addr: {
                No: `17`,
                Street: `Vasantham Apts`,
                City: `Chennai`,
                State: `TamilNadu`,
            },
    eat: () => `He is sleeping`,
    play:() => `Playing Z`,
    sleep:()=> `He is sleeping`,
}
