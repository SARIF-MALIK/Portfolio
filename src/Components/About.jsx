import React from 'react'
import Profile from '../assets/about/samz2.jpg'
import { Styles } from '../utils/Style'
import Resume from '../assets/resume.pdf'
import { TiArrowDownOutline } from "react-icons/ti";
import '../App.css'

function About() {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
        <div className='flex-1 py-4'>
            <span className={Styles.heroHeadText}>
                Hi, I'm <span className='text-orange-600'>Sarif</span>
                <br/>
                <span className={Styles.heroSubText}>
                    I am a MERN Stack Developer &
                    <br/>
                    problem Solver (DSA C++)
                </span>
            </span>
            <br />
            <div className='w-[14rem] '>
                <a href={Resume}
                
                target="_blank"
                rel='noreferrer'
                >
                    <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-red-500'>
                    <TiArrowDownOutline className='text-lg mr-3 mt-1'/> Resume
                    </div>
                </a>
            </div>
        </div>
        <div className='flex flex-wrap rounded-full overflow-hidden w-[30%] element z-[2]'>
            <img src={Profile} alt="devPic" className='object-fill '/>
        </div>
    </div>
  )
}

export default About