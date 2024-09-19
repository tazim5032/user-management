import AboutSection from "../../Components/AboutSection";
import Banner from "../../Components/Banner";
import CallToAction from "../../Components/CallToAction";
import FAQSection from "../../Components/FAQSection";
import FeatureCards from "../../Components/FeatureCards";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const {user} =  useAuth();
  //console.log(user)

  return (
    <div className=''>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeatureCards></FeatureCards>
      <CallToAction></CallToAction>
      <AboutSection></AboutSection>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
