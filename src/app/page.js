"use client";

import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube} from "react-icons/ai"
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import Image from "next/image";
import deved from "/public/dev-ed-wave.png"
import design from "/public/design.png"
import code from "/public/code.png"
import web1 from "/public/web1.png"
import web2 from "/public/web2.png"
import web3 from "/public/web3.png"
import web4 from "/public/web4.png"
import web5 from "/public/web5.png"
import web6 from "/public/web6.png"
import {useState} from "react"
import Link from "next/link";



export default function Home() {

  const [darkMode,setDarkMode]=useState(true);
  const [showDetail,setDetail]=useState(false);
  function showDetails(){
    setDetail(!showDetail);
  }

  return (
        
      
    <div className={darkMode? "dark":"" }>
      <Head>
        <title>
          Shashwat Portfolio Website
        </title>

        <meta name="description"></meta>
        <link rel="icon" href="/favicon.io"></link>
      </Head>

      <main className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" text-lg  dark:text-teal-700" >By Shashwat</h1>
            <ul className=" flex items-center ">
              <li>
                <BsFillMoonStarsFill onClick={()=> {setDarkMode(!darkMode)
                  console.log(darkMode)}
                }
                 className="cursor-pointer  text-2xl"/>
                </li>
              <li><a className="bg-gradient-to-r from  bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="https://drive.google.com/file/d/14N5r1Taw1f8T-fjdOKqKr9sTYT1PeVBE/view?usp=sharing" >Resume</a></li>
            </ul>
          </nav>

           <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Shashwat Jain
              </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and Desginer  
            </h3>
            <p className="text-md py-5 leading-8 dark:text-white text-gray-800 md:text-xl mx-w-lg mx-auto">
              Freelancer providing services for programming.
              join me down below and lets get cracking 
              
            </p>
           </div>

           <div className="text-5xl flex justify-center gap-16 text-gray-600">

            <button onClick={showDetails}>
            <IoIosMail/>
            </button>

            <Link href="https://www.linkedin.com/in/shashwat-jain-0827a8251/">
              <AiFillLinkedin/>
            </Link>

            <Link href="https://github.com/crash484">
              <FaGithub></FaGithub>
            </Link>

            </div>
            {showDetail && <div className="text-xs text-center pt-10"> my email is : jshashwat032@gmail.com</div>}

           

           <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="a 3d image of me" layout="fill" objectFit="cover"/>
           </div>

        </section>

        <section>

          <div className="flex flex-col text-center">
            <h3 className="text-3xl py-1 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            I offer from a wide range of services, including brand design,
            programming and teaching
            </p>
          </div>

          <div className="lg:flex gap-10 justify-center">

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={design} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white ">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={code} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Coding</h3>
              <p className="py-2">
                I build robust and user-friendly applications using the MERN stack
              </p>
              <h4 className="py-4 text-teal-600">Coding tools i use</h4>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">MongoDB</p>
              <p className="text-gray-800 py-1 dark:text-white">AWS and VERCEL</p>
            </div>
          </div>

        </section>

        <section>
          <div className="px-10">
            <h3 className="text-3xl py-1 text-teal-600">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            I offer from a wide range of services, including brand design, building websites, API&apos;s...
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap px-10">
            <div className="basis 1/3 flex-1"> 
              <Image src={web1} className="rounded-lg object-cover" 
              width={'100%'} height={'100%'} layout="responsive" alt="" />
            </div>
            <div className="basis 1/3 flex-1"> 
              <Image src={web2} className="rounded-lg object-cover" 
              width={'100%'} height={'100%'} layout="responsive" alt="" />
            </div>
            <div className="basis 1/3 flex-1"> 
              <Image src={web3} className="rounded-lg object-cover"
               width={'100%'} height={'100%'} layout="responsive" alt="" />
            </div>
            <div className="basis 1/3 flex-1"> 
              <Image src={web4} className="rounded-lg object-cover"
               width={'100%'} height={'100%'} layout="responsive" alt="" />
            </div>
            <div className="basis 1/3 flex-1"> 
              <Image src={web5} className="rounded-lg object-cover" 
              width={'100%'} height={'100%'} layout="responsive" alt="" />
            </div>
            <div className="basis 1/3 flex-1"> 
              <Image src={web6} className="rounded-lg object-cover" 
              width={'100%'} height={'100%'} layout="responsive" alt="" />
            </div>
          </div>

        </section>


      </main>
    </div>
  );
}
