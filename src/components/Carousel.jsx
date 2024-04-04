import React, { useMemo, useState } from 'react'
import { MdLinkedCamera } from "react-icons/md";

const Carousel = () => {
    const imageNames = useMemo(() => [
        'bride.jpg',
        'brooke-cagle-oMtXGNw4ZEs-unsplash.jpg',
        'callie-morgan-yXwxlJPsDeU-unsplash.jpg',
        'foto-pettine-IfjHaIoAoqE-unsplash.jpg',
        'gallery-images01.jpg',
        'groom.jpg',
        'jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg',
        'main-banner.jpg',
        'nathan-dumlao-5BB_atDT4oA-unsplash.jpg',
        'save-date.jpg'
    ], []);

    const [counter, setcounter] = useState(2);

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setcounter(counter => (counter + 1) % imageNames.length);
    //   }, 3500);
    
    //   return () => {
    //     clearTimeout(timer)
    //   }
    // }, [counter,imageNames.length])

    // useEffect(() => {
    //     // Preload images
    //     const preloadedImages = [];
    //     imageNames.forEach(imageName => {
    //         const img = new Image();
    //         img.src = require(`../assets/images/couples/${imageName}`);
    //         preloadedImages.push(img);
    //     });
    // }, [imageNames]);
    

    return (
        <div className='CarouselContainer flexColumn' style={{backgroundImage:`url(${require(`../assets/images/couples/${imageNames[counter]}`)})`}}>
            <img key={counter} src={require(`../assets/images/couples/${imageNames[counter]}`)} alt={imageNames[counter]} />
            <h1 className='cursiveFont goldColor title mb-10'>Countdown to our big day has begun, and we <br ></br> want you to be part of our story.<br />Save the date!</h1>
            <a href='https://photos.app.goo.gl/XVCEqg2RKxzpMRTG6' className='flexBox'>Share your captures here! <MdLinkedCamera /></a>
        </div>
    )
}

export default Carousel