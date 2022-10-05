import colors from "../../styles/colors";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  background: ${colors.gray};
`;

function InputForm() {
  return <StyledInput />;
}

export default InputForm;
