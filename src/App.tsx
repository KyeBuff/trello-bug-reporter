import { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Select from "./components/atoms/Select";
import TextArea from "./components/atoms/TextArea";
import FormGroup from "./components/molecules/FormGroup";
import { createTrelloCard } from "./api/trello";

function App() {
  const formState = useState({});

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    createTrelloCard(formState);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="name">Title</label>
          <Input type="text" id="name" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <TextArea id="description" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="priority">Priority</label>
          <Select id="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </Select>
        </FormGroup>

        <Button type="submit">Create bug ticket</Button>
      </form>
    </>
  );
}

export default App;
