let num = [5,8,2,9,3]//Vetor coloca em colchetes [;]


num.push(1) //adiciona valor ao ultimo elemento  
num.sort()  //Organiza os valores em ordem crescente                             
console.log(num)//Mostra os valores do vetor na tela 
console.log (`O vetor TEM  ${num.length} posições`)//num.lenght= Mostra quantas posições tem no vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)// num[0]=Mostra a primeira posição do vetor

let pos = num.indexOf(4) //Para buscar um valor 
if (pos == -1 ){
    console.log('O valor não foi encontrado')
}else{
    console.log (`O valor está na posição ${pos}`)
}

