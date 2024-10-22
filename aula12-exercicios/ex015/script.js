function verificar(){    
var data = new Date ()

var ano = data.getFullYear()//FullYear = Vai pegar o ano com 4 Digitos

var fano = document.getElementById ('txtano')//vai pegar o ID do input Ano de Nascimento

var res = document.querySelector('div#res')//query selector para variar mas os dois dao certo4

if (fano.value.lenght == 0 || fano.value < 1900 || fano.value > ano){
    window.alert('[ERRO]Verifique o Ano e tente novamente!')
}else{
    var fsex =document.getElementsByName ('radsex')//Os dois tem que ter o mesmo NAME
    var idade = ano - Number(fano.value)//Ano menos o valor inserido
    var genero = ''//genero vazio

    var img = document.createElement('img')//Para atribuir uma imagem ,esse é a Variavel 
    img.setAttribute('id', 'foto')//para atribuir uma image direto pelo JavaScript (ID, FOTO)
    
    if(fsex[0].checked) {//Quando o Masculino for Selecionado
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'criancamenino.png')//Para atribuir uma foto em cada bloco ,usa (setAttribute)//src + nome da foto 
        }else if(idade < 21){
            //Jovem
            img.setAttribute('src', 'jovemadulto.png')
        }else if (idade < 50){
            //ADULTO
            img.setAttribute('src', 'homemadulto.png')
        } else{//Usar só else quando for o ultimo
            //Idoso
            img.setAttribute('src', 'idosoadulto.png')
        }

    } else if (fsex[1].checked) {//Quando o Feminino for Selecionado
        genero = 'Mulher' 
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','criancamenina.png')
        }else if(idade < 21){
            //Jovem
            img.setAttribute('src', 'jovemmulher.png')
        }else if (idade < 50){
            //ADULTO
            img.setAttribute('src','mulheradulta.png')
        } else {//Usar só else quando for o ultimo
            //Idoso
            img.setAttribute('src','idosamulher.png')
        }
    }
    res.style.textAlign = 'center'//Para centralizar direto pelo JavaScript
    res.innerHTML =`Detectamos ${genero} com ${idade} anos`
    res.appendChild (img)//para adicionar a imagem
}

}
