import React from 'react'
import portrait from "../assets/Portrait.jpg"
import profile from "../assets/portrait-mini.jpg"
import { ButtonPrimary, ButtonOutline } from './Button'
import {FaDownload} from "react-icons/fa"

const Hero = () => {
  return (
    <section id="home" className='pt-15 lg:pt-15'>
      <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
        <div>
            <div className='flex items-center gap-3'>
                <figure className='img-box w-9 h-9 rounded-lg'>
                    <img 
                    src={profile}
                    width={40}
                    height={40}
                    alt="Pranjeet Goswami Portrait" 
                    className='img-cover'
                    />
                </figure>

                <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                        <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'>
                            
                        </span>
                    </span>
                    Available for work
                </div>
            </div>
            <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
            Building Scalable Modern Websites for the Future
            </h2>
            <div className='flex items-center gap-3'>
                <ButtonPrimary 
                label="Download CV"
                icon="download"
                />
                

                <ButtonOutline 
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
                />
            </div>
        </div>
        <div className="hidden lg:block">
            <figure className='max-w-[500px] rounded-[60px]'>
                <img 
                src={portrait}
                width={600}
                height={800} 
                alt="Pranjeet Goswami"
                className="w-[80%] rounded-lg" 
                />
            </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
