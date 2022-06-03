import { createHTMLelement } from "./createElements";
import { maindiv } from "./index";

function rendernav() {
  const navbar = createHTMLelement("nav", "navbar");
  const items = ["home", "menu", "about"];
  items.forEach((item) => {
    const list_item = createHTMLelement("a", "", [item], `${item}`);
    navbar.appendChild(list_item);
  });
  maindiv.appendChild(navbar);
}

export { rendernav };
