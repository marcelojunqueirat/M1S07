import createHeader from "./header.js";
import createCards from "./card.js";

let menus = ['Todos os remédios', 'Sobre nós', 'Fale conosco'];

let logo = {
  logoImg: './images/logo.svg',
  nomeLogo: 'Farmácia Milagrosa',
  alt: 'Imagem de logotipo',
  logoTitulo: 'Farmácia Milagrosa'
}

let medicamentos = [
  {
    id: 1,
    titulo:'SHAMPOO JOHNSONS BABY CABELOS CLAROS 400ML',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 1',
    unidade: 'un',
    valor: 'R$ 27,99'
  },
  {
    id: 2,
    titulo:'CIMEGRIPE 400MG COM 20 CÁPSULAS',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 2',
    unidade: 'cp',
    valor: 'R$ 12,91'
  },
  {
    id: 3,
    titulo:'LORATADINA CIMED COM 12 COMPRIMIDOS 10MG GENERICO',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 3',
    unidade: 'un',
    valor: 'R$ 6,77'
  },  
  {
    id: 4,
    titulo:'TOPERMA 700MG COM 10 EMPLASTROS',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 4',
    unidade: 'un',
    valor: 'R$ 155,60'
  },
  {
    id: 5,
    titulo:'AMOXICILINA TEUTO 500MG COM 21 COMPRIMIDOS',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 5',
    unidade: 'un',
    valor: 'R$ 13,00'
  },
  {
    id: 6,
    titulo:'SALBUTAMOL GLENMARK 100MCG GENERICO',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 6',
    unidade: 'un',
    valor: 'R$ 23,15'
  }
];

let header = document.getElementsByTagName('header')[0];
let cardBody = document.querySelector('#card-body')

createHeader(header, logo, menus);
createCards(cardBody, medicamentos.length, medicamentos);









