import createHeader from "./header.js";

let menus = ['Todos os remédios', 'Sobre nós', 'Fale conosco'];
let logo = {
  logoImg: './images/logo.svg',
  nomeLogo: 'Farmácia Milagrosa',
  alt: 'Imagem de logotipo',
  logoTitulo: 'Farmácia Milagrosa'
}
let header = document.getElementsByTagName('header')[0];

createHeader(header, logo, menus);


