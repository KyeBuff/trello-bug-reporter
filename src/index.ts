// src/index.ts

class LunarBugTool extends HTMLElement {

}

window.customElements.define('lunar-bug-tool', LunarBugTool);

const domNode = document.createElement('lunar-bug-tool');

const shadowRoot = domNode.attachShadow({ mode: 'open' });

const heading = document.createElement('h1');
heading.textContent = 'Hello World!';

shadowRoot.appendChild(heading);

document.body.appendChild(domNode);