import HeaderHome from "../components/Home/HeaderHome";
import HeroHome from "../components/Home/HeroHome";
import Phrases from "../components/Home/Phrases";
import RelevantInfo from "../components/Home/RelevantInfo";
import HardData from "../components/Home/HardData";
import BlogCards from "../components/Home/BlogCards";


const HomeView = () => {
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

export default HomeView;
