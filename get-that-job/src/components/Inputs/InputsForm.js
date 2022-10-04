import colors from "../../styles/colors";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  background: ${colors.white};
  width: 243px;
  padding: 8px;
  height: 22px;
  border-radius: 8px;
  border-color: pink;
`;

function InputsForm() {
  return (
    <>
      <Label htmlFor="email">Email</Label>
      <StyledInput id="email" placeholder="some.user@gmail.com" />
      <Label htmlFor="password">Password</Label>
      <StyledInput id="password" placeholder="******" />
    </>
  );
}

export default InputsForm;
