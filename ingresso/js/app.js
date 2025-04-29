// quantidadeInferior = 400;
// quantidadeSuperior = 200;
// quantidadePista = 100;

//recuperar quantidade de ingressos
    // let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    // let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    // let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    

function comprar(){
    //recuperar campos no HTML
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
   
    console.log(`Tipo de ingresso: ${tipoIngresso}. Quantidade: ${quantidade}`);

    
    //consumo de cada tipo de ingresso
    if(tipoIngresso === 'inferior'){
       comprarInferior(quantidade);
    }else{
        if(tipoIngresso === 'superior'){
            comprarSuperior(quantidade);
        }else{
            comprarPista(quantidade);
        }
    }
                
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qtdPista){
        alert('Quantidade indisponível para tipo pista!');
    }else{
        qtdPista -= quantidade;
        document.getElementById('qtd-pista').textContent = `${qtdPista}`;
        alert('Compra realizada com sucesso!');
    }
    
}

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior){
        alert('Quantidade indisponível para tipo Inferior!');
    }else{
        qtdInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = `${qtdInferior}`;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdSuperior){
        alert('Quantidade indisponível para tipo Superior!');
    }else{
        qtdSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = `${qtdSuperior}`;
        alert('Compra realizada com sucesso!');
    }
}
