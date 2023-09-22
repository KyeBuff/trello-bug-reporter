import styled from "styled-components";

const FormToggle = styled.div`
  position: fixed;
  right: -1rem;
  bottom: calc(50% - 0.5rem);
  background-color: #485b9c;
  border-radius: 4px;
  padding-right: 1rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.33rem;
    font-weight: bold;
  }

  img {
    color: #fff;
    width: 1.5rem;
    padding: 0.25rem;

    transition: transform 0.2s ease-in-out;
    transform: scale(1);
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export default FormToggle;
