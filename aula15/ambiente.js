let num = [5 , 7, 9, 1, 3]
num.push(4) //Adcionar um vetor no final
num.sort() //Colocar em ordem crecente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor esta na posição ${pos}`)
}
