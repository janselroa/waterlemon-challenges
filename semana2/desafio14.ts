const alumnos = [] 
const n = Number(prompt("Numero de consultas"))
for(let i = 0;i<n;i++){
    const input = prompt("ingrese la consulta deseada").split(" ")
    if(input[0]=="3"){
    
        const alumno = alumnos.find(alumno=>alumno.name==input[1])
        console.log(alumno!=undefined ? alumno.points : 0)
    
    }else if(input[0]=="1"){
        
        const index = alumnos.findIndex(alumno=>alumno.name==input[1])
        if(index==-1)alumnos.push({name:input[1],points:input[2]})
        else alumnos[index].poins+=Number(index[2])
    
    }else if (input[0]=="2"){

        const index = alumnos.findIndex(alumno=>alumno.name==input[1])
        delete alumnos[index]
    
    }else console.log("opcion no encontrada")
}
