//
const template = document.createElement("template");
template.innerHTML = `
<style>
button{
  background: blue;
  color: white;
}
</style>
<button type="submit"></button>`;

export class CustomButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
    const button = this.shadowRoot!.querySelector("button")!;
    button.addEventListener("click", this.handleClick);
    button.textContent = this.getAttribute("text");
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent("clicked", { bubbles: true, composed: true }),
    );
  }
}
