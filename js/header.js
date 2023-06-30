export default function createHeader(header, logoObj, listaMenus) {
  let logoImagem = header.querySelector('.logo');
  let logoTitulo = header.querySelector('#titulo-logo');
  logoImagem.setAttribute('src', logoObj.logoImg);
  logoImagem.setAttribute('alt', logoObj.alt);
  logoTitulo.innerText = logoObj.logoTitulo;

  let navMenus = header.querySelectorAll('.nav-link')

  listaMenus.forEach((menu, i = 0) => {
    navMenus[i].innerText = menu
  })
}

