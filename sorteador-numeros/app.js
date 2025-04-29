function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if(de >= ate){
        alert('Insira os dados corretamente! Digite do número menor ao maior');
        limparCampos();
        return;
        
    }

    if((ate - de + 1) < quantidade){
        alert('Impossível gerar números solicitados');
        return;
    }

    for(let i = 0; i < quantidade; i++){
       
       do {
            numero = gerarNumeroAleatorio(de, ate)
       } while(sorteados.includes(numero))
       
       sorteados.push(numero);
    
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    
    console.log(`Quantidade: ${quantidade}, de ${de} ate ${ate}.`)
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar(){
    limparCampos();
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}