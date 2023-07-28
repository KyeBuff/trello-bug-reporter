import { store } from "hybrids";
import FormStore from "./store";

const onChange = (host: any, e) => {
  store.set(FormStore, { [e.target.name]: e.target.value });
};

export { onChange };
