import styled from "styled-components";

const Button = styled.button<{ bg?: string }>`
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 5px;
  color: #fff;

  background-color: ${(props) => props.bg || "#ef125b"};

  cursor: pointer;
`;

export default Button;
