// let arr = [1,2,3,4,5,6,7]

// let [a,b,,d,,f,g] = arr

// console.log(a,b,d,f,g)

// let arr = [1,2,3,4,[1,2,3],5,6,7]

// let [a,b,c,d,[e1,e2,e3],f,g,h] = arr

// console.log(a,b,c,d,e1,e2,e3,f,g,h)

// const data = [[1,2,3],[4,5,6],[7,[8,9],10]];

// let[[,,],[,,],[,[,dat],]] = data

// console.log(dat);

//? Destructuring obj

// const obj = {
//     Name:`Davidson`,
//     Age:20,
//     Hobbies: [`Anime`, `Genshin`, `Zenless Zone Zero`],
//     FavGames: [`Genshin`, `Zenless Zone Zero`, `Honkai Star Rail`, `Honkai Impact 3`,`Sekiro`, `Ghost of Tsushima`],
//     KnownLang:[`Tamil`, `English`, `Japanese`],
//     Addr: {
//                 No: `17`,
//                 Street: `Vasantham Apts`,
//                 City: `Chennai`,
//                 State: `TamilNadu`,
//             },
//     eat: () => `He is sleeping`,
//     play:() => `Playing Z`,
//     sleep:()=> `He is sleeping`,

// }

// let {Name:a, Age:b, Hobbies:c,FavGames:d,KnownLang:e,Addr:{No,City},eat:g} = obj

// console.log(a,b,c,d,e,No,City,g)

// const student = {
//     Name: "John Doe",
//     Age: 20,
//     Addr:{
//         City:"New York",
//         Zip:"10001",
//         Coord:{
//             Lat:40.7128,
//             Lon:-74.0060,
//         }
//     },
//     Courses:['Math', "Science", "History"]
// }
// let {Addr:{Coord:{Lat:lat}},Courses:[,sci,]} = student;
// console.log(lat,sci)

//?
const company = {
    name:"Tech Corp",
    department:[{
        name:'Engineering',
        employees:[
            {
                name:'Alice', role:'Developer'
            },
            {
                name:'Bob', role:'Tester'
            }
        ]
    },
    {
        name:'Marketing',
        employees:[
            {
                name:'Charlie', role:'Designer'
            },
            {
                name:'Dave', role:'Content Writer'
            }
        ]
    }
]
}

let{department:[{name:n,},{employees:[,{name:na}]}]} = company

console.log(n,na)