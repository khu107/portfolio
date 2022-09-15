import React from 'react';
import InstaIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstaIcon />
        <FacebookIcon />
      </div>
      <p> &copy; 2022 pedrotech.com</p>
    </div>
  );
}

export default Footer;
