import "./style.css";
import { fetchRandomCatImage, axiosfetchRandomCatImage } from "./catch_fetch";

document.querySelector("#app").innerHTML = `
  <div>
    <p id="catImageContainer"></p>
    <p id="catImageContainer2"></p>
  </div>

`;

fetchRandomCatImage();
axiosfetchRandomCatImage();
