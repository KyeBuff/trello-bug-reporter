import { takeScreenshot, checkIfBrowserSupported } from "@xata.io/screenshot";

const key = "4a3fb7dc39032a123e911f41fc0c17e3";
const token =
  "ATTA9c52ab7e727e26698f5ef71b9c2a1102cf0e598221b773cbfd549376ddc516661169EF54";

const apiRoot = "https://api.trello.com/1";
const apiCreds = `key=${key}&token=${token}`;

function formatPayload(form) {
  // Markdown
  const desc = `
  **Description:** ${form.description}
  **Expected Behaviour:** ${form.expectedBehaviour}
  `;

  return {
    ...form,
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
    if (request.readyState === 4) {
      console.log(`Successfully uploaded at: ${request.response.date}`);
    }
  };
  request.open("POST", `https://api.trello.com/1/cards/${id}/attachments/`);
  request.send(formData);
}

const createTrelloCard = (form) => {
  //   const idList = window?.LUNAR_BUG_TOOL?.idList || "644a28be4d4825d44b85b048";
  const idList = "644a28be4d4825d44b85b048";
  const url = `${apiRoot}/cards?idList=${idList}&${apiCreds}`;

  const payload = formatPayload(form);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (checkIfBrowserSupported()) {
        takeScreenshot()
          .then(convertScreenshotToPng)
          .then((screenshot) => {
            uploadScreenshot(res.id, screenshot);
          });
      }
    });
};

export { createTrelloCard };
