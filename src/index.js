import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/main.css"
import "./assets/css/index.css"
import banner from "./assets/images/main-banner.jpg"
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
        <title>ChaithraVallbha</title>
        <meta property="og:title" content="ChaithraVallbha-Wedding Invitation" />
        <meta property="og:description" content="Come celebrate our wedding day with us! You're invited to join in the joy on April 22nd, 2024. Our families are excited to share this happy occasion with you. We can't wait to create wonderful memories together and appreciate your presence on this special day." />
        <meta property="og:image" content={banner} />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        {/* Other Open Graph tags */}
    </Helmet>
    <App />
  </React.StrictMode>
);
