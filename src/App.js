import Navbar from './components/Navbar';
import Hero from './sections/Hero'
import TrustedClients from './sections/TrustedClients';
import RealWorldProjects from './sections/RealWorldProjects';
import WhyHireMe from './sections/WhyHireMe';
import Pricing from './sections/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedClients />
      <RealWorldProjects />
      <WhyHireMe />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
