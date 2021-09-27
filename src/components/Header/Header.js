import React,{useState} from 'react'
import {Link }  from 'react-scroll'
import Modal from 'react-modal'
import "./Header.css"


Modal.setAppElement('#root')

const Header = () => {
    const[modelIsOpen , setModelIsOpen] = useState(false)
    return (
        <div className='header'>
            <div className='header__left'>
               <h1>Portfol<span className="Span">io</span></h1>
            </div>      
            <div className='header__right'>
                <Link to="about me" smooth={true} duration={200}>
                    <h4>About me</h4>
                </Link>
                <Link to="skill" smooth={true} duration={200}>
                    <h4>Skills</h4>
                </Link>
                <Link to="Project" smooth={true} duration={200}>
                    <h4>Project</h4>
                </Link>
                <Link to="Hobbies" smooth={true} duration={200}>
                    <h4>Hobbies</h4>
                </Link>
                <Link to="contact" smooth={true} duration={200}>
                    <h4>Contact</h4>
                </Link>
                
                <div className="button">
                   <h5 onClick={() => setModelIsOpen(true)}>Join me</h5>
                    <Modal 
                    isOpen={modelIsOpen}
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={() => setModelIsOpen(false)}
                    ><form>
                    <label>
                      Email Id :
                      <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                         <button onClick={() => setModelIsOpen(false)}>Close</button>
                   </Modal>
 
                </div>
               
            
            </div>     
        </div>
    )
}

export default Header
