import "./App.css";
import NavBar from "./components/NavBars/NavBar";
import { UnaunthenticatedApp } from "./UnauthenticatedApp";
import { AuthenticateApp } from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import Home from "./components/Home/Home";

function App() {
  const { user } = useAuth();

  return user ? 
    (<AuthenticateApp/>) : (<UnaunthenticatedApp/>)
  ;
}
export default App;
