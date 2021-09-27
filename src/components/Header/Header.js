import React from 'react'
import {Link}  from 'react-scroll'
import "./Header.css"

const Header = () => {
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
                <h4 className="button">
                    Join Me
                </h4>
            </div>     
        </div>
    )
}

export default Header
