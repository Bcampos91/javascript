function contar(){

    let ini = document.getElementById('texti')
    let fim = document.getElementById('textf')
    let passo = document.getElementById('textp')
    let res = document.getElementById('res')

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'impossivel contar'
    //window.alert('[ERRO] Falta dados !')
    
} else {
    res.innerHTML = 'contando <br>'
    let i = Number(ini.value)//transformar a string para numero 
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0 ){
        window.alert(`Passo invalido! Considerando PASSO 1`)
        p = 1
    }
    if(i < f){//inicio for menor que o fim 
        //contagem crescente
        for (let c = i; c <= f;c += p){
        res.innerHTML += `${c}👉`
        }
    }else{//se não
        //contagem regressiva
        for(let c = i ; c >= f ;c -= p){
            res.innerHTML += ` ${c}👉`
        }
    }
    res.innerHTML += `🚀`
    }
}

