import styled from "styled-components";

const Styled = styled.div`
  width: 100%;

  & > * {
    padding: 0.25rem;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;
interface Props {
  children: React.ReactNode;
}

const FormGroup = ({ children, ...props }: Props) => (
  <Styled className="form-group" {...props}>
    {children}
  </Styled>
);

export default FormGroup;
