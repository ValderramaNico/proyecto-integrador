import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/HomeView";
import Information from "../views/InformationView";
import Calculator from "../views/CalculatorView";
import Blog from "../views/BlogView";
import NavBar from "../components/NavBar";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacion" element={<Information />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
