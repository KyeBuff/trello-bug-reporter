import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Select from "./components/atoms/Select";
import TextArea from "./components/atoms/TextArea";
import FormGroup from "./components/molecules/FormGroup";
import { createTrelloCard, getBoardLabels } from "./api/trello";
import Form from "./components/molecules/Form";
import BugIcon from "../public/bug.svg";
import TickIcon from "../public/tick.svg";
import FormToggle from "./components/molecules/FormToggle";
import Text from "./components/atoms/Text";
import { useStatePersist } from "use-state-persist";

interface BoardLabelI {
  id: string;
  name: string;
}

function App({
  boardId,
  listId,
  token,
  key,
}: {
  boardId: string;
  listId: string;
  token: string;
  key: string;
}) {
  const [boardLabels, setBoardLabels] = useStatePersist<BoardLabelI[]>(
    "@labels",
    []
  );
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formState, setForm] = useState({
    name: "",
    description: "",
    expectedBehaviour: "",
    labels: "",
  });

  const validators = {
    name: formState.name.length > 0,
    description: formState.description.length > 0,
    labels: formState.labels.length > 0,
  };

  const isValid = Object.values(validators).every((v) => v);

  const onChange = useCallback((e: ChangeEvent) => {
    const { id, value } = e.target as HTMLInputElement;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isValid) {
        setError("Please fill out all fields");
        return;
      }

      setShowForm(false);
      setError("");

      createTrelloCard(
        {
          listId,
          token,
          key,
        },
        formState
      ).then(() => {
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      });
    },
    [formState, isValid]
  );

  useEffect(() => {
    const escListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowForm(false);
      }
    };

    document.addEventListener("keydown", escListener);

    return () => {
      document.removeEventListener("keydown", escListener);
    };
  }, []);

  useEffect(() => {
    if (!boardLabels.length) {
      getBoardLabels({
        boardId,
        token,
        key,
      }).then((json) => {
        setBoardLabels(json.filter((label: BoardLabelI) => !!label.name));
      });
    }
  });

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
          <FormGroup error={!!(error && !validators.name)}>
            <Input
              onChange={onChange}
              type="text"
              id="name"
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup error={!!(error && !validators.description)}>
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

          {boardLabels.length ? (
            <FormGroup error={!!(error && !validators.labels)}>
              <Select onChange={onChange} id="labels">
                <option value="" disabled selected>
                  Label
                </option>
                {boardLabels.map((label) => (
                  <option value={label.id}>{label.name}</option>
                ))}
              </Select>
            </FormGroup>
          ) : null}

          {error ? <Text>{error}</Text> : null}

          <Button type="submit">Create bug ticket</Button>
        </Form>
      ) : (
        <FormToggle>
          <Button
            onClick={() => setShowForm(true)}
            bg={success ? "green" : "#485b9c"}
          >
            <img src={success ? TickIcon : BugIcon} alt="Bug icon" />
            {success && <span>Ticket created</span>}
          </Button>
        </FormToggle>
      )}
    </>
  );
}

export default App;
