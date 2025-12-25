import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";


export const metadata = {
  title: "About Us",
  description:
    "Learn more about Shiv Shakti Packers & Movers, a trusted name in packing and moving services offering safe, reliable and affordable relocation solutions across India.",
  keywords: [
    "About Shiv Shakti Packers & Movers",
    "Best Packers and Movers Company",
    "Trusted Relocation Services",
    "Professional Moving Company India",
  ],
  robots: "index, follow",
};


const page = () => {
  return (
    <NextLayout>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb />

      {/* About Section Start */}
      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      We Manage Your Relocation Needs and Move Safely
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Safe secure professional relocation services ensuring careful
                    handling smooth transport delivery assurance nationwide
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Superior Quality Of Service</h4>
                      <p>
                        Our attention to packing handling and safety remains
                        unmatched across relocation services nationwide always
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/05.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start */}
      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/about/06.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Flexible Planning &amp; Support
                  </h4>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    Since beginning our experienced team worked tirelessly to
                    achieve smooth relocations satisfied clients nationwide
                    operations built foundation
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Flexible Planning &amp; Support</h4>
                      <p>
                        Our attention to packing handling and safety remains
                        unmatched across relocation services nationwide always
                      </p>
                    </div>
                  </div>
                  <Link
                    href="about"
                    className="theme-btn mt-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Learn More Us
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Funfact Section Start */}
      <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section>

      {/* Working Process Section Start */}
      <WorkingProcess2 />

      {/* Brand Section Start */}
      <section className="brand-section-2 mt-0 mb-0 fix section-padding pt-0">
        <div className="container-fluid">
          <div className="brand-wrapper-2">
            <div className="radius-shape">
              <img src="assets/img/brand/radius-left.png" alt="shape-img" />
            </div>
            <div className="radius-shape-2">
              <img src="assets/img/brand/radius-right.png" alt="shape-img" />
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".3s">
              We Have <span>1563+</span> Global Partners. Explore Our Global
              Clients
            </h5>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/brand_1_1.svg" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/brand_1_2.svg" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/brand_1_3.svg" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/brand_1_4.svg" alt="img" />
              </div>
            </div>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/brand_1_5.svg" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/brand_1_1.svg" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/brand_1_2.svg" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/brand_1_3.svg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section Start */}
      <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2>We’ve 1250+ Happy Clients Trust Us</h2>
          </div>
        </div>
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
      </section>
    </NextLayout>
  );
};

export default page;
