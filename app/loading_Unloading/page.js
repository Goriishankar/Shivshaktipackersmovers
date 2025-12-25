import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import Pricing from "@/components/Delivery";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

export const metadata = {
  title: "Loading and Unloading Services",
  description:
    "Shiv Shakti Packers & Movers provides professional loading and unloading services ensuring safe handling of household and commercial goods during relocation.",
  keywords: [
    "Loading and Unloading Services",
    "Professional Goods Handling",
    "Safe Loading Unloading Packers",
    "Household Goods Handling",
    "Shiv Shakti Loading Services",
  ],
  robots: "index, follow",
};

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Loading And Unloading" />

      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Handling Solutions
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Preparing Your Safe Trusted Handling Services
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Safe careful professional loading unloading services ensuring
                    damage free handling timely completion
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Connect with experts with zero damage.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Take secure handling support direct from professionals
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Start smooth loading unloading that get completed safely
                    </li>
                  </ul>
                  <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn">
                      Learn More Us
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="experience-items">
                    <h6>
                      Trusted by 1M+ people <br />
                      around the globe
                    </h6>
                    <img src="assets/img/service/Home_Shifting/001.png" alt="img" />
                    <h2>
                      <span className="count">
                        <Counter end={25} />
                      </span>
                      +
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="row g-4">
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/service/loading_Unloading/01.jpg" alt="img" />
                          </div>
                        </div>
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/service/loading_Unloading/02.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="about-thumbs">
                        <img src="assets/img/service/loading_Unloading/03.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Service Video Section Start */}
      <section className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-video-image">
                  <img src="assets/img/service/loading_Unloading/04.jpg" alt="img" />
                  <div className="video-box">
                    <a href="" className="video-buttton ripple video-popup">
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                    style={{ visibility: "visible", animationDelay: "0.6s" }}
                  >
                    <li>25+ Years Of Experience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Awards Winning Company</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Better Solutions Create your handling work more easier
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    Proper handling process ensures careful loading unloading
                    safety complete satisfaction
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Easy load and unload more household items
                    </h5>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      One Call Supervision &amp; Custom Scheduling
                    </h5>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
