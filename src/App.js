import "./App.css";
import Parallax from "./Animation/Parallax";
import Test1 from "./Test1";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
// import PortfolioSite from "./PortfolioSite";
function App() {
  return (
    <>
      <BrowserRouter>
        <Test1 />
      </BrowserRouter>
    </>
  );
}

export default App;
