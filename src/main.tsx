import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

const root = document.createElement("div");

document.body.appendChild(root);

interface Props {
  boardId: string;
  listId: string;
  token: string;
  key: string;
}

const init = (props: Props) => {
  if (!props) {
    throw new Error("Missing Trello configuration");
  }
  if (!props.token) {
    throw new Error("Missing Trello token");
  }
  if (!props.key) {
    throw new Error("Missing Trello key");
  }
  if (!props.boardId) {
    throw new Error("Missing Trello boardId");
  }
  if (!props.listId) {
    throw new Error("Missing Trello listId");
  }

  ReactDOM.createRoot(root!).render(
    <React.StrictMode>
      <App trelloKey={props.key} {...props} />
    </React.StrictMode>
  );
};

export default {
  init,
};
