import FunFactCounter from "@/components/FunFactCounter";
import Delivery from "@/components/Delivery";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import GallerySection from "../components/GallerySection";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import OurNetwork from "../components/OurNetwork";

const page = () => {
  return (
    <NextLayout header={1}>
      <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/01.jpg")' }}
      >
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  We Take Care <br />
                  Your Relocation <br /> &amp; Provide Best <br /> Moving Services
                </h1>
                <div className="hero-button">
                  <Link
                    href="/"
                    className="theme-btn hover-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Contact Now <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    View Services <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="assets/img/hero/client.png" alt="img" />
                  <p className="text-white">
                    Trusted by 1M+ people <br />
                    around the globe
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>Get Consultations</h4>
                <p>Ready to Book Our Packing Services</p>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="payment-save">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                        />
                        <p>
                          I’ve Read and agreed to{" "}
                          <Link href="/">Terms &amp; Conditions</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn">
                        Get Started Now <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section fix pt-80 pb-80 section-bg">
        <div className="container">
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Preparing For Your Smooth Relocation With Trusted Services
          </h4>
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>01</p>
                  <h5>
                    <Link href="service">
                      Home Shifting&amp; <br />
                      Office Shifting Service
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/01.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>02</p>
                  <h5>
                    <Link href="service">
                      Loading <br />
                      & Unloading Services
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/02.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>03</p>
                  <h5>
                    <Link href="service">
                      Commercial <br />
                      &amp; Warehouse Moving
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/03.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>25+ Years Of Experience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Awards Winning Company</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="assets/img/about/01.jpg" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="assets/img/about/02.jpg" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Preparing Your Move Trusted Services
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    We ensure safe timely reliable moving services delivering complete satisfaction through professional packing and transportation solutions
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Door-to-door moving support.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Experienced and trained staff
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Affordable pricing with no hidden charges
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="about" className="theme-btn">
                        Learn More Us
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="author-image">
                      <img src="assets/img/testimonial/client.png" alt="author-img" />
                      <div className="content">
                        <h5>
                          Poonia Boss / <span>CO Founder</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide Safe Moving Service <br />
              For Your Relocation
            </h2>
          </div>

          <div className="row">

            {/* Service 1 */}
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="service-card-items">
                <div className="icon">
                  <i className="fas fa-house-user"></i>
                </div>
                <h3>
                  <Link href="service">
                    Home Shifting & Office Shifting
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/04.jpg" alt="service-img" />
                  <div className="line-shape">
                    {/* <img src="assets/img/service/line.png" alt="shape-img" /> */}
                  </div>
                </div>
                <Link className="link-btn" href="service">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="service-card-items active">
                <div className="icon">
                  <i className="fas fa-dolly"></i>
                </div>
                <h3>
                  <Link href="service">
                    Loading & Unloading Service
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/05.jpg" alt="service-img" />
                  <div className="line-shape">
                    {/* <img src="assets/img/service/line.png" alt="shape-img" /> */}
                  </div>
                </div>
                <Link className="link-btn" href="service">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="service-card-items">
                <div className="icon">
                  <i className="fas fa-box-open"></i>
                </div>
                <h3>
                  <Link href="service">
                    Packing & Unpacking
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/06.jpg" alt="service-img" />
                  <div className="line-shape">
                    {/* <img src="assets/img/service/line.png" alt="shape-img" /> */}
                  </div>
                </div>
                <Link className="link-btn" href="service">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="service-card-items">
                <div className="icon">
                  <i className="fas fa-warehouse"></i>
                </div>
                <h3>
                  <Link href="service">
                    Warehouse & Commercial
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/07.jpg" alt="service-img" />
                  <div className="line-shape">
                    {/* <img src="assets/img/service/line.png" alt="shape-img" /> */}
                  </div>
                </div>
                <Link className="link-btn" href="service">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cta Video Section Start */}
      <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/cta/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <a
                href=""
                className="video-buttton ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Packers &</span>
                <span className="text-slider">Movers</span>
                <span className="text-slider style-border" />

              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Company Fun Fact
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Learn Our Company Statistics
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section>
      {/* Popular Case Study Section Start */}
      <section className="case-study-section fix section-padding theme-bg">
        <div className="left-shape">
          <img src="assets/img/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/right-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                Popular Moving Stories
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Discover Our Popular Moving Stories <br /> That We Successfully
                Delivered
              </h2>
            </div>
            <Link href="contact" className="theme-btn white-border">
              View More Moves
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery Section Start */}
      <Delivery />
      {/* Testimonial Section Start */}
      <section className="testimonial-section fix section-padding pt-0">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial/testimonial.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* .....Gallery..... */}
      <GallerySection />

      {/* Working Process Section Start */}
      <WorkingProcess2 />

      {/* ...... OurNetwork..... */}
      <OurNetwork />

    </NextLayout>
  );
};
export default page;
