function verificaSeChuteEhValido(chute) {
    const numero = +chute; //transforma em inteiro
    
    if (numeroMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (chuteInvalido(numero)) {
        if (chute === "game over") {
            document.body.innerHTML = `
            <div class="game-over">GAME OVER</div>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar-over">Jogar novamente</button>
            `
            document.body.style.backgroundColor = "#000000"
            document.body.style.color = "#F00101"
        } else {
            elementoChute.innerHTML += "<div>Diga um número válido</div>";
            return;
        }
    }


    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        return;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>';
    } else {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>';
    }
    
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload(); //reinicia o jogo
    }
})
