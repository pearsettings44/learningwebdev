import { createHTMLelement } from "./createElements";
import { maindiv } from "./index";

function rendernav() {
  const navbar = createHTMLelement("div", "navbar");
  const navitems = createHTMLelement("ul", "nav-items");
  const items = ["home", "menu", "about"];
  items.forEach((item) => {
    const list_item = createHTMLelement("li", "", `${item}`, `${item}`);
    navitems.appendChild(list_item);
  });
  navbar.appendChild(navitems);
  maindiv.appendChild(navbar);
}

export { rendernav };
