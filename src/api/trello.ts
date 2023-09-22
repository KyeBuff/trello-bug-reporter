import { takeScreenshot, checkIfBrowserSupported } from "@xata.io/screenshot";

const key = "4a3fb7dc39032a123e911f41fc0c17e3";
const token =
  "ATTA9c52ab7e727e26698f5ef71b9c2a1102cf0e598221b773cbfd549376ddc516661169EF54";

const apiRoot = "https://api.trello.com/1";
const apiCreds = `key=${key}&token=${token}`;

function formatPayload(form) {
  // Markdown
  const desc = `
  **Name:** ${form.name}
  **Description:** ${form.desc}
  **Expected Behaviour:** ${form.expectedBehaviour}
  `;

  return {
    ...form,
    desc,
    pos: "bottom",
  };
}

// function convertScreenshotToPng(screenshot) {
//   return fetch(screenshot)
//     .then((res) => res.blob())
//     .then((blob) => {
//       return new File([blob], "Screenshot", { type: "image/png" });
//     });
// }

// function uploadScreenshot(id, screenshot) {
//   const formData = new FormData();
//   formData.append("name", "Screenshot");
//   formData.append("file", screenshot);
//   formData.append("mimeType", "image/png");
//   formData.append("key", key);
//   formData.append("token", token);

//   const request = new XMLHttpRequest();
//   request.responseType = "json";
//   request.onreadystatechange = function () {
//     // When we have a response back from the server we want to share it!
//     // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response
//     if (request.readyState === 4) {
//       console.log(`Successfully uploaded at: ${request.response.date}`);
//     }
//   };
//   request.open("POST", `https://api.trello.com/1/cards/${cardId}/attachments/`);
//   request.send(formData);
// }

const createTrelloCard = (form) => {
  const idList = "5f9e1e2b6b0e6b7e7e0e3b0e";
  const url = `${apiRoot}/cards?idList=${idList}&${apiCreds}`;

  const payload = formatPayload(form);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payload,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (checkIfBrowserSupported()) {
        // const screenshot = takeScreenshot()
        //   .then(convertScreenshotToPng)
        //   .then((screenshot) => {
        //     console.log(screenshot);
        //     uploadScreenshot(res.id, screenshot);
        //   });
      }
    });
};

export { createTrelloCard };
