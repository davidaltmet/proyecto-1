// let links = document.querySelector(".links");
// let abrirLinks = document.querySelector(".barra");
// let cerrarLinks = document.querySelector(".barra");

// abrirLinks.addEventListener("click", function () {
//   links.classList.add("abrir_link");
// });

// abrirLinks.addEventListener("click", function () {
//   links.classList.remove("abrir_link");
// });

let links = document.querySelector(".links");
let boton = document.querySelector("#boton");

let estado = "close";

boton.addEventListener("click", function () {
  if (estado == "close") {
    links.classList.add("abrir_link");
    boton.classList.remove("fa-bars");
    boton.classList.add("fa-xmark");
    boton.style.display = "block";
    estado = "open";
  } else {
    links.classList.remove("abrir_link");
    boton.classList.add("fa-bars");
    boton.classList.remove("fa-xmark");

    estado = "close";
  }
});
