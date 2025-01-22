import React, { useContext } from "react";
import Link from "next/link";
import NavLinks from "./header/nav-links";

import logoLight from "../assets/images/logo-light.png";
import flag1 from "../assets/images/resources/flag-1-1.jpg";
import { MenuContext } from "../context/menu-context";

const MobileNav = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <div
      className={`mobile-nav__wrapper ${true === menuStatus ? "expanded" : ""}`}
    >
      <div
        className="mobile-nav__overlay side-menu__block-overlay"
        onClick={handleMenuClick}
      ></div>
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close side-menu__close-btn"
          onClick={handleMenuClick}
        >
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="201" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <NavLinks />
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="azino-icon-email"></i>
            <a href="mailto:info@paact.org.au">info@paact.org.au</a>
          </li>
          <li>
            <i className="azino-icon-telephone"></i>
            <a>(02) 6257 4866</a>
          </li>
          <li>
            <i className="azino-icon-telephone"></i>
            <a>(02) 6207 2800</a>
          </li>
        </ul>

        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="https://twitter.com/PrisonersAidACT" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/PrisonersAidACT" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/company/prisoners-aid-act" aria-label="linkedin">
              <i className="fab fa-linkedin"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
