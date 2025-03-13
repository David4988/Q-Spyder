// let person =  {
//     Name: `Davidson`,
//     Age: 20,
//     Hobies: [`Anime`, `Genshin`, `Zenless Zone Zero`],
//     City: `Chennai`,
//     isCommited: false,
//     Married: false,

//     KnownLang: [`Tamil`, `English`, `Japaneese`],
//     Addr: {
//         No: `17`,
//         Street: `Vasantham Apts`,
//         City: `Chennai`,
//         State: `TamilNadu`
//     },
//};
// console.log(person);

let myself = {
    Name:`Davidson`,
    Age:20,
    Hobies: [`Anime`, `Genshin`, `Zenless Zone Zero`],
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

// console.log(myself)
// //? Dot Notation
// console.log(myself.Name)
// console.log(myself.Age)
// console.log(myself.Hobies)
// console.log(myself.FavGames)
// console.log(myself.KnownLang)
// console.log(myself.Addr.City)
// console.log(myself.eat)
// console.log(myself.play)
// console.log(myself.sleep)

//? Bracket Notation 

// console.log(myself["Name"])
// console.log(myself["Age"])
// console.log(myself["Hobies"])
// console.log(myself["FavGames"])
// console.log(myself["KnownLang"])
// console.log(myself["Addr"]["No"])
// console.log(myself["eat"]())
// console.log(myself["play"]())
// console.log(myself["sleep"]())
// myself.Name = "Baka"
// console.log(myself)
// myself.DOB = "01-01-2000"
// console.log(myself)

// console.log(Object.keys(myself))

// console.log(Object.values(myself))

// console.log(Object.entries(myself))

let jsonFormat = JSON.stringify(myself)
console.log(jsonFormat);

let jsFormat = JSON.parse(jsonFormat)
console.log(jsFormat);