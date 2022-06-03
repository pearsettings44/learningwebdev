import { createHTMLelement } from "./createElements";
import { maindiv } from "./index";
import Icon from "./img/github-icon-white-6.png";

/* Creates a footer with github username and icon */
function renderfooter() {
  const footer = createHTMLelement("footer", "footer");
  const paragraph = createHTMLelement(
    "a",
    "footer-a",
    "",
    "Copyright pearsettings44"
  );
  const githublink = createHTMLelement("a");
  /* github profile url*/
  githublink.href = "https://github.com/pearsettings44";
  /* github icon */
  const gitIcon = createHTMLelement("img", "git");
  gitIcon.src = Icon;
  gitIcon.alt = "github icon";
  footer.appendChild(paragraph);
  githublink.appendChild(gitIcon);
  footer.appendChild(githublink);
  /* Append footer to the DOM */
  maindiv.appendChild(footer);
}

export { renderfooter };
