import "./style.css";
import Icon from "./icon.jpeg";

const root = document.getElementById("root");
const icon = new Image();
icon.src = Icon;

(() => {
  root.innerHTML = "Webpack started!";
  root.classList.add("root");

  root.append(icon);
})();
