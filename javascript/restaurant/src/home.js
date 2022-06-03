import { createHTMLelement } from "./createElements";
import { maindiv } from "./index";

/* Creates the home page */
function renderhome() {
  const homeholder = createHTMLelement("div", "home");
  const mainheader = createHTMLelement(
    "h1",
    "mainheader",
    "",
    "Come on down for some delicious cousine!"
  );
  const secondheader = createHTMLelement(
    "h2",
    "secondheader",
    "",
    "Tasty and affordable!"
  );
  const orderbutton = createHTMLelement("button", "ordernow", "", "Order Now!");
  homeholder.appendChild(mainheader);
  homeholder.appendChild(secondheader);
  homeholder.appendChild(orderbutton);
  /* Append home to the DOM */
  maindiv.appendChild(homeholder)
}

export { renderhome };
