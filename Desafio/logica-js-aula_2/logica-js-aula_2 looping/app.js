alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);//numero aleatorio sempre colocar + 1
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chuute não for igual ao numero secreto
while (chute != numeroSecreto) {//!= significa diferente
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;//se acertar ja para
      
    } else { 
        if (chute > numeroSecreto) {//se o chute for maior que o numero secreto
            alert(`O número secreto é menor que ${chute} `);
        } else {
            alert(` O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1; Pra atribuir mais 1
        tentativas++
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'//Operador ternario
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);
//if (tentativas > 1){
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas `);
//}else{
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa `)
//}
