import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage1 from "../../assets/images/volunteers.jpg";
import causeImage2 from "../../assets/images/volunteers2.jpg";
import logo from "../../assets/images/logo-dark.png";

const CauseContent = () => {
  return (
    <section className="cause-details blog-details  pt-100 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className="cause-details__content">
              <br />
              <p>
                Our volunteers come from a range of professional backgrounds and
                we are all very passionate about the needs of detainees during
                incarceration and following their release. Prisoners Aid relies
                heavily on the assistance given by volunteers. Volunteers work
                at the Court office or the AMC visitor’s office in a range of
                different ways. The assistance given to Prisoners Aid by
                volunteers increases the services that we are able to offer our
                clients. We greatly appreciate the assistance we receive from
                volunteers.{" "}
              </p>
              <br />

              <div className="cause-card">
                <div className="cause-card__inner">
                  <div className="cause-card__image">
                    <img src={causeImage1} alt="" />
                  </div>
                </div>
              </div>
              <br />

              <p>
                We ask that you are able to volunteer for at least three months
                with Prisoners Aid. We like to take the time to train new
                volunteers, so we ask for this minimum time period. We also ask
                that volunteers attend our monthly meetings. These are held on
                the first Wednesday of the month from 6.15pm in Turner. In these
                meetings, we have guest speakers, such as magistrates,
                government agencies and politicians, who work with detainees
                during incarceration and after their release. These meetings
                also provide an opportunity for members to discuss different
                projects they are working on.
              </p>
              <br />

              <div className="cause-card">
                <div className="cause-card__inner">
                  <div className="cause-card__image">
                    <img src={causeImage2} alt="" />
                  </div>
                </div>
              </div>
              <br />

              <p>
                Enquire about Volunteering or Interning at Prisoners Aid ACT
                through our
                <a href="contact" style={{ color: "#F26532" }}>
                  {" "}
                  Contact{" "}
                </a>
                page.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CauseContent;
