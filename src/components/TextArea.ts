import { html, define } from "hybrids";

import labels from "../static/formLabels";
import component from "../utils/component";

import { onChange } from "../store/handlers";

export default component({
  tag: "lunar-bug-tool-textarea",
  name: "",
  value: "",
})(
  ({ value, name }: { value: string; name: string }) => html`
    <div>
      <label>${labels[name]}</label>
      <textarea
        type="text"
        name="${name}"
        value="${value}"
        oninput="${onChange}"
      ></textarea>
    </div>
  `.css`
      label {
        display: block;
        color: white;
      }
      textarea {
        display: block;
        margin-bottom: 1rem;
      }
    `
);
