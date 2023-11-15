var tabela = ["", "", "", "", "", "", "", "", ""]
var jogador = "X"

function marcar(indice) {
    tabela[indice] = jogador
    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }
    render()
}

function render() {
    const tds = document.querySelectorAll("td")

    var indice = 0  /* Começa no indice 0 do array */
    while(indice < tabela.length) {  /* O loop para quando o indice chegar no tamanho da tabela */
        tds[indice].innerHTML = tabela[indice]
        indice++ 
    }
}
render()