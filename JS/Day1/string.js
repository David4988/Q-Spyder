
let s1 = "John"
let age = 28
let city = "New York"

console.log(`I am ${s1}, of age ${age} and I am from ${city}`)

console.log(`Ore wa ${s1}, ${age}-sai desu, ${city} ni sundeimasu`)     

//TODO String Properties

//? 1. .length

let s = "     Yo, Genki ni shiteiru?      "
    console.log(s.length);

//? 2. .toUpperCase() & .toLowerCase()

    console.log(s.toUpperCase())
    console.log(s.toLowerCase())

//? 3. .trim

    console.log((s.trim()).length);
    console.log();

//? 4. .substring()

    console.log(s.substring(5,10))

//? 5. concat()

    let s2 = "How"
    let s3 ="are"
    let s4 = "you"

    // console.log(s2.split(" ").concat(" ",s3," ",s4, ))
    
//? 6. .split()    

    console.log(s.trim().split(" "))

//? 7. slice()

    console.log(s.slice(5))

//? 8. replace()
    let str = "Good Morning mam, I'll reply you shortly, Kind regards"
    console.log(str.replace("shortly","shorty").replace("regards","retards").replace("Morning","Mourning"))