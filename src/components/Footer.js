import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.youtube.com/channel/UCUCRxZVPnG7Jwv7Qei0qUeA"
        target="_blank"
      >
        <img
          src="images/youtube-icon.png"
          alt="Youtube-icon"
        />
      </a>
      <a href="https://www.facebook.com/saurabhkumar350" target="_blank">
        <img
          src="images/facebook-con.png"
          alt="Facebook-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kumar-saurabh-12a167190"
        target="_blank"
      >
        <img
          src="images/linkedin-icon.png"
          alt="LinkIn-icon"
        />
      </a>
      <a href="https://twitter.com/kumarsaurabh350" target="_blank">
        <img
          src="images/twitter-icon.png"
          alt="Twitter-icon"
        />
      </a>
    </div>
  );
}

export default Footer;
