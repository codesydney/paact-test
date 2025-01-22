import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";

import { MenuContext } from "../../context/menu-context";

import flag1 from "../../assets/images/resources/flag-1-1.jpg";
import logoDark from "../../assets/images/logo-dark.png";

const HeaderOne = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <header className="main-header">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img src={logoDark} width="240" alt="" />
                  </a>
                </Link>
                <span
                  className="fa fa-bars mobile-nav__toggler"
                  onClick={handleMenuClick}
                ></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                <p>Welcome to Prisoners Aid ACT Web Portal</p>
                <div className="main-header__social">
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
              <nav className="main-menu dynamic-radius">
                <NavLinks />
              </nav>
              <div className="main-header__info">
                <ul className="list-unstyled main-header__info-list">
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
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default HeaderOne;
