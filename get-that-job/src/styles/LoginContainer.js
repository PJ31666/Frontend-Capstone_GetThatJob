import styled from "@emotion/styled";
import colors from "./colors";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-items: center;
  border: 1px solid black;
  height: 359px;
  width: 359px;
  margin: 196px 763px 345px 318px;
  & div {
    margin-right: 6.5rem;
    & h1 {
      color: ${colors.darkgray};
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 59px;
    }
    & p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 2rem;
    }
    & div {
      display: flex;
      gap: 1rem;
      & h3 {
        font-size: 1.5rem;
      }
    }
  }
  & div {
    display: flex;
    flex-direction: column;
    margin-right: 6.5rem;
  }
`;

function LoginContainer(props) {
  return <WrapperContainer>{props.children}</WrapperContainer>;
}

export default LoginContainer;
