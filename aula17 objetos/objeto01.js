let amigo = {nome:'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){//Variavel tem funçao dentro dela 
        console.log('Engordou')
        this.peso += p//this palavra auto referencia ao objeto

    }
}
amigo.engordar (80)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)//(amigo.peso)mostra a variavel e o sub dela 