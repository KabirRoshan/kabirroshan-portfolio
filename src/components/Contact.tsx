import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <a href="mailto:kabir.roshan@hotmail.co.uk?subject=Hello%20Kabir&body=I%20wanted%20to%20reach%20out...">
            kabir.roshan@hotmail.co.uk
          </a>
          <p>Phone: +44 7522138435</p>
          <p>Thank you for visiting my page. Stay connected and follow my work on social media:</p>
          <a href="https://github.com/KabirRoshan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/kabir-roshan/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;