import { rendernav } from "./navbar";
import { renderfooter } from "./footer";
import { renderhome } from "./home";

function renderHomePage() {
  rendernav();
  renderhome();
  renderfooter();
}

export { renderHomePage };
