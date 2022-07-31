const PlayingStructures = (n: number, input: string)=>{
    const numbers = input.split(" ").reverse().map((n: string)=>Number(n))
    const pila: string = numbers.join(" ")
    const cola: string = numbers.reverse().join(" ")

    return `PILA: ${pila}\nCOLA: ${cola}`
}
console.log(PlayingStructures(5,"2 3 3 1 4"))

