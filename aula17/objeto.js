let amigo = {nome: 'Jose', 
sexo: 'M',
peso: '80.3',
engordar(p=1){
    console.log('Engordou')
    this.peso += p
}}
console.log(amigo.nome)