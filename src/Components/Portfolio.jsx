import React,{useState} from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { AiFillGithub } from 'react-icons/ai'
import ShinnyEffect from './ShinnyEffect'

const projects=[
    {
       img:project1,
       title:"Wheather Monitoring",
       description:`The Weather Monitoring App is an interactive web application that provides real-time weather data using the OpenWeatherMap API.
                    Built with HTML, CSS, JavaScript, and the Algolia Places API, it enables users to easily search and retrieve weather information by city, with features like temperature conversion between Celsius and Fahrenheit.
                    The application also displays detailed weather forecasts, including wind speed, humidity, and other critical data, through a sleek, responsive interface. 
                    This project highlights my ability to develop modern, user-friendly applications and demonstrates my proficiency in integrating third-party APIs, enhancing both functionality and user experience.`,
       links:{
        site:"https://weather-monitoring-ouf7.vercel.app/",
        github:"https://github.com/YASIN0707/Modern-sign-in-page"
       }
    },
    {
        img:project2,
        title:"Dynamic Form Generator",
        description:`The Dynamic Form Generator is an innovative web application I designed to streamline form creation and customization, showcasing my expertise in React.js, JavaScript, HTML5, and CSS3.
                     This project enables users to dynamically build forms with real-time rendering, customizable validation, and seamless export functionality, ensuring efficiency and flexibility. 
                     It includes advanced features like field type customization, a dark mode toggle for enhanced usability, and responsive design for accessibility across devices.
                     This tool demonstrates my ability to deliver user-centric solutions with attention to detail, making me an ideal candidate for roles requiring technical proficiency and creative problem-solving.`,
        links:{
         site:"https://yasindynamicformgenerator0707.netlify.app/",
         github:"https://github.com/YASIN0707/Dynamic-Form-Generator"
        }
     },
     {
        img:project3,
        title:"Product CRUD Application",
        description:`Developed a modern web application for CRUD operations on products
                     with a responsive UI using HTML5, CSS3, Bootstrap, and Font Awesome icons. The
                     frontend is powered by React.js for dynamic interactions, while MongoDB serves as
                     the backend database. The application includes an intuitive admin dashboard for
                     efficient product management. It provides a comprehensive solution for ecommerce or inventory management.`,
        links:{
         site:"#",
         github:"https://github.com/YASIN0707/Product-Management-CRUD-Application"
        }
     },
     {
        img:project4,
        title:"Chat App",
        description:`Developed a visually appealing static chat application that demonstrates my skills in creating intuitive, user-friendly interfaces. 
                     Using jQuery, I implemented interactive features such as glowing icons on input fields, enhancing user engagement.
                     The app simulates a dynamic chat experience, making it easy for users to interact while maintaining simplicity. 
                     This project highlights my expertise in front-end development, DOM manipulation, and event handling, showcasing my ability to build responsive and interactive web applications that prioritize a seamless user experience.`,
        links:{
         site:"https://yasin-chat-app.vercel.app/",
         github:"https://github.com/YASIN0707/Yasin-chat-app/blob/main/app.js"
        }
     },
     {
        img:project5,
        title:"modern-sign-in-page",
        description:`This project showcases a sleek and modern sign-in and sign-up page designed with HTML, CSS, and JavaScript, featuring smooth animations and responsive design for a seamless user experience.
                     The page includes an interactive toggle that switches between forms without reloading, creating a dynamic and engaging interface. Social media login options and vibrant UI elements add a professional touch, making the design both functional and visually appealing.
                     This project highlights my skills in front-end development and user-friendly design, demonstrating attention to detail and creativity – perfect for enhancing any web application.`,
        links:{
         site:"https://modern-sign-in-page.vercel.app/",
         github:"https://github.com/YASIN0707/Modern-sign-in-page"
        }
     },
     {
        img:project6,
        title:"e-commerce",
        description:`This e-commerce web application revolutionizes the online shopping experience, 
                     offering dynamic product listings, intuitive cart management, and a personalized light/dark theme toggle. 
                     With a fully responsive design, seamless product search, and real-time cart updates, it ensures a consistent and engaging experience across all devices. 
                     Built using React.js, Styled-Components, Context API, and Bootstrap, I took ownership of the front-end development, ensuring an interactive, scalable, and high-performance application. 
                     By focusing on user experience, design adaptability, and collaboration, 
                     I contributed to the success of the project, optimizing both the technical and business outcomes.`,
        links:{
         site:"https://fantastic-gnome-6a21eb.netlify.app/",
         github:"https://github.com/YASIN0707/E-commerce-"
        }
     },
]

const Portfolio = () => {
    const [currentProject,setcurrentProject]=useState(0)
  return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row'id='portfolio'>
        <div className='z-10 glass p-6 w-full border-2 max-w-[600]'>
         <div className='w-full h-80'>
            <img src={projects[currentProject].img} alt={projects[currentProject].title} className='w-full h-full object-cover rounded-lg mb-4' />
         </div>
         <p className='text-gray-200 my-4'>
         {projects[currentProject].description}
         </p>
         <div className='flex space-x-4'>
            <a href={projects[currentProject].links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
            <a href={projects[currentProject].links.github} className='px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'><AiFillGithub/></a>
         </div>
        </div>

        <div className='absolute inset-0 '>
        <div className='hidden md:block'>
          <ShinnyEffect left={100} top={0} size={900}/> 
        </div>
        </div>

        <ul className='z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
            {projects.map((project,index)=>( 
                <li key={index} onClick={()=> setcurrentProject(index)} className={'cursor-pointer text-gray-300  bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProject === index ? "bg-slate-900" : "" } '}>
                    {project.title} 
                </li>
            ))}
            
        </ul>
   </div> 
  )
}

export default Portfolio