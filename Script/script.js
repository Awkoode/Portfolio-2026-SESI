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
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach(card => {
    observer.observe(card);
  });
  // POPUP HABILIDADES
  const botoes = document.querySelectorAll('.btn-hab');
  const overlay = document.getElementById('overlay');
  const popups = document.querySelectorAll('.popup');
  const fecharBtns = document.querySelectorAll('.fechar');

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-popup');
      document.getElementById(id).classList.add('ativo');
      overlay.classList.add('ativo');
    });
  });

  fecharBtns.forEach(btn => {
    btn.addEventListener('click', fecharPopup);
  });

  overlay.addEventListener('click', fecharPopup);

  function fecharPopup() {
    popups.forEach(p => p.classList.remove('ativo'));
    overlay.classList.remove('ativo');
  }
  const contatos = document.querySelectorAll('.contato-card');

const obsContato = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

contatos.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.5s";
  obsContato.observe(card);
});