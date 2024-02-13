import React from "react";
import navbarStyles from "./Navbar.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className={navbarStyles.navbarContainer}>
      <nav>
        <div className={navbarStyles.firstNavPart}>
          {/* <img id="logo" src="./logo.png" alt="logo" /> */}
          <div id={navbarStyles.logo}>
           
          </div>
          <ul>
            <li>Offers</li>
            <li>Stories</li>
            <li>Tata Pay</li>
            <li>NewPass</li>
          </ul>
        </div>
        <div className={navbarStyles.secNavPart}>
          <div className={navbarStyles.searchDiv}>
            <CiSearch />
            <input type="text" placeholder="Search Tata Neu" />
          </div>

          <p className={navbarStyles.location}>
            122018
            <IoLocationOutline />
          </p>
          <div className={navbarStyles.iconsDiv}>
            <BsCart3 id={navbarStyles.cartIcon} style={{ width: "24px", height: "24px" }} />
            <LuBellRing id={navbarStyles.bellIcon} style={{ width: "24px", height: "24px" }} />
            <IoPersonOutline id={navbarStyles.personIcon} style={{ width: "24px", height: "24px" }} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
