import React from 'react'
import { Element } from 'react-scroll'
import './Project.css'



const Project = () => {
    return (
          <>
           <h1 className="project-title">Projects</h1>
       <Element name="Project" className="Project" >
            
          <div className="container">
                <div className="card">
                      <div className="circle">
                            <h3 className="Prime">Amazon Prime</h3>
                      </div>
                      <div className="content">
                            <p>I done this  project using HTML , CSS and javascript for my learing purpose in my college . For backend I use 
                                  PHP and for database . I use SQL 
                            </p>
                      </div>
                </div>

                <div className="card">
                      <div className="circle">
                            <h3>Amazon clone</h3>
                      </div>
                      <div className="content">
                            <p>I done this  project using HTML , CSS and javascript for my learing purpose in my college . For backend I use 
                                  PHP and for database . I use SQL 
                            </p>
                      </div>
                </div>

                <div className="card">
                      <div className="circle">
                            <h3>Book Order</h3>
                      </div>
                      <div className="content">
                            <p>I done this  project using HTML , CSS and javascript for my learing purpose in my college . For backend I use 
                                  PHP and for database . I use SQL 
                            </p>
                      </div>
                </div>

                <div className="card">
                      <div className="circle">
                            <h3>Mobile App</h3>
                      </div>
                      <div className="content">
                            <p>I done this  project using HTML , CSS and javascript for my learing purpose in my college . For backend I use 
                                  PHP and for database . I use SQL 
                            </p>
                      </div>
                </div>

                <div className="card">
                      <div className="circle">
                            <h3>Slum clearance</h3>
                      </div>
                      <div className="content">
                            <p>I done this  project using HTML , CSS and javascript for my learing purpose in my college . For backend I use 
                                  PHP and for database . I use SQL 
                            </p>
                      </div>
                </div>
          </div>
       </Element>
       </>
    )
}

export default Project
