import React, { useState } from 'react'
// import sampleVideo from '../assets/videos/sample1.mp4';
import "../assets/css/header.css"
import heart from "../assets/images/heart.svg"
import poster from "../assets/images/main-banner.jpg"
import { FaVolumeMute, FaVolumeUp  } from "react-icons/fa";

const Header = () => {

    const [mute, setmute] = useState(true);

    const videoLink = "https://firebasestorage.googleapis.com/v0/b/tickiteasy-3c9ef.appspot.com/o/Wedding%2FVideo%2FFinal.mp4?alt=media&token=12c3d3aa-7ebd-4624-a16d-1b74430f9752"

    
    return (
        <>
        <section className='header' onClick={()=>{setmute(!mute)}}>
            <video poster={poster} src={videoLink} loop autoPlay playsInline muted={mute}></video>
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
            <h3 className='goldColor date'>April 22nd 2024</h3>
        </section>
        </>
    )
}

export default Header