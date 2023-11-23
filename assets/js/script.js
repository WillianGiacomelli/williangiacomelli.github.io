const btnMobile = document.querySelector("#barra");
const fecharMobile = document.querySelector("#fechar");
var largura = window.innerWidth;
var navbar = document.querySelector(".header-container");
var sticky = navbar.offsetTop;
var seta = document.querySelector(".seta");
var div = document.querySelector(".intro-nome");
var introInformacoes = document.querySelector(".intro-informacoes");
var texto = "Willian Giacomelli";

function toggleMenu() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("active");
  const ativo = nav.classList.contains("active");
  if (ativo) {
    fecharMobile.classList.toggle("active");
    btnMobile.classList.add("remove");
  } else {
    btnMobile.classList.remove("remove");
    fecharMobile.classList.remove("active");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("click", () => {
  introInformacoes.style.display = "none";
});
fecharMobile.addEventListener("click", toggleMenu);
fecharMobile.addEventListener("click", () => {
  introInformacoes.style.display = "block";
});

const menu = document.querySelector(".menu-container");
const intro = document.querySelector(".intro");

window.addEventListener("scroll", stickyFunc);

console.log(sticky, largura);

function stickyFunc() {
  if (window.scrollY >= sticky + 5 && largura >= 800) {
    menu.classList.add("sticky");
    seta.style.display = "block";
  } else {
    menu.classList.remove("sticky");
    seta.style.display = "none";
  }
}

function escrever(str, el) {
  var char = str.split("").reverse();
  var typer = setInterval(function () {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 150);
}

escrever(texto, div);
