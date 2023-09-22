import styled from "styled-components";

const Styled = styled.div<{ error?: boolean }>`
  width: 100%;

  & > * {
    padding: 0.25rem;
    box-sizing: border-box;
    border-radius: 4px;

    ${(props) => props.error && "border: 2px solid #ef125b;"}
  }
`;
interface Props {
  error?: boolean;
  children: React.ReactNode;
}

const FormGroup = ({ children, ...props }: Props) => (
  <Styled className="form-group" {...props}>
    {children}
  </Styled>
);

export default FormGroup;
