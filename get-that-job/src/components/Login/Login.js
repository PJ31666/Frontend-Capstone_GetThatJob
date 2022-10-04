import LoginContainer from "../../styles/LoginContainer";
import InputsForm from "../Inputs/InputsForm";

function Login() {
  return (
    <LoginContainer>
      <div>
        <h1>Welcome Back</h1>
        <p>Login to you account as...</p>
        <div>
          <h3>PROFESSIONAL</h3>
          <h3>RECRUITER</h3>
        </div>
      </div>
      <div>
        <InputsForm />
      </div>
    </LoginContainer>
  );
}

export default Login;
