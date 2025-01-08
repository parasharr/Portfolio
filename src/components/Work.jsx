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
      title: 'Virtual Vangaurd - A Zentry Clone',
      tags: ['Development', 'Design', 'Deployment'],
      techStack: ['ReactJs, TailwindCSS, Vercel'],
      projectLink: 'https://gaming-site-prac.vercel.app/'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];

const Work = () => {
  return (
    <section id='work' className='section'>
        <div className='container'>
            <h2 className="headline-2 mb-8">
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
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
