import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
import blockTitleHeart from "../../assets/images/shapes/heart-2-1.png";

const serviceOneData = [];

const ServiceOne = () => {
  return (
    <section
      className="service-one pt-120 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <h2>
            Prisoners Aid ACT aims at a ‘fair go’ <br/> for all those involved in the prison system, <br/> 
            including the families of detainees <br/> and those in court facing imprisonment.            
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOne;
