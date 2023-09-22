import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Select from "./components/atoms/Select";
import TextArea from "./components/atoms/TextArea";
import FormGroup from "./components/molecules/FormGroup";
import { createTrelloCard } from "./api/trello";
import Form from "./components/molecules/Form";
import BugIcon from "../public/bug.svg";
import FormToggle from "./components/molecules/FormToggle";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formState, setForm] = useState({
    name: "",
    description: "",
    expectedBehaviour: "",
    priority: "",
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
      {showForm ? (
        <Form onSubmit={onSubmit}>
          <Button
            bg="transparent"
            color="white"
            onClick={() => setShowForm(false)}
          >
            Close
          </Button>
          <FormGroup>
            <Input
              onChange={onChange}
              type="text"
              id="name"
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup>
            <TextArea
              onChange={onChange}
              id="description"
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup>
            <TextArea
              onChange={onChange}
              id="expectedBehaviour"
              placeholder="Expected behaviour"
            />
          </FormGroup>

          <FormGroup>
            <Select onChange={onChange} id="priority">
              <option value="" disabled selected>
                Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </Select>
          </FormGroup>

          <Button type="submit">Create bug ticket</Button>
        </Form>
      ) : (
        <FormToggle>
          <Button onClick={() => setShowForm(true)} bg="#485b9c">
            <img src={BugIcon} alt="Bug icon" />
          </Button>
        </FormToggle>
      )}
    </>
  );
}

export default App;
