//
import "./style.css";
// import { CustomButton } from "component-library";

// window.customElements.define("custom-button", CustomButton);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    <form action="" method="get">
      <input type="text" name='source' > 
      <custom-button text="Translate"  />
    </form>
  </main>
`;

document
  .querySelector("custom-button")!
  .addEventListener("clicked", () => console.log(new Date()));
