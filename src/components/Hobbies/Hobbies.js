import React from 'react'
import './Hobbies.css'
import { Element } from 'react-scroll'
import music from '../../assets/music.jpg'
import cricket from '../../assets/cricket.jpg'
import baskeball from '../../assets/basketball.jpg'
import bike from '../../assets/bike.jpg'



const Hobbies = () => {
    return (
        <Element className="Hobbies" name="Hobbies">
            <div className="slider">
                <div className="images">
                    <input type="radio" name="slide" id="img1"></input>
                    <input type="radio" name="slide" id="img2"></input>
                    <input type="radio" name="slide" id="img3"></input>
                    <input type="radio" name="slide" id="img4"></input>

                    <img src={music}  className="m1"  alt="img1" />
                    <img src={cricket}  className="m2"  alt="img2" />
                    <img src={baskeball}  className="m3"  alt="img3" />
                    <img src={bike}  className="m4"  alt="img4" />
                </div>

                <div className="dots">
                    <label for="img1"></label>
                    <label for="img2"></label>
                    <label for="img3"></label>
                    <label for="img4"></label>
                </div>
            </div>
        </Element>
       
    )
}

export default Hobbies
