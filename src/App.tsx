import { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Select from "./components/atoms/Select";
import TextArea from "./components/atoms/TextArea";
import FormGroup from "./components/molecules/FormGroup";
import { createTrelloCard } from "./api/trello";

function App() {
  const [formState, setForm] = useState({
    name: "",
    description: "",
    expectedBehaviour: "",
    priority: "low",
  });

  const onChange = useCallback((e) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      createTrelloCard(formState);
    },
    [formState]
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="name">Title</label>
          <Input onChange={onChange} type="text" id="name" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <TextArea onChange={onChange} id="description" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="expectedBehaviour">Expected behaviour</label>
          <TextArea onChange={onChange} id="expectedBehaviour" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="priority">Priority</label>
          <Select onChange={onChange} id="priority">
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
