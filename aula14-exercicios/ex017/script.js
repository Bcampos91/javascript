function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {//Se não tiver nenhum numero 
        window.alert('Por Favor Digite um número!')
      
    }else{
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''//Para limpar a tela 
       

        /*while (c <= 10){
            let item = document.createElement('option')//Criando elemento option pelo JS
            item.text = `${n} x ${c} = ${n*c}`// O que vai mostrar no option
            item.value = `tab${c}`//para saber item foi selecionado 

            tab.appendChild(item)//Tabuada adicionando o filho (item)
            c++
        }*/

        for (c = 1 ;c <= 10;c++){
            let item = document.createElement('option')//Criando elemento option pelo JS
            item.text = `${n} x ${c} = ${n*c}`// O que vai mostrar no option
            tab.appendChild(item)
        }
    
    }
}
   