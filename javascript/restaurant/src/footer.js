import { createHTMLelement } from "./createElements";
import { maindiv } from "./index";
import Icon from "./img/github-icon-white-6.png";

function renderfooter() {
  const footer = createHTMLelement("footer", "footer");
  const paragraph = createHTMLelement(
    "a",
    "footer-a",
    "",
    "Copyright pearsettings44"
  );
  const githublink = createHTMLelement("a")
  githublink.href = "https://github.com/pearsettings44";
  const gitIcon = createHTMLelement("img", "git");
  gitIcon.src = Icon;
  gitIcon.alt = "github icon"
  footer.appendChild(paragraph);
  githublink.appendChild(gitIcon)
  footer.appendChild(githublink)
  maindiv.appendChild(footer);
}

export { renderfooter };
