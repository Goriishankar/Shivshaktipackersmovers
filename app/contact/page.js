import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import FormPendingWrapper from "@/components/FormPendingWrapper";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Shiv Shakti Packers & Movers for home shifting, office relocation, and packing services. Call us today for affordable and reliable moving solutions.",
  keywords: [
    "Contact Shiv Shakti Packers & Movers",
    "Packers and Movers Contact Number",
    "Relocation Services Contact",
    "Moving Company Support India",
  ],
  robots: "index, follow",
};


const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Contact Us" />
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Contact Us
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Don’t Hesitate to Contact <br />
                      Our Support Team
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Safe and reliable moving services ensuring smooth
                    relocation <br />
                    planning support, trusted handling
                  </p>
                  <ul
                    className="contact-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <a href="mailto:shivshaktigoddady@gmail.com">
                        shivshaktigoddady@gmail.com
                      </a>
                    </li>
                    <li>
                      Near food mart HSR bangalore karnataka (560102)
                    </li>
                    <li>
                      <a href="tel:+919024067968">+91 9024067968</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="contact-right wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h3>Send Us Message</h3>
                  <FormPendingWrapper
                    action={
                      process.env.NODE_ENV === "development"
                        ? "http://localhost:8000/mail.php"
                        : "/mail.php"
                    }
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="text" name="name" id="name" placeholder="Full Name" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="text" name="phone" id="phone" placeholder="Phone" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input type="text" name="email" id="email2" placeholder="Your Email" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea name="message" id="message" placeholder="Comments" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Send a Message
                        </button>
                      </div>
                    </div>
                  </FormPendingWrapper>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31113.30150160528!2d77.6375689025374!3d12.89725837745234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGround%20floor%20choodasndra%20%20Near%20food%20mart%20%20HSR%20%20banglore%20karnataka(560102)!5e0!3m2!1sen!2sin!4v1766406780726!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default page;
