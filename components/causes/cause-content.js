import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage1 from "../../assets/images/support_pic.jpg";
import comment1 from "../../assets/images/blog/comment-1-1.jpg";
import comment2 from "../../assets/images/blog/comment-1-2.jpg";
import organizer1 from "../../assets/images/causes/organizer-1-1.jpg";
import donor1 from "../../assets/images/causes/donor-1-1.jpg";
import donor2 from "../../assets/images/causes/donor-1-2.jpg";
import logo from "../../assets/images/logo-dark.png";

const CauseContent = () => {
  return (
    <section className="cause-details blog-details  pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className="cause-details__content">
              <div className="cause-card">
                <div className="cause-card__inner">
                  <div className="cause-card__image">
                    <img src={causeImage1} alt="" />
                  </div>
                </div>
              </div>
              <br />

              <p className="text-center">
                <b>
                  Download a general reference brochure of our organisation here
                </b>{" "}
                <a
                  href="../../pdf/PA General Info Brochure.pdf"
                  style={{ color: "#F26532" }}
                >
                  PA General Info Brochure
                </a>
                <br />
                <b>Find our Easy English brochure here</b>{" "}
                <a
                  href="../../pdf/We Are Prisoners Aid EE - Final.pdf"
                  style={{ color: "#F26532" }}
                >
                  PA Easy English
                </a>
              </p>
              <p>
                <br />
                Prisoners Aid has been operating as a community organisation in
                Canberra since 1963, more information about our history can be
                found here{" "}
                <a
                  href="../../pdf/history-prisoners-aid-min.pdf"
                  style={{ color: "#F26532" }}
                >
                  A History of Prisoners Aid
                </a>
                . Over the years we have assisted thousands of clients,
                including detainees, released detainees, families of detainees,
                and those involved in the court system. Our key principles are
                based on natural justice and rehabilitation for detainees to
                reduce the risk of further offending.
              </p>
              <p>
                Our twin objectives are to: ensure a ‘fair go’ for all those
                involved directly and indirectly in the prison system, including
                the families of detainees; and to enhance prospects for the
                rehabilitation of detainees and their reintegration into
                society.
              </p>
              <p>
                Our offices are located in the ACT Courts building and in the
                AMC Visitor Entry Area. We have experienced staff and volunteers
                who are able to provide assistance to our clients.
              </p>
              <p>
                See below for the range of assistance that we can provide to
                current detainees and their families.
              </p>
              <p>
                <b>Visitors</b>
                <br />
                For visitors, we can help provide important information about
                visits to the AMC and details about relevant community and
                government agencies. If a visitor is dressed in a way that is
                prohibited at the AMC, we are able to supply suitable clothing
                for the visit. We can provide emergency assistance for getting
                to and from the AMC or ACT courts and financial assistance for
                interstate travel to visit related inmates in interstate
                institutions. We also can provide financial assistance to
                interstate visitors to visit inmates at the AMC.
              </p>
              <p>
                <b>Families and Children</b>
                <br />
                We also support the wellbeing of the families and children of
                detainees or others affected by the justice system. Families can
                visit us any time at our court or AMC offices for assistance. We
                also run a ‘Participate’ program that supports children and
                young people to take up after-school activities of their choice.
                ‘Participate’ can help enrol the child in the activity and pay
                for some related expenses.
              </p>
              <p>
                <b>Detainees</b>
                <br />
                We offer welfare and support to detainees at the AMC. Our staff
                and volunteers can visit to assist detainees with needs upon
                request. They can also email and free call us at any time. Some
                services we offer include property collection from the AFP
                Mitchell Holding Facility, storage of property whilst
                incarcerated and help with obtaining important documents such as
                birth certificates. We can act as a third party on their behalf
                to represent their interests whilst they are unable to do so.
              </p>
              <p>
                <b>Released Detainees</b>
                <br />
                We can help released individuals get back on their feet. We can
                assist with transport and other financial aid such as foodbank
                cards, bus tickets, essential cards for groceries and clothing,
                toiletry items, bags for belongings, and occasionally emergency
                accommodation. We offer food hampers year-round with help from
                Oz Harvest, and during the Christmas period we prepare
                additional hampers for released detainees and their families. We
                can also help to issue items as requested by Throughcare and
                other support services and can assist in obtaining important
                documents such as birth certificates and driving licences.
              </p>
              <p>
                <b>Participate</b>
                <br />
                Participate is a program run by Prisoners Aid ACT to support
                children and young people with a family member in prison to take
                up after-school activities of their choice. The activity can be
                a sport, music, arts, public speaking, or others of interest to
                the child. Participate can help enrolling the child to the
                activity and pay for related expenses subject to our budget.
              </p>
              <p>
                For an application form, call or visit our Prisoners Aid’s
                office at the AMC or ACT Magistrates Court or email us:
                <a href="mailto:info@paact.org.au" style={{ color: "#F26532" }}>
                  {" "}
                  info@paact.org.au
                </a>
              </p>

              <p>
                <b>New Logo for Prisoners Aid (ACT):</b>
              </p>
              <div>
                <img src={logo} alt="" width="400" height="130" />
              </div>
              <p>
                Prisoners Aid aims at a ‘fair go’ for all those involved in the
                prison system, including the families of detainees and those in
                court facing imprisonment. Our new logo was inspired by a
                detainee in the Alexander Maconochie Centre who entered our
                competition for detainees to suggest new designs for a logo. The
                ‘best entry’ was chosen in June 2019 and a small prize awarded.
                After further work by our members, we believe that the new logo
                reflects the idea of helping those in need – the symbolic hands
                in the design – and the idea of growth by detainees in their
                return to society – represented by the leaves.{" "}
              </p>
            </div>

            <form
              action="#"
              className="contact-form-validated contact-page__form form-one mb-80"
            ></form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CauseContent;
