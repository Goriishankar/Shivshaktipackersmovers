import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    case 6:
      return <Footer6 />;
    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="discussed-items">
          <div className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <Link href="/">
              <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
            </Link>
          </div>
          <div className="discussed-content wow fadeInUp" data-wow-delay=".5s">
            <h2>
              Let’s Discuss About <span>Your Relocation</span>
            </h2>
            <Link href="contact" className="theme-btn hover-white">
              Get Started <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>

        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>About Us</h4>
                </div>
                <div className="footer-content">
                  <p>
                    Safe professional moving services trusted nationwide company
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-vimeo-v" /></a>
                    <a href="#"><i className="fab fa-pinterest-p" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-items">
                  <li><Link href="service">Popular Services</Link></li>
                  <li><Link href="about">About Us</Link></li>
                  <li><Link href="contact">Privacy &amp; Setting</Link></li>
                  <li><Link href="delivery">Delivery Package</Link></li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        Near food mart HSR <br />
                        Banglore karnataka(560102)
                      </p>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:shivshaktigoddady@gmail.com" className="link">
                        shivshaktigoddady@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:+919024067968">+91 9024067968</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Recent News</h4>
                </div>
                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div
                      className="thumb bg-cover"
                      style={{ backgroundImage: 'url("assets/img/service/04.jpg")' }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 25, 2025</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          How achieve safe <br /> smooth house shifting
                        </Link>
                      </h6>
                    </div>
                  </div>

                  <div className="recent-post-items mb-0">
                    <div
                      className="thumb bg-cover"
                      style={{ backgroundImage: 'url("assets/img/service/05.jpg")' }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 29, 2025</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Discover a better way of relocation.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".2s">
                <li><Link href="faq">FAQs</Link></li>
                <li><Link href="about">Company</Link></li>
                <li><Link href="contact">Privacy</Link></li>
              </ul>
              <a
                href="#"
                id="scrollUp"
                className="scroll-icon wow fadeInUp"
                data-wow-delay=".4s"
              >
                <i className="far fa-angle-double-up" />
              </a>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                © <Link href="/">2026 Shiv Shakti</Link> All Rights Reserved
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
