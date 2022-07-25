const sort = (n: number, k: number, numbers: number[])=>{
	let sum=0
	numbers.sort().splice(numbers.length-k,numbers.length).forEach((n: number)=>sum+=n)	
	return sum
}
console.log(sort(10,3,[5 ,9 ,2 ,4 ,6 ,1 ,2 ,3 ,1 ,5]))
console.log(sort(3,2,[2 ,3 ,1]))