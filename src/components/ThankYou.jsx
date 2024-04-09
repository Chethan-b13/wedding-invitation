import React from 'react'
import { MdLinkedCamera } from "react-icons/md";
import { FEATURED_IMAGE } from '../assets/AssestUrls';

const ThankYou = () => {

    return (
        <div className='CarouselContainer flexColumn' style={{backgroundImage:`url(${FEATURED_IMAGE})`}}>
            <img src={FEATURED_IMAGE}  alt="chaithraVallabha Wedding Feature" loading="lazy" />
            <h1 className='cursiveFont goldColor title mb-10'>Countdown to our big day has begun, and we <br ></br> want you to be a part of our story.<br />Save the date!</h1>
            <a href='https://photos.app.goo.gl/XVCEqg2RKxzpMRTG6' className='flexBox'>Share your captures here! <MdLinkedCamera /></a>
        </div>
    )
}

export default ThankYou