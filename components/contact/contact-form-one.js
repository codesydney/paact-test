import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import emailjs, { init } from 'emailjs-com';
init("user_nEmQ6yi4aBPvlCKCkUAfK");

const ContactFormOne = () => {   
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [fromPhone, setFromPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  var data = {
    service_id: 'service_7kg6ynh',
    template_id: 'template_v3298ya'
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(data.service_id, data.template_id, {
      from_name: fromName,
      to_name: "Prisoners Aid ACT Support",
      subject: subject,
      message: message,
      from_email: fromEmail,
      from_phone: fromPhone
    })
      .then((result) => {
        setFromName('');
        setFromEmail('');
        setFromPhone('');        
        setSubject('');
        setMessage('');
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Feel free to write us \n a message.`}
                tagLine="Contact Us"
              />
              <p className="block-text mb-30 pr-10">
                Upon receiving the message, someone from PAACT will try to get back to you within 48 hours.{" "}
              </p>
              <div className="footer-social black-hover">
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
          </Col>
          <Col lg={7}>
            <form onSubmit={sendEmail} className="contact-form-validated contact-page__form form-one mb-40">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}                    
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}                    
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={fromPhone}
                    onChange={(e) => setFromPhone(e.target.value)}                    
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="subject" className="sr-only">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}                    
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}                    
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    Submit Message
                  </button>
                </div>
                <p className="block-text-small mb-30 pr-10">
                  By submitting, I agree that all information has been accurately entered and I accept the 
                  <a href="./pdf/Prisoners_Aid_ACT_Privacy_Policy.pdf" style={{color: "#F26532"}}> Privacy Policy.</a>
                </p>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
