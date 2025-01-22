import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
import videoImage from "../../assets/images/logo-dark5.png";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card-two">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="fl_IXhLXZ8c"
        onClose={() => setOpen(false)}
      />
      <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="video-card-two__box">
                <img src={videoImage} alt="" />
                <span
                  className="video-card-two__box-btn video-popup"
                  onClick={() => setOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </Col>
            <Col lg={3}>
              <h3>Meet Prisoners Aid ACT</h3>
            </Col>
            <Col lg={6}>
              <p>
              Meet Glen, our Magistrates Court Office Manager, and Shobha, advocate for over 20 years in this short video about us. Prisoners Aid ACT believes everyone deserves a fair go and with support, people can get back on their feet and make a better life for themselves and their families. We support you or someone you know to navigate the complex system and we can assist you with transportation, accommodation, access to social services and more.{" "}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoCardTwo;
