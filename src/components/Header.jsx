import React, { useState } from 'react'
// import sampleVideo from '../assets/videos/sample1.mp4';
import "../assets/css/header.css"
import heart from "../assets/images/heart.svg"
import { FaVolumeMute, FaVolumeUp  } from "react-icons/fa";
import {  HEADERVIDEO, POSTER } from '../assets/AssestUrls';

const Header = () => {

    const [mute, setmute] = useState(true);

    
    return (
        <>
        <section className='header' onClick={()=>{setmute(!mute)}}>
            <video poster={POSTER} src={HEADERVIDEO} loop autoPlay playsInline muted={mute}></video>
            <div className="volumeIcons">
                {
                    mute ? <FaVolumeMute /> : <FaVolumeUp />
                }
            </div>
        </section>
        <section className='header__content flexColumn gap20'>
            <div className="flexColumn">
                <h3 className='primaryTextColor'>TOGETHER</h3>
                <h3 className='primaryTextColor'>WITH THEIR FAMILIES</h3>
            </div>
            <div className="flexColumn couple_names">
                <h3 className='cursiveFont goldColor'>Chaithra</h3>
                <img src={heart} alt="hearts" />
                <h3 className='cursiveFont goldColor'>Sri Vallabha</h3>
            </div>
            <div className="flexColumn">
                <h3 className='primaryTextColor'>INVITE YOU TO CELEBRATE</h3>
                <h3 className='primaryTextColor'>THE JOY OF THEIR WEDDING DAY</h3>
            </div>
            <div className="flexColumn">
                <h3 className='goldColor date'>April 22nd 2024</h3>
                <p className='primaryTextColor'>Muhurtham: 10:50 AM</p>
                <p className='primaryTextColor'>Lunch: 1 PM</p>
            </div>
        </section>
        </>
    )
}

export default Header