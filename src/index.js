import { html, define, parent, store } from "hybrids";

const FormStore = {
  title: '',
  description: '',
  expectedBehaviour: '',
}

function onSubmit(host, e) {
  e.preventDefault();
  console.log(store.get(FormStore));
}

function onChange(host, e) {
  store.set(FormStore, { [e.target.name]: e.target.value }).then(model => {
    console.log(model, e.target.name, e.target.value);
  });
}

const Form = define({
  tag: "lunar-bug-tool",
  render: () => html`
    <form onsubmit="${onSubmit}">
      <lunar-bug-tool-input name="title"></lunar-bug-tool-input>
      <lunar-bug-tool-input name="description"></lunar-bug-tool-input>
      <lunar-bug-tool-input name="expectedBehaviour"></lunar-bug-tool-input>

      <button>Submit</button>
    </form>
  `,
});

define({
  tag: "lunar-bug-tool-input",
  name: '',
  value: '',
  render: ({ value, name }) => html`
    <div>
      <input type="text" name="${name}" value="${value}" oninput="${onChange}" />
    </div>
  `,
});


document.body.appendChild(document.createElement("lunar-bug-tool"));