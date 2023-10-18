import React from 'react';
import './style.css'; 

const SubscribedPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Subscribed Successfully</title>
        <link rel="stylesheet" href="./public/css/style.css" />
      </head>
      <body>
        <div className="subscribed_pageBox">
          <h2 className="subscribed_pageBox_title">Thank You for Subscribing</h2>
          <a className="subscribed_pageBox_Link" href="/">Back</a>
        </div>
      </body>
    </html>
  );
};

export default SubscribedPage;
