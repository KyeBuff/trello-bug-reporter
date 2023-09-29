import styled from "styled-components";

const Button = styled.button<{ bg?: string }>`
  all: revert !important;
  width: 100% !important;
  border: none !important;
  border-radius: 4px !important;
  padding: 5px !important;
  color: #fff !important;

  background-color: ${(props) => props.bg || "#ef125b"} !important;

  cursor: pointer !important;
`;

export default Button;
