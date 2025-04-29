function alterarStatus(id){
    let item = document.getElementById(`game-${id}`);
    let botao = item.querySelector('.dashboard__item__button');
    let imagem = item.querySelector('.dashboard__item__img');
    let nomeJogo = item.querySelector('.dashboard__item__name');

    // console.log(nomeJogo.textContent);
    if(botao.classList.contains('dashboard__item__button--return')){

        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
        
        botao.classList.remove('dashboard__item__button--return')
        imagem.classList.remove('dashboard__item__img--rented')
        botao.textContent = 'Alugar'
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
     
}