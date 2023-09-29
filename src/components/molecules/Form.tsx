import styled from "styled-components";

const Form = styled.form`
  * {
    font-family: Helvetica, sans-serif !important;
  }
  position: fixed !important;
  bottom: 0 !important;
  right: 0 !important;

  padding: 1rem !important;

  display: flex !important;
  flex-direction: column !important;
  gap: 0.5rem !important;

  background-color: #485b9c !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
  border-radius: 4px !important;

  button[type="submit"] {
    margin-top: 1rem !important;
  }
`;

export default Form;
