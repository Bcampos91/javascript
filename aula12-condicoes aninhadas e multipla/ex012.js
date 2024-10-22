var agora = new Date() //BUSCA A HORA ,DATA ATUAL DO PC
var hora = agora.getHours()//BUSCA A HORA ATUAL
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12){
    console.log(' Bom Dia!')
} else if (hora <= 18){
    console.log ('Boa Tarde!')
}else{
    console.log('Boa Noite')
}
