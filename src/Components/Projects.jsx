import React from "react";
import { Styles } from "../utils/Style";
import { projects } from "../Constants";
import Tilt from "react-parallax-tilt";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly describes with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </div>
      </div>

    <div className="flex flex-wrap p-8 justify-evenly items-center">
    {projects.map((project) => (
        <Tilt key={project.name}
            className="w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-red-300 p-3 rounded-xl border-2 border-violet-900"
        >
            <div>
                <div className="flex justify-center items-center mb-3">
                    <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center" >
                        <a href={project.link} target="_blank">
                        <SiNetlify  className="text-3xl font-bold text-violet-600" />
                        </a>
                    </div>
                    <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center" >
                        <a href={project.source_code_link} target="_blank">
                        <FaGithub  className="text-3xl font-bold text-violet-600" />
                        </a>
                    </div>
                    
                    <img src={project.img} alt="project" />
                </div>
            </div>
        </Tilt>
      ))}
    </div>
    </div>
  );
}

export default Projects;
