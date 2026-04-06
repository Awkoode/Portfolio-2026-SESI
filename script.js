const botaoTema = document.getElementById("tema-btn");
const body = document.body;

botaoTema.addEventListener("click", () => {
  body.classList.toggle("claro");

  if (body.classList.contains("claro")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
});