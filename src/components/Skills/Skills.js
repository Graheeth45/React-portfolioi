import React from 'react'
import { Element } from 'react-scroll'
import './Skills.css'
import image from '../../assets/engineering.png'
import  LinearProgress  from '@material-ui/core/LinearProgress'



const Skills = () => {
    return (
       <Element className="Skills" name="skill" id="skill">
           <div className="row">
               <div className="col-md-6 left-img">
                      <img src={image} alt="" className="image" />
               </div>


               <div className="col-md-6 left">
               <div className="skillcontainer_text">
                 <h1 className="h1tag">My Skill<span>s</span></h1>

                 <div className="skillContainer_skillset">
                     <h5>C</h5>
                     <div classname="skillContainer_slider skillContainer_slider1">
                          <LinearProgress variant="determinate" value={90}/>
                     </div>
                 </div>

                 <div className="skillContainer_skillset">
                     <h5>C++</h5>
                     <div classname="skillContainer_slider skillContainer_slider2">
                          <LinearProgress variant="determinate" value={95}/>
                     </div>
                 </div>

                 <div className="skillContainer_skillset">
                     <h5>DBMS</h5>
                     <div classname="skillContainer_slider skillContainer_slider3">
                          <LinearProgress variant="determinate" value={85}/>
                     </div>
                 </div>

                 <div className="skillContainer_skillset">
                     <h5>SQL</h5>
                     <div classname="skillContainer_slider skillContainer_slider4">
                          <LinearProgress variant="determinate" value={80}/>
                     </div>
                 </div>

                 <div className="skillContainer_skillset">
                     <h5>React JS</h5>
                     <div classname="skillContainer_slider skillContainer_slider5">
                          <LinearProgress variant="determinate" value={87}/>
                     </div>
                 </div>

                 <div className="skillContainer_skillset">
                     <h5>HTML</h5>
                     <div classname="skillContainer_slider skillContainer_slider6">
                          <LinearProgress variant="determinate" value={69}/>
                     </div>
                 </div>

                 <div className="skillContainer_skillset">
                     <h5>CSS</h5>
                     <div classname="skillContainer_slider skillContainer_slider7">
                          <LinearProgress variant="determinate" value={75}/>
                     </div>
                 </div>

                 <div className="skillContainer_skillset">
                     <h5>AWS</h5>
                     <div classname="skillContainer_slider skillContainer_slider8">
                          <LinearProgress variant="determinate" value={60}/>
                     </div>
                 </div>

           </div>
               </div>

            </div>
         
       </Element>
    )
}

export default Skills
