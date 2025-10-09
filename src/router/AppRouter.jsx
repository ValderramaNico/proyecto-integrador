import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/HomeView";
import Information from "../views/InformationView";
import Calculator from "../views/CalculatorView";
import Blog from "../views/BlogView";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PostDetailView from "../views/PostDetailView";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacion" element={<Information />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostDetailView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
