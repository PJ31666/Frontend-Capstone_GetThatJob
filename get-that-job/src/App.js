import styled from "@emotion/styled";
import "./App.css";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";

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
    <>
      <NavBar />
      <WrapperLogin>
        <Login />
      </WrapperLogin>
    </>
  );
}

export default App;
