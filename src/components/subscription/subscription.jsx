import React from 'react';
import './style.css';
import { useNavigate, Link } from "react-router-dom";

const SubscriptionPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Subscription Page</title>
        <link rel="stylesheet" href="./public/css/style.css" />
      </head>
      <body>
        <div className="subscription_form">
          <h3 className="subscription_form_title">Subscribe Us</h3>
          <form method="post" action="/sendemail" onSubmit={handleSubmit}>
            <div className="subscription">
              <div className="subscription_form_inputGroup">
                <label>Name</label>
                <input type="text" name="username" placeholder="Please enter your name" />
              </div>
              <div className="subscription_form_inputGroup">
                <label>Email</label>
                <input type="email" name="email" placeholder="Please enter your Email" />
              </div>
              <div className="subscription_form_inputGroup">
                
                <Link to="/sent" className="subscription_form_submitBtn">Subscribe</Link>
              </div>
            </div>

          </form>
        </div>
      </body>
    </html>
  );
};

export default SubscriptionPage;
