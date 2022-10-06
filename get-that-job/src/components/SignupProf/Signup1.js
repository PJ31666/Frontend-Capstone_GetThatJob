import styled from "@emotion/styled";
import colors from "../../styles/colors";
import SignupContainer from "../../styles/SignupContainer";
import InputSignup1 from "../Inputs/InputSignup1";
import women from "../Images/women.svg";
import { StyledLogInButton } from "../Buttons/Buttons";

const WrapperSingUp = styled.div`
  display: flex;
  justify-content: center;
  gap: 86px;
  margin-top: 132px;
  margin-left: 318px;
  margin-right: 120px;
`;

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 359px;
  width: 359px;
  /* margin: 196px 763px 345px 318px; */
  & div {
    display: flex;
    flex-direction: column;
    & h1 {
      color: ${colors.darkgray};
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 59px;
      letter-spacing: 5px;
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
      flex-direction: row;
      gap: 1.5rem;
      & h3 {
        font-size: 1.5rem;
        border-bottom: 2px solid ${colors.pink};
      }
    }
  }
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-self: flex-end;
`;

const ContainerPhoto = styled.div`
  display: flex;
  height: 567px;
  width: 560px;
`;

function Signup1() {
  return (
    <WrapperSingUp>
      <SignupContainer>
        <SignupFormContainer>
          <div>
            <h1>Good choice!</h1>
            <p>Create a new account as...</p>
            <div>
              <h3>PROFESSIONAL</h3>
              <h3>RECRUITER</h3>
            </div>
          </div>
          <div>
            <div>
              <p>1</p>
              <span>
                DONE!
                <br />
                Login
                <br />
                information
              </span>
            </div>
            <div>
              <p>2</p>
              <span>
                IN PROGRESS!
                <br />
                Login
                <br />
                information
              </span>
            </div>
            <div>
              <p>3</p>
              <span>
                PENDING!
                <br />
                Professional
                <br />
                information
              </span>
            </div>
          </div>

          <InputSignup1 />
          <ContainerButton>
            <StyledLogInButton>Login</StyledLogInButton>
          </ContainerButton>
        </SignupFormContainer>
        <ContainerPhoto>
          <div>
            <img src={women} alt="" />
          </div>
        </ContainerPhoto>
      </SignupContainer>
    </WrapperSingUp>
  );
}

export default Signup1;
