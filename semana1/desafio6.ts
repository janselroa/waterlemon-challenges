//function for reversed a string
const reverse = (str: string)=>{
	return str.split("").reverse().join("")
}
console.log(reverse("watermelon"))
console.log(reverse("echisero"))