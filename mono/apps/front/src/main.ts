//
import "./style.css";
import { CustomButton } from "component-library";

window.customElements.define("custom-button", CustomButton);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    <input type="text" name='source' > 
    <custom-button text="Translate"></custom-button>
    <pre id='output'>
    </pre>
  </main>
`;

document
  .querySelector("custom-button")!
  .addEventListener("clicked", async () => {
    const input: HTMLInputElement = document.querySelector("[name=source]")!;
    const output = document.querySelector("#output")!;
    const source = encodeURI(input.value);
    const res = await fetch(`http://localhost:9999/translate?source=${source}`);
    const json = await res.json();
    output.textContent = json.result;
  });
