import { html, define, store } from "hybrids";
import { takeScreenshot, checkIfBrowserSupported } from "@xata.io/screenshot";
import TextArea from "./components/TextArea";
import Input from "./components/Input";
import FormStore from "./store/store";

const key = "4a3fb7dc39032a123e911f41fc0c17e3";
const token =
  "ATTA9c52ab7e727e26698f5ef71b9c2a1102cf0e598221b773cbfd549376ddc516661169EF54";

const apiRoot = "https://api.trello.com/1";
const apiCreds = `key=${key}&token=${token}`;

function getPayload() {
  // Markdown
  const desc = `
  **Name:** ${store.name}
  **Description:** ${store.desc}
  **Expected Behaviour:** ${store.expectedBehaviour}
  `;

  return {
    ...store.get(FormStore),
    desc,
    pos: "bottom",
  };
}

function convertScreenshotToPng(screenshot) {
  return fetch(screenshot)
    .then((res) => res.blob())
    .then((blob) => {
      return new File([blob], "Screenshot", { type: "image/png" });
    });
}

function uploadScreenshot(id, screenshot) {
  const formData = new FormData();
  formData.append("name", "Screenshot");
  formData.append("file", screenshot);
  formData.append("mimeType", "image/png");
  formData.append("key", key);
  formData.append("token", token);

  const request = new XMLHttpRequest();
  request.responseType = "json";
  request.onreadystatechange = function () {
    // When we have a response back from the server we want to share it!
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response
    if (request.readyState === 4) {
      console.log(`Successfully uploaded at: ${request.response.date}`);
    }
  };
  request.open("POST", `https://api.trello.com/1/cards/${cardId}/attachments/`);
  request.send(formData);
}

function onSubmit(host, e) {
  e.preventDefault();

  const url = `${apiRoot}/cards?idList=${host.idlist}&${apiCreds}`;

  const payload = getPayload();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...store.get(payload),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (checkIfBrowserSupported()) {
        const screenshot = takeScreenshot()
          .then(convertScreenshotToPng)
          .then((screenshot) => {
            console.log(screenshot);
            uploadScreenshot(res.id, screenshot);
          });
      }
    });
}

define({
  tag: "lunar-bug-tool",
  idlist: "",
  render: () => html`
    <div class="lunar-bug-tool">
      <h4>Report a bug</h4>
      <form onsubmit="${onSubmit}">
        <lunar-bug-tool-input name="name"></lunar-bug-tool-input>
        <lunar-bug-tool-textarea name="desc"></lunar-bug-tool-textarea>
        <lunar-bug-tool-textarea
          name="expectedBehaviour"
        ></lunar-bug-tool-textarea>

        <button>Submit</button>
      </form>
    </div>
  `.css`
    form {
      margin: .5rem 0;
    }

    .lunar-bug-tool {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      padding: 0 1rem .5rem;
      font-family: 'Gotham Rounded', Arial, sans-serif;
      background: linear-gradient(45deg, #272c40, #485b9c 200%);
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.8);
    }

    .lunar-bug-tool h4 {
      color: white;
    }
  `,
});

Input.create();
TextArea.create();
