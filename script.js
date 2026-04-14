const botaoTema = document.getElementById("tema-btn");
const body = document.body;

botaoTema.addEventListener("click", () => {
  body.classList.toggle("claro");
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

if (hamburger && menu && navbar) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('ativo');
    menu.classList.toggle('aberto');
    navbar.classList.toggle('expandida');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('ativo');
      menu.classList.remove('aberto');
      navbar.classList.remove('expandida');
    });
  });
}
const btnMaterias = document.getElementById("btn-materias");
const popupMaterias = document.getElementById("popup-materias");

if (btnMaterias && popupMaterias) {
  btnMaterias.addEventListener("click", (e) => {
    e.preventDefault();
    popupMaterias.classList.toggle("ativo");
  });

  document.addEventListener("click", (e) => {
    if (!btnMaterias.contains(e.target) && !popupMaterias.contains(e.target)) {
      popupMaterias.classList.remove("ativo");
    }
  });
}