const btnMobile = document.querySelector("#barra");
const fecharMobile = document.querySelector("#fechar");

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
fecharMobile.addEventListener("click", toggleMenu);

const menu = document.querySelector(".menu-container");
const intro = document.querySelector(".intro");

window.addEventListener("scroll", stickyFunc);
var largura = window.innerWidth;

var navbar = document.querySelector(".header-container");

var sticky = navbar.offsetTop;

console.log(sticky, largura);

function stickyFunc() {
  if (window.scrollY >= sticky + 5 && largura >= 800) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}
