import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/Images/Project1.png',
      title: 'FashionADDA - An e-commerce website',
      tags: ['Development', 'Designing', 'Deployment'],
      techStack: ['HTML5, CSS3, JavaScript'],
      projectLink: 'https://fashion-adda-site.netlify.app/' 
    },
    {
      imgSrc: '/Images/Project2.png',
      title: '.PRANJEET - A personal blogging site',
      tags: ['Front-end', 'Backend Setup', 'Design', 'Deployment'],
      techStack: ['ReactJs, NextJs, TailwindCSS, Appwrite, Vercel'],
      projectLink: 'https://personal-blogs-omega.vercel.app/'
    },
    {
      imgSrc: '/Images/Project3.png',
      title: 'Virtual Vanguard - A Zentry Clone',
      tags: ['Development', 'Design', 'Deployment'],
      techStack: ['ReactJs, TailwindCSS, Vercel'],
      projectLink: 'https://gaming-site-prac.vercel.app/'
    },
    {
      imgSrc: '/Images/Project4.png',
      title: 'Apple Vision Pro ',
      tags: ['Web-design', 'Deployment'],
      techStack: ['HTML5, CSS3, JavaScript, Netlify'],
      projectLink: 'https://visionprowebd.netlify.app/'
    },
    {
      imgSrc: '/Images/Project5.png',
      title: 'Lazarav - AI/ML project Agency',
      tags: ['Web-design', 'Development'],
      techStack: ['HTML5, CSS3, JavaScript'],
      projectLink: 'https://lazarav-clone.netlify.app/'
    },
    {
      imgSrc: '/Images/Project6.png',
      title: 'Weather.io - Weather webapp',
      tags: ['API', 'Development', 'Design'],
      techStack: ['HTML5, CSS3, Netlify'],
      projectLink: 'https://weatherio-web.netlify.app/'
    },
  ];

const Work = () => {
  return (
    <section id='work' className='section'>
        <div className='container'>
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags,techStack, projectLink}, key)=>(
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    techStack={techStack}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
