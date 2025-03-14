interface Params{
    Name:string;
    Age:number;
    Hobbies: string[];
    FavGames: string[];
    KnownLang: string[];
    Addr: object;
    eat: () => string;
    play: () => string;
    sleep: () => string;
}

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

let JSONFormat = JSON.stringify(person);
console.log(JSONFormat);

let JsFormat = JSON.parse(JSONFormat)
console.log(JsFormat);