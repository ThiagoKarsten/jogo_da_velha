var jogador = "X"

function marcar(td){
    td.innerHTML = jogador

    if(jogador == "X"){
        jogador = "O"
    }else{
        jogador = "X"
    }
}