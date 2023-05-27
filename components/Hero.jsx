import React, { Fragment, useState, useEffect } from "react";
import heroImage from "../public/1pic1 (1).png";
import Image from "next/image";
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb, SiExpress} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"
import {FaReact} from "react-icons/fa"

const Hero = () => {
    const [below1300, setbelow1300] = useState(false);
    const [below1250, setbelow1250] = useState(false);
    const [below1200, setbelow1200] = useState(false);
    const [below1000, setbelow1000] = useState(false);
    const [below600, setbelow600] = useState(false);

    useEffect(() => {
        function handleResize() {
          setbelow1300(window.innerWidth < 1300);
          setbelow1250(window.innerWidth < 1250);
          setbelow1200(window.innerWidth < 1200);
          setbelow1000(window.innerWidth < 1000);
          setbelow600(window.innerWidth < 600);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <Fragment>
        { !below1000 ? (
      <section className={` grid ${below1250 ? "grid-cols-1" : "grid-cols-2"} grid-cols-2 w-10/12 ${below1200 ? "w-11/12" : "w-10/12"} m-auto mt-24 font-Roboto_mono`}>
        <div className="text-elements inline-flex relative text-white flex-col">
          <div className={`w-10/12 ${below1300 ? "ml-0" : "ml-10"}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
                MERN-stack Developer
              </p>
            </div>
            <div className={`head leading-12  ${below1200 ? "mt-4 mb-8 text-4xl" : "mt-12 mb-12 text-5xl"}`}>
              <p>This is</p>
              <p>Shahnur Alam Raju</p>
            </div>
            <div className="desc text-base opacity-60 mb-10">
              <p>I design and code beautifully simple things</p>
              <p>and I love what I do.</p>
            </div>
            <h3 className={`uppercase text-green text-3xl underline underline-offset-4  ${below1200 ? "mb-10" : "mb-20"}`}>
              Let&apos;s Chat:
            </h3>
          </div>
          <div className="experience uppercase flex space-x-8 pb-7">
            <div className="year flex items-center">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>3</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                Years <p>of Experience</p>{" "}
              </div>
            </div>
            <div className="projects flex items-center justify-between">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>75</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                Project completed <p>with 12 companies</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" image-elements relative">
          <div className="flex justify-end items-center bg-gradient-primary-2 absolute bottom-0">
            <span className="absolute top-20 right-28 bg-gray3 shadow-3xl w-8 h-8 flex items-center justify-center rounded-50">
                <SiMongodb className="text-3xl text-green"/>
            </span>
            <span className="absolute top-60 -right-10 w-24 h-24 bg-gray2 shadow-2xl flex items-center justify-center rounded-50">
                <IoLogoNodejs className="text-6xl text-green"/>
            </span>
            <span className="absolute top-3/4 -left-12 w-16 h-16 bg-darkgray shadow-xl flex items-center justify-center rounded-50">
                <TbBrandNextjs className="text-4xl text-white"/>
            </span>
            <span className="absolute top-10 left-12 w-14 h-14 flex items-center opacity-60 justify-center bg-darkgray shadow-4xl rounded-50">
                <FaReact className="text-3.5xl text-react" />
            </span>
            <span className="absolute bottom-1 left-52 w-14 h-14 flex items-center opacity-60 justify-center bg-darkgray shadow-4xl rounded-50">
                <SiExpress className="text-3.5xl text-green" />
            </span>
            <Image
              className={``}
              src={heroImage}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section> ) 
      : 
      (
        <section className={` flex flex-col-reverse w-11/12 m-auto font-Roboto_mono`}>
        <div className={`text-elements relative text-white  w-10/12 m-auto ${below600 ? "w-11/12": ""}`}>
          <div className={`w-10/12 m-auto ${below600 ? "w-full": ""}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
              MERN-stack Developer
              </p>
            </div>
            <div className={`head leading-12 mt-4 mb-8 ${below600 ? "text-3.5xl" : "text-4xl"}`}>
            <p>This is</p>
              <p>Shahnur Alam Raju</p>
            </div>
            <div className="desc text-base opacity-60 mb-10">
              <p>I design and code beautifully simple things</p>
              <p>and I love what I do.</p>
            </div>
            <h3 className={`uppercase text-green text-3xl underline underline-offset-4"`}>
              Let&apos;s Chat:
            </h3>
          </div>
          <div className={`experience uppercase w-11/12 m-auto mt-7 pb-7 ${below600 ? "w-full float-left space-y-2": "flex space-x-8"}`}>
            <div className="year flex items-center">
              <p className={` mr-4 text-4xl`}>3</p>
              <div className={`opacity-75 text-sm`}>
                Years <p>of Experience</p>
              </div>
            </div>
            <div className="projects flex items-center ">
              <p className={` mr-4 text-4xl`}>75</p>
              <div className={`opacity-75 text-sm`}>
                Project completed <p>with 12 companies</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" image-elements relative mt-16 mb-20">
          <div className="flex justify-end items-center bg-gradient-primary-2 w-11/12 m-auto">
            <span className={`absolute bg-gray3 shadow-3xl w-8 h-8 flex items-center justify-center rounded-50 top-10 right-12`}>
                <SiMongodb className="text-4xl text-green"/>
            </span>
            <span className={`absolute w-12 h-12 bg-gray2 shadow-2xl flex items-center justify-center rounded-50 top-65 `}>
                <IoLogoNodejs className="text-6xl text-green"/>
            </span>
            <span className={`absolute  w-12 h-12 bg-darkgray shadow-xl flex items-center justify-center rounded-50  top-1/4 left-2`}>
                <SiExpress className="text-4xl text-green"/>
            </span>
            <span className={`absolute  w-14 h-14 bg-darkgray shadow-xl flex items-center justify-center rounded-50  top-3/4 right-2`}>
                <TbBrandNextjs className="text-4xl text-white"/>
            </span>
            <span className={`absolute  w-12 h-12 bg-darkgray shadow-xl flex items-center justify-center rounded-50  top-3/4 left-12`}>
                <FaReact className="text-4xl text-blue"/>
            </span>
            <Image
              className={`w-[400px]`}
              src={heroImage}
              alt="Picture of the author"
            />
          </div>
          {/* <div className="flex justify-end items-center bg-gradient-primary-2 w-8/12 m-auto">
            <span className={`absolute bg-gray3 shadow-3xl w-8 h-8 flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-10 right-48"}`}>
                <SiMongodb className="text-4xl text-blue"/>
            </span>
            <span className={`absolute w-24 h-24 bg-gray2 shadow-2xl flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-60 right-16"}`}>
                <IoLogoNodejs className="text-6xl text-green"/>
            </span>
            <span className={`absolute  w-16 h-16 bg-darkgray shadow-xl flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-3/4 left-28"}`}>
                <TbBrandNextjs className="text-4xl text-red"/>
            </span>
            <Image
              className={`w-[400px]`}
              src={heroImage}
              alt="Picture of the author"
            />
          </div> */}
        </div>
      </section>
      )}
    </Fragment>
  );
};

export default Hero;
