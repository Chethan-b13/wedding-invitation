import React from 'react'
import { MEETTHECOUPLE_IMAGE } from '../assets/AssestUrls'

const MeetTheCouple = () => {

    const story =`Seven years ago, destiny whispered, and two souls embarked on a journey. 
    Chaithra, a vibrant bloom, met Sri Vallabha, a steady oak, their laughter echoing in harmony. 
    Years bloomed with shared dreams, whispered secrets, and unwavering support. 
    Now, their love story takes a beautiful turn, as they pledge their hearts on April 22,2024. 
    Witness their vows, celebrate their joy as their forever begins. Join us for an unforgettable day.`

    

    return (
        <>
        <div className="coupleIntro flexColumn">
            <h3 className='cursiveFont goldColor'>Meet The Couple</h3>
            <img src={MEETTHECOUPLE_IMAGE} alt="chaithravallabha" />
            <p className='primaryTextColor'>{story}</p>
        </div>
        </>
    )
}

export default MeetTheCouple