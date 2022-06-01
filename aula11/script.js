function verificar() {
    var pais = 'EUA'
    var p = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (p != 'Brasil') {
        res.innerHTML = 'Você é Brasileiro'
    }else {
        res.innerHTML = 'Você é estrangeiro'
    }
}