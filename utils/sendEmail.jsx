
import React from 'react';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, name) => {
  const msg = {
    to,
    from: {
      name: 'WaveSuper',
      email: process.env.FROM_EMAIL,
    },
    templateId: process.env.EMAIL_TEMPLATE_ID,
    dynamicTemplateData: { username: name },
  };

  sgMail.send(msg)
    .then(() => {
      console.log('Email was Sent');
    })
    .catch((err) => {
      console.log('Email Not Sent Error Occurred');
      console.error(err);
    });
};

export default sendEmail;
