import Link from "next/link";

export const Service2 = ({ paddingTop = 0, title = "Popular Services" }) => {
  return (
    <section
      className={`service-section section-padding pt-${paddingTop}`}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            {title}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Professional Packers And Movers<br />
            Providing Safe Reliable Transport Services 
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/08.jpg" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="home_Shifting">Home Shifting</Link>
                </h3>
                <p>
                  Safe secure careful home shifting ensuring complete customer satisfaction
                </p>
                <Link href="home_Shifting" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/09.jpg" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="office_Shifting">Office Shifting</Link>
                </h3>
                <p>
                Professional efficient office shifting ensuring smooth business relocation
                </p>
                <Link href="office_Shifting" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/10.jpg" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="loading_Unloading">Loading And Unloading</Link>
                </h3>
                <p>
                  Safe careful professional loading unloading damage free material handling
                </p>
                <Link href="loading_Unloading" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/11.jpg" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="packing_Unpacking">Packing And Unpacking</Link>
                </h3>
                <p>
                  Careful professional packing unpacking ensuring complete item protection
                </p>
                <Link href="packing_Unpacking" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/12.jpg" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="warehouse_services">Warehouse services</Link>
                </h3>
                <p>
                  Secure spacious managed warehouse services safe storage and easy access
                </p>
                <Link href="warehouse_services" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/13.jpg" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="insurance_Services">Insurance Services</Link>
                </h3>
                <p>
                  Reliable insurance ensuring complete protection against loss damage risks
                </p>
                <Link href="insurance_Services" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
