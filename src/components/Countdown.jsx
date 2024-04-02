import React from 'react'
import { useCountdown } from '../hooks/useCountdown';

const Countdown = () => {
    const targetDate = new Date('2024-04-22T10:50:00').getTime();
    
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const GCP_CLIENT_ID = "307891520079-dh3r9l76gjb3fg8su27jrflkajtg76os.apps.googleusercontent.com"
    const GCP_API_KEY = "AIzaSyAf1Lsk0O9Sv2arCe-n3R2xS3mKQHo6ctg"

    const handleSetRemainder = () => {
        window.gapi.load('client:auth2', async () => {
          try {
            await window.gapi.client.init({
              apiKey: GCP_API_KEY,
              clientId: GCP_CLIENT_ID,
              discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
              scope: 'https://www.googleapis.com/auth/calendar.events',
            });
    
            if (!window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
              await window.gapi.auth2.getAuthInstance().signIn();
            }
    
            const event = {
              summary: 'ChaithraVallabha Wedding',
              description: 'ChaithraVallabha wedding day',
              start: {
                dateTime: new Date('2024-04-22T10:50:00').toISOString(),
              },
              end: {
                dateTime: new Date('2024-04-22T11:00:00').toISOString(),
              },
            };
    
            const response = await window.gapi.client.calendar.events.insert({
              calendarId: 'primary',
              resource: event,
            });
    
            console.log('Reminder added:', response.result);
          } catch (error) {
            console.error('Error adding reminder:', error);
          }
        });
      };

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
        <button onClick={handleSetRemainder} className='button mb-10'>SET REMAINDER</button>
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