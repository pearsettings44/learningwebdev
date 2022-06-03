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

/* Same logic would go for the menu and about pages */
/* Menu page: use CSS grid to display a few menus, done that before */
/* About page: static normal page, takes like 20 minutes tops */
/* I'll finish this project some other time :) */

export { maindiv };
