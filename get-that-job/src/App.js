import styled from "@emotion/styled";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBars/NavBar";
import Signup1 from "./components/SignupProf/Signup1";
import SignupRec2 from "./components/SignupRec/SignupRec2";

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
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signupRec2" element={<SignupRec2 />} />
      </Routes>
    </>
  );
}
export default App;
