let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let vetores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar() {
    if(isNumero(num.value) && !isLista(num.value, vetores)){
        vetores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valores inválidos ou já encontrados na lista.')
    }
    //função usada para limpar a barra de pesquisa
    num.value = ''
    num.focus()
}

function finalizar() {
    if (vetores.length == 0) {
        alert('Adcione valores antes de finalizar!')
    } else {
        let tot = vetores.length
        let maior = vetores[0]
        let menor = vetores[0]
        let soma = 0
        let media = 0
        for(let pos in vetores) {
            soma += vetores[pos]
            if (vetores[pos] > maior)
                maior = vetores[pos]
            if (vetores[pos] < menor)
                menor = vetores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados!`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}</p>`
    }
}