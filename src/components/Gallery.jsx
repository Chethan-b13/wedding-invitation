import React, { useMemo } from 'react'
import sampleVideo from '../assets/videos/sample1.mp4';
import poster from "../assets/images/main-banner.jpg"

const Gallery = () => {

    const imageNames = useMemo(() => [
        'ty-images1.jpg',
        'brooke-cagle-oMtXGNw4ZEs-unsplash.jpg',
        'callie-morgan-yXwxlJPsDeU-unsplash.jpg',
    ], []);

    const imageNames2 = useMemo(() => [
        'bride.jpg',
        "",
        'brooke-cagle-oMtXGNw4ZEs-unsplash.jpg',
    ], []);

    return (
        <div className='gallery__container'>
            <h1 className='cursiveFont goldColor title mb-10'>Wedding Couple's Gallery</h1>
            <div className="row">
                <div className="column">
                    {
                        imageNames?.map((imgurl,indx)=>{
                            return (
                                indx === 2 ?
                                <div className="videoContainer horizontal">
                                    <video src={"https://firebasestorage.googleapis.com/v0/b/kalanidhi-kala-studios.appspot.com/o/sample3.mp4?alt=media&token=ddf07e1c-b83d-4353-ae82-87ae97a6ba90"} loop autoPlay playsInline muted></video>
                                </div>
                                : <img key={indx} src={require(`../assets/images/couples/${imgurl}`)} style={{width:"100%"}} alt={imgurl} />
                            )
                        })
                    }
                </div>
                <div className="column">
                    {
                        imageNames2?.map((imgurl,indx)=>{
                            return (
                                indx === 1 ?
                                <div className="videoContainer vertical">
                                    <video src={sampleVideo} loop autoPlay playsInline muted></video>
                                </div>
                                : <img key={indx} src={require(`../assets/images/couples/${imgurl}`)} style={{width:"100%"}} alt={imgurl} />
                            )
                        })
                    }
                </div>
                <div className="column">
                    {
                        imageNames?.map((imgurl,indx)=>{
                            return <img key={indx} src={require(`../assets/images/couples/${imgurl}`)} alt={imgurl} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery