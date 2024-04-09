import React from 'react'
import { useCountdown } from '../hooks/useCountdown';

const Countdown = () => {
    const targetDate = new Date('2024-04-22T10:50:00').getTime();
    
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <div className='flexColumn'>
        <div className="show-counter">
            <div className="flexBox">
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </div>
        </div>
        </div>
    )
}

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <p>{value}</p>
        <span>{type}</span>
      </div>
    );
  };

export default Countdown