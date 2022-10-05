import styled from "@emotion/styled";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
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
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
