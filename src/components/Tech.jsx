import React from 'react'
import SkillCard from './SkillCard';


const skillItem = [
    {
      imgSrc: '/Images/html.jpg',
      label: 'HTML',
      desc: 'Structuring Webpages'
    },
    {
      imgSrc: '/Images/tailwind.png',
      label: 'Tailwind CSS',
      desc: 'Styling'
    },
    {
      imgSrc: '/Images/javascript.png',
      label: 'JavaScript',
      desc: 'Interaction'
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
      imgSrc: '/Images/react.png',
      label: 'Library',
      desc: 'User Interfaces'
    },
    {
      imgSrc: '/Images/appwrite.png',
      label: 'Appwrite',
      desc: 'Backend As a Service'
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
                <h2 className='headline-2'>
                    Essential Tools I use
                </h2>
                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
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
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
  }

export default Tech
