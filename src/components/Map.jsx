import React from 'react'

const Map = () => {
  const map_link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1413253982014!2d77.59602217536138!3d12.89863271647327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1506e24195d5%3A0x99968fab3b045129!2sAmara%20Kalyana%20Mantapa!5e0!3m2!1sen!2sin!4v1712085971329!5m2!1sen!2sin"
  return (
    <div className='MapConatiner flexColumn'>
        <h3 className='cursiveFont goldColor title mb-10'>Locate Our Celebration</h3>
        <iframe title='wedding Venue' src={map_link} width="88%" height="200" style={{border:"0",borderRadius:"8px"}} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <p id="venueAddress" onClick={()=>{window.open(map_link,"_blank")}}>Amara Kalyana Mantapa < br/> Bilekahalli, Bengaluru</p>
    </div>
  )
}

export default Map