import React from "react";
import Breadcumb from "../../components/Breadcumb";
import "./contact.scss";

const Contact = () => {
  <Breadcumb name="Contact" />;
  return (
    <main>
      <Breadcumb title="Contact me" />{" "}
      <section id="contact__me">
        <div className="heading container">
          <h2>Contact me.</h2>
        </div>

        <div className="container contact__me__container">
          <div className="form__container">
            <form id="contact__me__form" action="">
              <div className="form__row">
                <input
                  type="text"
                  name="names"
                  id="contact__name"
                  placeholder="Names"
                  onkeyup="formSubmitted && validateName()"
                />
                <label
                  for="contact__name"
                  id="name__error"
                  className="error name__error"
                ></label>
              </div>

              <div className="form__row">
                <input
                  type="text"
                  name="email"
                  id="contact__email"
                  placeholder="Email"
                  onkeyup="formSubmitted && validateEmail()"
                />
                <label
                  for="contact__email"
                  id="email__error"
                  className="error email__error"
                ></label>
              </div>

              <div className="form__row">
                <textarea
                  name="message"
                  id="contact__message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  onkeyup="validateMessage()"
                ></textarea>
                <label
                  for="contact__message"
                  id="message__error"
                  className="error message__error"
                ></label>
              </div>

              <div className="form__error">
                <p id="form__error" className="form__error"></p>
              </div>

              <div className="action__message">
                <h4 className="add__message"></h4>
              </div>

              <div className="send">
                <button className="send">Send message</button>
              </div>
            </form>
          </div>

          <div className="address__container">
            <div className="address__info">
              <img src="assets/images/Call.svg" alt="" />
              <div>
                <p>0783544533</p>
                <p>0726732103</p>
              </div>
            </div>

            <div className="address__info">
              <img src="assets/images/Location pin.svg" alt="" />
              <div>
                <p>KN 28, VN</p>
              </div>
            </div>

            <div className="address__info">
              <img src="assets/images/Email.svg" alt="" />
              <div>
                <p>aimeanathole@gmail.com</p>
              </div>
            </div>

            <div className="address__info">
              <img src="assets/images/Website.svg" alt="" />
              <div>
                <p>www.karinganire.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
