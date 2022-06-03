import { rendernav } from "./functions/navbar";
import { renderfooter } from "./functions/footer";
import { renderhome } from "./functions/home";

/* Main div, contains everything */
const maindiv = document.getElementById("content");
/* Navegation buttons */
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

/* Load homepage first*/
rendernav();
renderhome();
renderfooter();

/* Go to homepage */
home.addEventListener("click", function () {
  maindiv.innerHTML = "";
  rendernav();
  renderhome();
  renderfooter();
});

export { maindiv };
