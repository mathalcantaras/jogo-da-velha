let infosJogo = document.querySelector("#infosJogo");
let caixaTexto = document.querySelector("input");
let jogo = document.querySelector("#jogo");
let botao = document.querySelector("button");
let quadrados = document.querySelectorAll(".colunaJogo");
let botaoReset = document.querySelector("#reset");
let jogador1;
let jogador2;
let jogada = 0;

function esconderJogo() {
    if (infosJogo.style.display = "flex") {
        jogo.style.display = "none"
    }
}

function escolherJogador() {
    jogador1 = caixaTexto.value;
    jogador2;
    if (jogador1 == "X" || jogador1 == "x") {
        jogador2 = "O";
        caixaTexto.value = "";
        alert('O jogador 1 jogará com símbolo "X", o jogador 2 jogará com o símbolo "O".');
        infosJogo.style.display = "none";
        jogo.style.display = "initial";
    }
    else if (jogador1 == "O" || jogador1 == "o") {
        jogador2 = "X";
        caixaTexto.value = "";
        alert('O jogador 1 jogará com símbolo "O", o jogador 2 jogará com o símbolo "X".');
        infosJogo.style.display = "none";
        jogo.style.display = "initial";
    }
    else{
        caixaTexto.value = "";
        alert('Erro, digite apenas "X" ou "O".');
    }
}

function verificarResultado() {
    if (quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML) {
        setTimeout(final, 1);
    }
    else if (quadrados[3].innerHTML !== "" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML) {
        setTimeout(final, 1);
    }
    else if (quadrados[6].innerHTML !== "" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML) {
        setTimeout(final, 1);
    }
    else if (quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML === quadrados[6].innerHTML) {
        setTimeout(final, 1);
    }
    else if (quadrados[1].innerHTML !== "" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[7].innerHTML) {
        setTimeout(final, 1);
    }
    else if (quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML === quadrados[8].innerHTML) {
        setTimeout(final, 1);
    }
    else if (quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML) {
        setTimeout(final, 1);
    }
    else if (quadrados[6].innerHTML !== "" && quadrados[6].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[2].innerHTML) {
        setTimeout(final, 1);
    }
    else if (jogada >= 9) {
        setTimeout(velha, 1);
    }
    else{
        return;
    }
}

function gerarJogada() {
    if (this.innerHTML == "") {
        if (jogada % 2 == 0) {
            this.innerHTML = jogador1;
            jogada++;
            verificarResultado();
        }
        else{
            this.innerHTML = jogador2;
            jogada++;
            verificarResultado();
        }
    }
    else{
        this.innerHTML = this.innerHTML;
    }
}

for(let quadrado of quadrados){
    quadrado.onclick = gerarJogada;
}

function final() {
    for (let quadrado of quadrados) {
        quadrado.onclick = null;
    }
    if(jogada % 2 == 1) {
        alert("O jogador 1 foi o vencedor.");
    }
    else{
        alert("O jogador 2 foi o vencedor.");
    }
}

function velha() {
    alert("Ih, deu velha");
}

function reset() {
    jogada = 0;
    quadrados[0].innerHTML = "";
    quadrados[1].innerHTML = "";
    quadrados[2].innerHTML = "";
    quadrados[3].innerHTML = "";
    quadrados[4].innerHTML = "";
    quadrados[5].innerHTML = "";
    quadrados[6].innerHTML = "";
    quadrados[7].innerHTML = "";
    quadrados[8].innerHTML = "";
    for (let quadrado of quadrados) {
        quadrado.onclick = gerarJogada;
    }
}

esconderJogo();
botao.onclick = escolherJogador;
botaoReset.onclick = reset;