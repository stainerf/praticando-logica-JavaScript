let amigos = [];
function adicionar(){
    //recuperar elementos
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    //validação do campo amigos
    if(nomeAmigo.value.trim() == ''){
        alert('Informe o nome do amigo!');
        return;
    }

    let nomeDigitado = nomeAmigo.value.trim().toLowerCase();

    let jaExiste = amigos.some(amigo => amigo.toLowerCase() === nomeDigitado);

    if (jaExiste) {
        alert('Nome já adicionado!');
        return;
    }

    //adiciona o nome do amigo ao array amigos[], removendo espaços nas bordas da string digitada;
    amigos.push(nomeAmigo.value.trim());
        
    //o array é mostrado como string na tela
    lista.textContent = amigos.join(', ');
    
    nomeAmigo.value = '';

}


function sortear(){
    //a lista amigos[] é embaralhada
    embaralhar();
       let sorteio = document.getElementById('lista-sorteio');

       //validação do sorteio
       if(amigos.length < 3){
        alert('O sorteio deve ser realizado com 3 pessoas ou mais!');
        return;
       }

    for (let i = 0; i < amigos.length; i++){
        
        
        if(i == (amigos.length - 1)){
            //o último elemento pega o primeiro elemento do array
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0];
        }else{
            //cada elemento pega o próximo elemento
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i+1] + '<br>'
        }
    }
    console.log(amigos);
}

function embaralhar(){
    //algoritmo de Fischer-Yates
    for(let i = amigos.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }
}

function reiniciar(){
    //limpa todos os campos
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
    nomeAmigo.value = '';
    amigos = [];
}

