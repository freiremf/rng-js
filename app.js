function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (!validarInformacoes(de, ate, quantidade)) {
        return;
    }

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++) {
        numero = obterNumeroAletorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = obterNumeroAletorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function validarInformacoes(de, ate, quantidade) {
    if(de >= ate) {
        alert('O valor "Do número" deve ser menor que o valor "Até o número"');
        return false;
    }

    let diferenca = ate - de + 1;

    if(quantidade > diferenca) {
        alert('A quantidade de números a serem sorteados deve ser menor ou igual a diferença entre os números');
        return false;
    }
    return true;
}

function obterNumeroAletorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}