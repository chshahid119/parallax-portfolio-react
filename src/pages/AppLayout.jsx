import { useRef,useState,useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategoryImageGallery from "./../components/CategoryImageGallery"
import About from '../components/About';
import Layer3Img from './../assets/images/layer-3-bg.png';
import Layer4Img from './../assets/images/layer-5-bg.png';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const AppLayout = () => {
  const parallaxRef = useRef(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = 'https://shaheerport-c0g6bfhte7afc9ea.eastus-01.azurewebsites.net/api';

        // Example fetch call - uncomment when needed
        const response = await fetch(`${apiUrl}/categories/`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
      
      //  console.log(data)
      setCategories(data);
      } catch (err) { 
        console.error(`Error: ${err.message}`); // Log the error
      }
    }

    fetchData();
  }, []);



  const scrollToPage = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  return (
    <Parallax ref={parallaxRef} pages={4} horizontal={false}>
      {/* Hero Section - Layer 1 */}
      <ParallaxLayer offset={0} speed={0.2} className='z-50'>
        <Navbar scrollToPage={scrollToPage} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <HeroSection scrollToPage={scrollToPage} className="mar1" />
      </ParallaxLayer>

      {/* Projects Section - Layer 2 */}
      <ParallaxLayer offset={0.9} speed={0.2} className="z-10">
        <div className='bg-white'>
      <h1 className="text-6xl text-center my-8 py-24 projecttext">Projects.</h1>
      <CategoryImageGallery categoryImages={categories} />
    </div>
      </ParallaxLayer>

      {/* Background Image for Layer 3 */}
      <ParallaxLayer offset={1.4} speed={0.2} className="-z-10">
        <img
          src={Layer3Img}
          className="w-screen h-screen object-cover"
          alt="Bg img for layer 3"
        />
      </ParallaxLayer>

      {/* About Section - Layer 3 */}
      <ParallaxLayer offset={2.5} speed={0.2} className="z-50">
        <About />
      </ParallaxLayer>

      {/* Background Image for Layer 4 */}
      <ParallaxLayer offset={2.5} speed={0.2} className="-z-10">
        <img
          src={Layer4Img}
          className="w-screen h-screen object-cover"
          alt="Bg img for layer 4"
        />
      </ParallaxLayer>

      {/* Contact Form and Footer - Layer 4 */}
      <ParallaxLayer offset={3} speed={0.2} className="flex flex-col">
        <ContactForm />
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
};

export default AppLayout;
 