import css from "../assets/old/css.png"
import bootstrap from "../assets/old/bootstrap.png"
import express from "../assets/old/express.png"
import firebase from "../assets/old/firebase.png"
import git from "../assets/old/git.png"
import html from "../assets/old/html.png"
import jquery from "../assets/old/jquery.png"
import js from "../assets/old/js.png"
import material from "../assets/old/material ui.png"
import mongodb from "../assets/old/mongodb.png"
import mysql from "../assets/old/mysql.png"
import node from "../assets/old/node js.png"
import react from "../assets/old/react.png"
import sass from "../assets/old/sass.png"
import web from "../assets/old/web.png"
import ux from "../assets/old/ux.png"
import proj1 from "../assets/old/project1.png"
import proj2 from "../assets/old/project3.png"
import proj3 from "../assets/old/project5.png"
const services = [
    {
        title : "Web Developer", 
        icon: web,
    },
    {
        title : "React Developer", 
        icon: react,
    },
    {
        title : "UI/UX Designer", 
        icon: ux
    },
]
const technologies = [
    {
        name : "HTML 5", 
        icon: html,
    },
    {
        name : "CSS 3", 
        icon: css,
    },
    {
        name : "JavaScript", 
        icon: js,
    },
    {
        name : "React", 
        icon: react,
    },
    {
        name : "Bootstrap", 
        icon: bootstrap,
    },
    {
        name : "Express", 
        icon: express,
    },
    {
        name : "Firebase", 
        icon: firebase,
    },
    {
        name : "Git", 
        icon: git,
    },
    {
        name : "JQuery", 
        icon: jquery,
    },
    {
        name : "Material UI", 
        icon: material,
    },
    {
        name : "MongoDB", 
        icon: mongodb,
    },
    {
        name : "MySQL", 
        icon: mysql,
    },
    {
        name : "Node Js", 
        icon: node,
    },
    {
        name : "Sass", 
        icon: sass,
    },
]


const projects = [
    {
        name : "Go-Food",
        link : "https://github.com/SARIF-MALIK/GoFood-FullStack",
        source_code_link : "https://github.com/SARIF-MALIK/GoFood-FullStack",
        image: proj1,
        des : "this is full stack project using Mern"
    },
    {
        name : "Chat Bot using ChatGpt API",
        link : "https://github.com/SARIF-MALIK/Chatbot",
        source_code_link : "https://github.com/SARIF-MALIK/Chatbot",
        image : proj2,
        des : "this is full stack project using Mern"
    },
    {
        name : "Chat app using Socket.io",
        link : "https://github.com/SARIF-MALIK/ChatApp",
        source_code_link : "https://github.com/SARIF-MALIK/ChatApp",
        image : proj3,
        des : "this is full stack project using Mern"
    },
]

export {services, technologies, projects}