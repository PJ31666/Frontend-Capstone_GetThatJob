import styled from "@emotion/styled";
import "./App.css";
import Login from "./components/Login/Login";

const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 86px;
  margin-top: 132px;
  margin-left: 318px;
  margin-right: 120px;
`;

function App() {
  return (
    <WrapperLogin>
      <Login />
    </WrapperLogin>
  );
}

export default App;
