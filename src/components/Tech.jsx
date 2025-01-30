import React from 'react'
import SkillCard from './SkillCard';


const skillItem = [
    {
      imgSrc: '/Images/html.jpg',
      label: 'HTML5',
      desc: 'Structuring Webpages'
    },
    {
      imgSrc: '/Images/css3.png',
      label: 'CSS3',
      desc: 'Styling'
    },
    {
      imgSrc: '/Images/javascript.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/Images/react.png',
      label: 'ReactJs',
      desc: 'User Interfaces'
    },
    {
      imgSrc: '/Images/nextjs.png',
      label: 'NextJs',
      desc: 'ReactJs Framework'
    },
    {
      imgSrc: '/Images/tailwind.png',
      label: 'TailwindCSS',
      desc: 'Styling'
    },
    {
      imgSrc: '/Images/typescript.png',
      label: 'TypeScript',
      desc: 'Scripting'
    },
    {
      imgSrc: '/Images/appwrite.png',
      label: 'Appwrite',
      desc: 'Backend As a Service'
    },
    {
      imgSrc: '/Images/git-removebg-preview.png',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: '/Images/mongodb.png',
      label: 'MongoDB',
      desc: 'DataBase'
    },
    {
      imgSrc: '/Images/express.png',
      label: 'ExpressJs',
      desc: 'Web Framework'
    },
    {
      imgSrc: '/Images/node.png',
      label: 'Node Js',
      desc: 'JavaScript Runtime Env'
    },
  ];
  


  const Tech = () => {
    return(
        <section className='section'>
            <div className='container'>
                <h2 className='headline-2 reveal-up'>
                    Essential Tools I use
                </h2>
                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
                    Discover the powerful tools and technologies that I use to create exceptional, high-performing websites & applications. 
                </p>
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                    {
                        skillItem.map(({imgSrc, label, desc}, key)=>(
                            <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc= {desc}
                            classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
  }

export default Tech
