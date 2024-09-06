function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;



    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade <= 0 || de < 0 || ate < 0 || de > ate || quantidade > (ate - de + 1)) {
        if (de > ate) {
            alert("Erro: O valor 'Do número' não pode ser maior que o valor 'Até o número'. Por favor, tente novamente.");
        } else {
            alert("Por favor, insira valores válidos. A quantidade deve ser positiva e não maior que o intervalo de números disponíveis.");
        }
        reiniciar(); 
        return; 
    }

    for (let i = 0; i<quantidade; i++) {
       numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
          numero = obterNumeroAleatorio(de, ate);
        }

       sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotao();
}



function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
          botao.classList.remove("container__botao-desabilitado");
          botao.classList.add("container__botao");
    }
    else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}



function reiniciar(){
    let quantidade = document.getElementById("quantidade").value = '';
    let de = document.getElementById("de").value = '';
    let ate = document.getElementById("ate").value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum até agora</label>`;
    alterarStatusBotao();
}