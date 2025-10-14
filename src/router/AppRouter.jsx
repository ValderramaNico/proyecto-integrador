import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/HomeView";
import Information from "../views/InformationView";
import Calculator from "../views/CalculatorView";
import Blog from "../views/BlogView";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PostDetailView from "../views/PostDetailView";
import Login from "../components/dashboard/Login"
import Dashboard from "../views/DashboardView"
import CrudPost from "../views/CrudPostView"

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
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crud-post" element={<CrudPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
