import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage1 from "../../assets/images/support_pic.jpg";
import causeImage2 from "../../assets/images/volunteers_pic.jpg";
import causeImage3 from "../../assets/images/links_pic.jpg";

const CausesHomeData = [
  {
    image: causeImage1,
    title: "Support",
    text: "Families and friends are the most important part of a prisoner's life. We know that things do not always go smoothly in relationships and we have some ways to offer support. Volunteers are not counsellors, but receive ongoing training to offer you the most useful and relevant support.",
    link: "/cause-details"
  },
  {
    image: causeImage2,
    title: "Volunteers",
    text: "Volunteers are always welcome! Join our teams! We offer an exciting and challenging environment for people who want to help others. We offer training to help build your skills - there's something for everyone to do, easy and challenging, and not all of our work involves people work.",
    link: "/volunteers"
  },
  {
    image: causeImage3,
    title: "Links",
    text: "Keep up to date - and gather the best suggestions and background information. Here is our collection of useful links ... ... for families ... for friends ... for volunteers Please send us suggestions to add further content.",
    link: "/useful-links"
  }
];

const CausesHome = () => {
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <section className="causes-page causes-home pt-120 pb-120">
      <Container>
        <Row className=" align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={7}>
            <div className="block-title">
              <h3>
                Our Services<br />
              </h3>
            </div>
          </Col>
        </Row>
        <Swiper {...swiperParams}>
          {CausesHomeData.map(
            (
              { image, progressCount, raised, goal, title, text, link },
              index
            ) => (
              <SwiperSlide key={`cause-card-key-${index}`}>
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <img src={image} alt="" />
                    </div>
                    <div className="cause-card__content">
                      <h3>
                        <Link href={link}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default CausesHome;
