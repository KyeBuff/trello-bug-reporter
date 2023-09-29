import styled from "styled-components";

const Styled = styled.div<{ error?: boolean }>`
  width: 100% !important;

  & > * {
    padding: 0.25rem !important;
    box-sizing: border-box !important;
    border-radius: 4px !important;

    ${(props) => props.error && "border: 2px solid #ef125b !important;"}
  }
`;
interface Props {
  error?: boolean;
  children: React.ReactNode;
}

const FormGroup = ({ children, ...props }: Props) => (
  <Styled {...props}>{children}</Styled>
);

export default FormGroup;
