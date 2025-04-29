let totalGeral;
limpar();
function adicionar(){
    //recuperar valores nome do produto, quantidade e valor;
    let item = document.getElementById('produto').value;
    let nomeItem = item.split('-')[0];
    let valorUnitario = parseFloat(item.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;
    console.log(`Itens: ${item}. Quantidade: ${quantidade}`);
    
    //alerta se o usuário não escolher
    if(quantidade <= 0 || isNaN(quantidade)){
        alert('Escolha uma quantidade válida para o produto');
        return;
    }
    // let valorItem = 0;
    // item === 'Fone de ouvido - R$100' ? valorItem = 100 :
    //  item === 'Celular - R$1400' ? valorItem = 1400 : 
    //  item === 'Oculus VR - R$5000' ? valorItem = 5000 :
    //   'Item não encontrado';
    
    // console.log(valorItem);

    //valor do produto vezes a quantidade dele
    let subtotal = valorUnitario * quantidade;
    console.log(`Valor: ${subtotal}`);

    //adicionando produtos ao carrinho no HTML
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeItem} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;

//total da compra
  totalGeral = totalGeral + subtotal;
//fazendo o total da compra aparecer no HTML
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral}`;

  //a cada adição, a caixa "quantidade" zera
  document.getElementById('quantidade').value = 0;

    // let total = document.getElementById('valor-total');
    // total.textContent = somaItem 
}
//limpa o campo
function limpar(){
    totalGeral = 0;
    document.getElementById('quantidade').value = '';
    document.getElementById('valor-total').innerHTML = `R$0`
    document.getElementById('lista-produtos').textContent = '';
}