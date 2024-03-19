import React from 'react'
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import { Styles } from '../utils/Style';
import { technologies, services } from '../Constants';
import {motion} from 'framer-motion'


function Overview() {
  return (

   <div>
    <div className="flex-row items-center pl-5 justify-center pt-3" id='Overview'>
        <span className={Styles.sectionHeadText}>
            Introduction
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
            I'm a skilled web Developer with experience in JavaScript and expertise in frameworks like React, Express js, Node. I'm a quick learner and collaborater, scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to Life!
        </div>
        
    </div>
   </div>


  )
}

export default Overview