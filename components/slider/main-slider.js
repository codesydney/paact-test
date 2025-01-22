import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import banner1 from "../../assets/images/main-slider/Canberra.jpg";
import givenowlogo from "../../assets/images/givenow-button-square-dark.png";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider = () => {
  const styleObj = {
    color: "#f36f3f",
  } 

  const mainSlideOptions = {
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    autoplay: {
      delay: 5000
    }
  };

  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>

          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className="row justify-content-end">
              <Col xl={7} lg={12} className="text-right">
                <div>
                  <a href="http://www.givenow.com.au/prisonersaidact" target="_blank">                
                    <img src={givenowlogo} alt="GiveNow Logo" width={100} height={100}/>
                  </a>
                </div>
                <p style={styleObj}>Supporting prisoners and their families since 1963</p>
                <h2>
                  Prisoners Aid ACT
                </h2>
                <a
                  href="/what-we-do"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  Learn more
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>

        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
