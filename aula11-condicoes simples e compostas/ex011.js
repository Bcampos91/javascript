var idade = 17
console.log(`Voce tem ${idade}Anos,`)
if (idade < 16) {
    console.log('não vota ')
} else {
    if(idade < 18 || idade > 65){
        console.log ('Voto Opcional')
    }else {
        console.log('Voto Obrigatorio')
    }
}