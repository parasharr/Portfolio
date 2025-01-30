import { ReactLenis } from "lenis/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useGSAP(()=> {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element)=> {
      gsap.to(element, {
        scrollTrigger: {
          start: '-200 bottom',
          end: 'bottom 80%',
          trigger: element,
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })
  return (
    <ReactLenis root>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="flixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Tech />
            <Work />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
