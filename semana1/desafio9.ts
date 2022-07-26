const noRepeat = (n: number, numbers: string)=>{
    const numbersList = numbers.split(" ").sort()
    console.log(n+"\n",numbers)
    return Array.from(new Set(numbersList))
}
console.log(noRepeat(7,"2 1 3 3 4 5 1").join())
