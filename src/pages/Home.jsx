import GridImage from '../components/GridImage.';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BenefitSection from '../components/BenefitSection';
import FaqSection from '../components/FaqSection';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col font-jakarta'>
      <Navbar />
      <Hero />
      <GridImage />
      <BenefitSection />
      <FaqSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
