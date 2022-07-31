const convertString = (str: string)=>{
    let newStr = ""
    if(str[0].charCodeAt(0)>90) console.log("is lowercase")
    else console.log("is uppercase")
    for(let i of str){
        if(i.charCodeAt(0)>90) newStr+=String.fromCharCode(i.charCodeAt(0)-32)
        else newStr+=String.fromCharCode(i.charCodeAt(0)+32)
    }
    console.log(newStr)
}
convertString("TAL")
