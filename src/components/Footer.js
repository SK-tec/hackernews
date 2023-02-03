import React from "react";

const Footer = ({ content }) => {
  return (
    <>
      <footer
        className={`footer mt-auto pt-3 bg-light ${!content && "fixed-bottom"}`}
      >
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 footer-box">
                <img src="images/hn_logo.png" alt="HN-Logo" />
                <ul>
                  <li>
                    <a href="#">
                      <strong>Guidelines</strong>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#">
                      <strong>FAQs</strong>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#">
                      <strong>Help</strong>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#">
                      <strong>Contact</strong>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 footer-box social-icons">
                <p>
                  <b>FIND US ON SOCIAL MEDIA</b>
                </p>
                <a href="#">
                  <img src="images/facebook-icon.png" />
                </a>
                <a href="#">
                  <img src="images/instagram-icon.png" />
                </a>
                <a href="#">
                  <img src="images/twitter-icon.png" />
                </a>
                <a href="#">
                  <img src="images/linkedin-icon.png" />
                </a>
              </div>
              <div className="col-md-4 footer-box">
                <p>
                  <b>SUBSCRIBE TO OUR NEWSLETTER</b>
                </p>
                <input
                  type="email"
                  className="form-control mx-auto"
                  placeholder="Your Email"
                />
                <button type="button" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
            <hr />
            <p className="copyright">Made by Group 5, 2023</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
