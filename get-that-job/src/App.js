import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBars/NavBar";
import Signup1 from "./components/SignupProf/Signup1";
import Signup2 from "./components/SignupProf/Signup2";
import Signup3 from "./components/SignupProf/Signup3";
import SignupRec1 from "./components/SignupRec/SignupRec1";
import SignupRec2 from "./components/SignupRec/SignupRec2";
import Login from "./components/Login/Login";
import FindThatJob from "./components/ProfessionalViews/FindThatJob";
import SideNavBarForm from "./components/NavBars/SideNavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/signupRec1" element={<SignupRec1 />} />
        <Route path="/signupRec2" element={<SignupRec2 />} />
        <Route path="/FindThatJob" element={<FindThatJob />} />
        <Route path="/SideNavBar" element={<SideNavBarForm />} />
      </Routes>
    </>
  );
}
export default App;
