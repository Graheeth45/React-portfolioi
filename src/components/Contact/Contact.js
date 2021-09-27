import React from 'react'
import {Element} from 'react-scroll'
import './Contact.css'
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone , faMailBulk ,faAddressBook } from '@fortawesome/free-solid-svg-icons'
import {faGithub , faLinkedinIn , faInstagram} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        
       <Element className="Contact" name="contact">
           <div className="container_name">
            <div className="form">
              <div className="box">
                
                 <FontAwesomeIcon icon={faPhone} className="icon  "></FontAwesomeIcon>
                
                 <div className="text">
                    <h3>Phone :</h3>
                    <p>9500443401</p>
                 </div>
              </div>

               
              <div className="box">
                 <FontAwesomeIcon icon={faMailBulk} className="icon"></FontAwesomeIcon>
                 <div className="text">
                    <h3>Email ID :</h3>
                    <p>graheethsmiley@pec.edu</p>
                 </div>
              </div>

              <div className="box">
                 <FontAwesomeIcon icon={faAddressBook} className="icon"></FontAwesomeIcon>
                 <div className="text">
                    <h3>Address :</h3>
                    <p>No 1 , 8th Cross Rainbow Nagar <br></br> Puducherry <br></br>605011</p>
                 </div>
              </div>

              <div className="box">
              <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
                 <div className="text">
                    <h3>Github :</h3>
                    <p>https://github.com/Graheeth45</p>
                 </div>
              </div>

              <div className="box">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon"></FontAwesomeIcon>
                 <div className="text">
                    <h3>Linked In :</h3>
                    <p>https://www.linkedin.com/in/graheeth-g-aa9607213/</p>
                 </div>
              </div>

              <div className="box">
              <FontAwesomeIcon icon={faInstagram} className="icon"></FontAwesomeIcon>
                 <div className="text">
                    <h3>Instragram :</h3>
                    <p>https://www.instagram.com/mr_aggressive_.iyer/</p>
                 </div>
              </div>

              </div>

           </div>
       </Element>
    )
}

export default Contact
