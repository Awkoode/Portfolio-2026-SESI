const botaoTema = document.getElementById("tema-btn");
const body = document.body;

botaoTema.addEventListener("click", () => {
  body.classList.toggle("claro");
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

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