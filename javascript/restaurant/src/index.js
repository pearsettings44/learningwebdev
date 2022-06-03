import { rendernav } from "./navbar";
import { renderfooter } from "./footer";
import { renderhome } from "./home";

const maindiv = document.getElementById("content");
function homepage() {
  rendernav();
  renderhome();
  renderfooter();
}
homepage()
export { maindiv };
