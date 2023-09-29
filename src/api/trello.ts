import { takeScreenshot, checkIfBrowserSupported } from "@xata.io/screenshot";

const apiRoot = "https://api.trello.com/1";

interface TrelloPropsI {
  key: string;
  token: string;
  boardId?: string;
  listId?: string;
}

interface FormStateI {
  name: string;
  description: string;
  expectedBehaviour: string;
  labels: string;
}

function formatPayload(form: FormStateI) {
  // Markdown
  const desc = `
  **Description:** ${form.description}
  **Expected Behaviour:** ${form.expectedBehaviour}
  `;

  return {
    ...form,
    desc,
    pos: "bottom",
    idLabels: form.labels,
  };
}

// @ts-ignore
function convertScreenshotToPng(screenshot) {
  return fetch(screenshot)
    .then((res) => res.blob())
    .then((blob) => {
      return new File([blob], "Screenshot", { type: "image/png" });
    });
}

function uploadScreenshot(
  id: string,
  screenshot: File,
  trelloProps: TrelloPropsI
) {
  const formData = new FormData();
  formData.append("name", "Screenshot");
  formData.append("file", screenshot);
  formData.append("mimeType", "image/png");
  formData.append("key", trelloProps.key);
  formData.append("token", trelloProps.token);

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

const createTrelloCard = (trelloProps: TrelloPropsI, form: FormStateI) => {
  const apiCreds = `key=${trelloProps.key}&token=${trelloProps.token}`;
  const url = `${apiRoot}/cards?idList=${trelloProps.listId}&${apiCreds}`;

  const payload = formatPayload(form);

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      if (checkIfBrowserSupported()) {
        return takeScreenshot()
          .then(convertScreenshotToPng)
          .then((screenshot) => {
            uploadScreenshot(res.id, screenshot, trelloProps);
          });
      }
      return res;
    });
};

const getBoardLabels = (trelloProps: TrelloPropsI) => {
  const apiCreds = `key=${trelloProps.key}&token=${trelloProps.token}`;
  const url = `${apiRoot}/boards/${trelloProps.boardId}/labels?${apiCreds}`;

  return fetch(url).then((res) => res.json());
};

export { createTrelloCard, getBoardLabels };
