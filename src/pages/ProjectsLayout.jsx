import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsDetailing from '../components/ProjectsDetailing';

const ProjectsLayout = () => {
  const parallaxRef = useRef(null);

  const scrollToPage = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  return (
    <Parallax ref={parallaxRef} pages={2} horizontal={false}>
      <ParallaxLayer offset={0} speed={0.5}>
        <Navbar scrollToPage={scrollToPage} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.3} speed={0.3}>
        <div className="flex flex-col min-h-screen">
          {/* Content Wrapper */}
          <div className="flex-grow">
            <ProjectsDetailing />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ProjectsLayout;
