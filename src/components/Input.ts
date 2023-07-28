import { html, define } from "hybrids";

import labels from "../static/formLabels";
import component from "../utils/component";

import { onChange } from "../store/handlers";

export default component({
  tag: "lunar-bug-tool-input",
  name: "",
  value: "",
})(
  ({ value, name }: { value: string; name: string }) => html`
    <div>
      <label>${labels[name]}</label>
      <input
        type="text"
        name="${name}"
        value="${value}"
        oninput="${onChange}"
      />
    </div>
  `.css`
    label {
      display: block;
      color: white;
    }
    input {
      display: block;
      margin-bottom: 1rem;
    }
  `
);
