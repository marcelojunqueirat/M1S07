export default function createCards(fatherCard, quantidadeCards, produtos) {
  for (let index = 0; index < quantidadeCards; index++) {
    let card = `<div id = ${index} class="col"><div class="card mb-4 rounded-3 shadow-sm"><div class="card-header py-3 text-end"><h4 class="my-0 fw-normal pe-3 heart"><i class="bi bi-heart-fill"></i></h4></div><div class="card-body"><div><img class="img-fluid rounded"></div><h1 class="card-title pricing-card-title mt-3"><small class="text-body-secondary fw-light"></small></h1><ul class="list-unstyled mt-3 mb-4"><li></li></ul><button type="button" class="w-100 btn btn-lg btn-outline-primary fs-4">Adicionar</button></div></div></div>`
    fatherCard.innerHTML += card;
  }

  fillCards(produtos);
}

function fillCards(produtos) {
  for (let index = 0; index < produtos.length; index++) {
    let elementoCard = document.getElementById(`${index}`)
    let nomeProduto = elementoCard.querySelector('ul li');
    let precoProduto = elementoCard.querySelector('h1');
    let imagemProduto = elementoCard.querySelector('img');
  
    nomeProduto.innerText = produtos[index].titulo;
    precoProduto.innerText= produtos[index].valor;
    precoProduto.innerHTML += `<small class="text-body-secondary fw-light">/${produtos[index].unidade}</small>`
  
    imagemProduto.setAttribute('src', produtos[index].imagem);
    imagemProduto.setAttribute('alt', produtos[index].imagemAlt);
  }
}