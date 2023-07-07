class t extends HTMLElement {
}
window.customElements.define("lunar-bug-tool", t);
const e = document.createElement("lunar-bug-tool"), n = e.attachShadow({ mode: "open" }), o = document.createElement("h1");
o.textContent = "Hello World!";
n.appendChild(o);
document.body.appendChild(e);
