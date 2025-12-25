import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Delivery Package
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Popular Delivery Package For Relocation
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Basic Delivery</h3>
                <p>Reliable services</p>
              </div>
              <ul className="pricing-list">
                <li>Packing Service</li>
                <li>Safe Item Handling</li>
                <li>Normal Transit Speed</li>
                <li className="style-2">Budget-Friendly Option</li>
                <li className="style-2">Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  2-4 <span>/days</span>
                </h2>
                <p>For Reliable services</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Fast Delivery</h3>
                <p>Faster services</p>
              </div>
              <ul className="pricing-list">
                <li>Priority Packing Service</li>
                <li>Faster Transport Speed</li>
                <li>Premium Materials</li>
                <li>Dedicated Manager</li>
                <li>Quick Loading Team</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  48 <span>/hours</span>
                </h2>
                <p>For Faster services</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Super Fast Delivery</h3>
                <p>Premium services</p>
              </div>
              <ul className="pricing-list">
                <li>Express Packing Team</li>
                <li>Ultra-Fast Transportation</li>
                <li>Highest Priority Handling</li>
                <li className="style-2">Real-Time Live Tracking</li>
                <li className="style-2">Relocation Option</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  24 <span>/hours</span>
                </h2>
                <p>For Premium services</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;

