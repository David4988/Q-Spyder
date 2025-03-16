interface MovieDetails{
    readonly name: string,
    ratings: number,
    printMovieInfo(name: string,price:number,ratings:number): string | number;
}

interface MovieGenre extends MovieDetails{
    genre:string
}
const movie1:MovieGenre = {
    name:"Star Wars",
    genre: "Action",
    ratings:8.9,
    printMovieInfo(
        name: string,
        price:number,
        ratings:number
    ): string | number {
        return `Movie Name: ${name}, Price: ${price}, Rating: ${ratings} `
    },
};

console.log(movie1.printMovieInfo("John Wick" ,100, 8))