import "./App.css";
import HeaderHome from "./components/HeaderHome";
import HeroHome from "./components/HeroHome";
import Phrases from "./components/Phrases";
import RelevantInfo from "./components/RelevantInfo";
import HardData from "./components/HardData";
import BlogCards from "./components/BlogCards";

const App = () => {
  return (
    <>
      <HeaderHome />
      <HeroHome />
      <Phrases />
      <RelevantInfo />
      <HardData />
      <BlogCards />
    </>
  );
};

export default App;
