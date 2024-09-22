import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import AboutSection from "./Components/AboutSection";
import Banner from "./Components/Banner";
import CallToAction from "./Components/CallToAction";
import FAQSection from "./Components/FAQSection";
import FeatureCards from "./Components/FeatureCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureCards></FeatureCards>
      <CallToAction></CallToAction>
      <AboutSection></AboutSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
