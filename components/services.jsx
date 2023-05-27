import React, { useState, useEffect } from 'react'
import Box from "./utils/Box"

const boxes = [
  {
    headline: "Web Design",
    desc: "Create Digital products with unique ideas",
    project: "200+ Projects",
  },
  {
    headline: "Front-End",
    desc: "I develop front-end with coding super smooth",
    project: "165+ Projects"
  },
  {
    headline: "Back-End",
    desc: "Unleashing the Potential of Backend Development.",
    project: "86+ Projects"
  },
  {
    headline: "MERN Stack",
    desc: "Building the Future, One MERN Stack at a Time.",
    project: "40+ Projects"
  }
];


const Works = () => {
  const [lower1075, setlower1075] = useState(false);
  const [lower790, setlower790] = useState(false);

  useEffect(() => {
    function handleResize() {
      setlower1075(window.innerWidth < 1075);
      setlower790(window.innerWidth < 790);

    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <section id='services' className={`pt-10 pb-10 bg-gray3`}>
      <div className={`inner mb-20 ${lower790 ? " mt-16" : "grid grid-cols-1 mt-32"}`}>
        <div className="boxs space-y-4">
          {boxes.map((box, index) => (
            <Box key={index} headline={box.headline} desc={box.desc} project={box.project} />
          ))}
        </div>
        <div className={`text text-white font-Roboto_mono mx-auto ${lower1075 ? "w-11/12" : "w-10/12"} ${lower790 ? "w-9/12 mt-10" : ""}`}>
          <p className='opacity-60 '>Introduce</p>
          <h1 className={` ${lower1075 ? "text-3.5xl" : "text-4xl"}`}>Hello! I&apos;m Shahnur</h1>
          <h1 className={` ${lower1075 ? "text-3.5xl mb-5" : "text-4xl mb-7"}`}>Alam</h1>
          <p className={`italic opacity-90 mb-12 leading-1 ${lower1075 ? "textbase" : "text-xl"}`}>Every great design with even better story</p>
          <p className={`w-10/12 opacity-75 ${lower790 ? "h-[300px] w-11/12 overflow-x-auto" : ""}`}>
            I posses a valuable skill set for building dynamic and robust web applications. The MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js, provides a comprehensive framework for developing full-stack JavaScript applications.

            My expertise in MongoDB allows me to work with a flexible and scalable NoSQL database, enabling you to store and retrieve data efficiently. With Express.js, I can create a robust backend server that handles HTTP requests and routes, providing a seamless connection between the client-side and the database. Being proficient in React.js empowers I have to build interactive and responsive user interfaces. React.js utilizes a component-based architecture, making it easier to develop reusable UI elements and manage the application state effectively. My skills in Node.js enable me to build the server-side of web applications using JavaScript. I have the ability to develop end-to-end web applications, from designing and implementing the database structure to building the frontend and backend components. My expertise allows me to create efficient and modern web solutions that meet the needs of todays fast-paced digital landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Works