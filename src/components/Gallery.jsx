import React, { useMemo } from 'react'
import { GALLERY_IMG4, GALLERY_VIDEO1, IMAGE_2037, IMAGE_2968, IMAGE_7617, ShortsImage } from '../assets/AssestUrls';

const Gallery = () => {

    const imageNames = useMemo(() => [
        IMAGE_7617,
        ShortsImage,
        GALLERY_IMG4
    ], []);

    const imageNames2 = useMemo(() => [
        IMAGE_2968,
        "",
        IMAGE_2037,
    ], []);

    return (
        <div className='gallery__container'>
            <h1 className='cursiveFont goldColor title mb-10'>Our Love in Frames</h1>
            <div className="row">
                <div className="column">
                    {
                        imageNames?.map((imgurl,indx)=>{
                            return (
                                <img key={indx} src={imgurl} style={{width:"100%"}} alt={imgurl} />
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
                                    <video key={indx} src={GALLERY_VIDEO1} loop autoPlay playsInline muted></video>
                                </div>
                                : <img key={indx} src={imgurl} style={{width:"100%",height:indx === 2 && "10rem"}} alt={imgurl} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery