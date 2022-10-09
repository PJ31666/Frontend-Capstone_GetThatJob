import "./App.css";
import NavBar from "./components/NavBars/NavBar";
import { UnaunthenticatedApp } from "./UnauthenticatedApp";
import { AuthenticateApp } from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import Home from "./components/Home/Home";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [user]);

  return user ? <AuthenticateApp /> : <UnaunthenticatedApp />;
}
export default App;
