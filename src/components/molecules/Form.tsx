import styled from "styled-components";

const Form = styled.form`
  position: fixed;
  bottom: 0;
  right: 0;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: #485b9c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  button[type="submit"] {
    margin-top: 1rem;
  }
`;

export default Form;
