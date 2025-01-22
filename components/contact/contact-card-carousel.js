import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cardBg from "../../assets/images/shapes/contact-card-bg-1-1.png";

const ContactCardCarousel = () => {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      480: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="contact-card-carousel ">
      <div className="container">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-secondary"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-address"></i>
              <h3>Postal Address</h3>
              <p>GPO Box 112 Canberra, ACT 2601</p>
              <br />
              <br />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-primary"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-contact"></i>
              <h3>AMC Office</h3>
              <p>
                <a href="coordinator@paact.org.au">coordinator@paact.org.au</a>
                <br />
                <a href="tel:(02) 6207 2800">(02) 6207 2800</a>
                <br />
                <a href="tel:0451 083 053">0451 083 053</a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="contact-card d-flex flex-column text-center justify-content-center align-items-center background-special"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <i aria-label="contact icon" className="azino-icon-contact"></i>
              <h3>
                CARS <br />
              </h3>

              <p>
                Court Assistance and Referral Service Office
                <br />
                <a href="mailto:info@paact.org.au">info@paact.org.au</a>
                <br />
                <a href="tel:(02) 6257 4866">(02) 6257 4866</a>
                <br />
                <a href="tel:0450 960 896">0450 960 896</a>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ContactCardCarousel;
