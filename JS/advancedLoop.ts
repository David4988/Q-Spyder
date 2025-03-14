let num:number[] = [1,2,3,4,5,6,7]

let fil:number[] = num.filter((val)=> val%2==0)
console.log(fil)

let num2:number[] = [1,2,3,4,5,6,7]

let map:number[] = num2.map((val)=> {
    return val+1
})
console.log(map)

