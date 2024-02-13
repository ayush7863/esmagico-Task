import React from "react";
import footerStyles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.footer_1}>
        <div id={footerStyles.footerlogo}></div>
        <div className={footerStyles.footerIcons}>
          <FaFacebookF className={footerStyles.icons} />
          <FaInstagram className={footerStyles.icons} />
          <FiYoutube className={footerStyles.icons} />
          <FaLinkedinIn className={footerStyles.icons} />
        </div>
      </div>
      <div className={footerStyles.footer_2}>
        <div className={footerStyles.footer_2_1}>
          <h4>Help & Support</h4>
          <p>Term & Services</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div className={footerStyles.footer_2_2}>
          <h4>Customer Care</h4>
          <p>2972 Westhemier Rd. Santa Ana, Illinios 85486</p>
          <p>999999999</p>
          <p>Email ID</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
