import styled from "styled-components";

const FormToggle = styled.div`
  position: fixed !important;
  right: -1rem !important;
  bottom: calc(50% - 0.5rem) !important;
  background-color: #485b9c !important;
  border-radius: 4px !important;
  padding-right: 1rem !important;

  button {
    display: flex !important;
    align-items: center !important;
    gap: 0.33rem !important;
    font-weight: bold !important;
  }

  img {
    color: #fff !important;
    width: 1.5rem !important;
    padding: 0.25rem !important;

    transition: transform 0.2s ease-in-out !important;
    transform: scale(1) !important;
  }

  &:hover {
    img {
      transform: scale(1.1) !important;
    }
  }
`;

export default FormToggle;
