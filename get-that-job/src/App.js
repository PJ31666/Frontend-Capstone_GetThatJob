import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBars/NavBar";
import Signup1 from "./components/SignupProf/Signup1";
import SignupRec2 from "./components/SignupRec/SignupRec2";
import Login from "./components/Login/Login";
import SignupRec1 from "./components/SignupRec/SignupRec1";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signupRec1" element={<SignupRec1 />} />
        <Route path="/signupRec2" element={<SignupRec2 />} />
      </Routes>
    </>
  );
}
export default App;
