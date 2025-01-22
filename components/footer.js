import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo-dark2.png";
import heart from "../assets/images/shapes/heart-2-1.png";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={logoLight}
                      className="footer-widget__logo"
                      width="201"
                      alt=""
                    />
                  </a>
                </Link>
                <p>
                  Prisoners Aid offers support to prisoners and their families
                  in the ACT.
                </p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>(02) 6257 4866
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>(02) 6207 2800
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>info@paact.org.au
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-pin"></i>GPO Box 112 Canberra,
                      ACT 2601
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do">
                      <a>What We Do</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/meet-our-staff">
                      <a>Meet Our Staff</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/meet-our-committee">
                      <a>Meet Our Committee</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/useful-links">
                      <a>Useful Links</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/volunteers">
                      <a>Volunteers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports">
                      <a>Reports</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./pdf/Prisoners_Aid_ACT_Privacy_Policy.pdf">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>
            Handcoded with <img src={heart} width="15" alt="" /> by{" "}
            <a
              target="_blank"
              href="https://www.code.sydney/"
              style={{ color: "#719DD9" }}
            >
              Code.Sydney
            </a>
          </p>
          <div className="footer-social">
            <a href="https://twitter.com/PrisonersAidACT" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/PrisonersAidACT"
              aria-label="facebook"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/prisoners-aid-act"
              aria-label="linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
