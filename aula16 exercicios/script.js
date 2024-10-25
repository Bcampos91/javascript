let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){//Se o numero for maior que 1 e menor que 100
        return true
    } else {
        return false
    }
}
function inLista (n,l){//Se o não estiver na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value,valores)){//isnumero = se ele é um numero /islista = se ele esta na lista(! significa não)
        valores.push(Number(num.value))//para adicionar valor ao vetor
        let item = document.createElement('option')//criar um item
        item.text = `Valor ${num.value} adicionado.`//O texto que sera adicionado
        lista.appendChild(item)//A variavel item dentro da lista 
        res.innerHTML = ''//quando adiciona um elemento ele limpa o resultado
        
    }else{
        window.alert('Valor invalido ou já adicionado na lista ')
    }
    num.value = ''//Para apagar o valor depois que escrever
    num.focus()//Para voltar automatico para area de adicionar
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')

    }else{
        let tot = valores.length//Variavel Com a quantidade de numeros (valores.lenght6)
        let maior = valores[0]//comeca com 0 
        let menor = valores[0]//começa com 0
        let soma = 0//começa com 0
        let media = 0//comeca com 0
        for (let pos in valores ){//Teste vai analisar o maior e menor valor 
            soma += valores[pos]//Para somar todos os valores
            if (valores[pos] > maior )
                maior = valores [pos]
            if(valores [pos] < menor)
                menor = valores[pos]
        }
        media = soma /tot//Soma da média 

        res.innerHTML=''
        res.innerHTML += `<p>Ao todo ,temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor nformado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valorees ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`

    }
}
