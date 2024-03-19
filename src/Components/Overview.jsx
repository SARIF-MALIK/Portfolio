import React from "react";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technologies, services } from "../Constants";
import { motion } from "framer-motion";
import "./style.css"

function Overview() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          I'm a skilled web Developer with experience in JavaScript and
          expertise in frameworks like React, Express js, Node. I'm a quick
          learner and collaborater, scalable and user-friendly solutions that
          solve real-world problems. Let's work together to bring your ideas to
          Life!
        </div>
        <div className="flex flex-wrap justify-center">
          {services.map((service) => (
            <div>
              <Tilt
                key={service.icon}
                className="parallex-effect-glare-scale"
                perspective={500}
                glareColor="fed7aa"
                glareEnable={true}
                glareMaxOpacity={0.50}
                gyroscope={true}
                scale={1.10} 
                transitionSpeed={2500}
              >
                <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                    <img className='h-[150px] w-[150px]' src={service.icon} alt="" />
                    <div className="m-5 text-violet-500">
                        {service.title}
                    </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
