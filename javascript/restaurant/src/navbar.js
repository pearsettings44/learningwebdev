import { createHTMLelement } from "./createElements";
import { maindiv } from "./index";

/* Creates a navbar with Home, Menu and About pages */
function rendernav() {
  const navbar = createHTMLelement("nav", "navbar");
  const name = createHTMLelement("h1", "name", "", "Pizzarray");
  navbar.appendChild(name);

  const items = ["home", "menu", "about"];
  /* Create each page */
  items.forEach((item) => {
    const list_item = createHTMLelement("a", "", [item], `${item}`);
    navbar.appendChild(list_item);
  });
  /* Append to the DOM */
  maindiv.appendChild(navbar);
}

export { rendernav };
