import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
import paact60 from "../../assets/images/backgrounds/paact-60.png";
import blockTitleHeart from "../../assets/images/shapes/heart-2-1.png";

const serviceTwoData = [];

const ServiceTwo = () => {
  return (
    <section
      className="service-one pt-120 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <img src={paact60} alt="" width="530" class="responsive"/>                    
        </div>
        <div className="block-title">          
          <a href="https://www.eventbrite.com.au/e/prisoners-aid-acts-60th-birthday-celebration-tickets-633030309697?aff=oddtdtcreator" target="_blank">Link to Eventbrite page</a>
        </div>
      </Container>
    </section>
  );
};

export default ServiceTwo;