function verificar(){
    
    let idade = document.querySelector('input#txti')
    let res = document.querySelector('div#res')
    
    let id = Number(idade.value)
    let tar = '2.50'
    let test = '1.25' 
    let tido = '1.75'
    var estu = document.getElementsByName ('est')//Os dois tem que ter o mesmo NAME
    res.innerHTML += `Sua idade atual é ${id} anos`
    if (id <= 6){
      res.innerHTML += ('Você é menor de idade,Sua Tarifa é Zero ! ')
      }else if(estu[0].checked) {
        res.innerHTML += `, você é estudante,sua tarifa é R$ ${test} reais`
      }else if(id <= 60 && estu[1].checked){
        res.innerHTML += `,e sua tarifa será Normal R$ 2,50`
      }else if( id > 60){
        res.innerHTML += `,e você é idoso ,sua tafifa é R$ ${tido}`

      }
}