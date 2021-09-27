import React from 'react'
import { Element } from 'react-scroll'
import './About_me.css'
import graheeth_logo from '../../assets/picture.jpg'
import {init} from 'ityped';
import { useEffect, useRef } from 'react';




const About_me = () => {

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { showCursor: true,
            backDelay:1300,
            backSpeed:50,
             strings: ["Developer" , "Full-stack Developer" , "Software" , "C" , "C++" , "React js" , "Cloud-Technology" ] })
    },[])
    
    return (
       <Element name="about_me" className="about_me" id="about_me">
           <div className="row">
               <div className="col-md-6 left-img">
                    <img className="img" src={graheeth_logo} alt="" />
               </div>
               <div className="col-md-6 right-content">
                    <h1>Hello , I am Graheeth</h1>
                    <h2> <span ref={textRef}></span></h2>
                    
               </div>
           </div>
       </Element>
    
    )
}

export default About_me
