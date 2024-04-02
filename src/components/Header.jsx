import React, { useEffect, useState } from 'react'
import sampleVideo from '../assets/videos/sample1.mp4';
import "../assets/css/header.css"
import heart from "../assets/images/heart.svg"

const Header = () => {

    const [mute, setmute] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setmute(false)
      }, 2000);
    }, [])
    

    return (
        <>
        <section className='header'>
            <video src={sampleVideo} loop autoPlay muted></video>
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
                <h3 className='primaryTextColor'>THE JOY OF THEIR WEDDIGN DAY</h3>
            </div>
            <h3 className='goldColor date'>April 22nd 2024</h3>
        </section>
        </>
    )
}

export default Header