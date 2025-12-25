import Counter from "./Counter";

const GrowBusiness = ({ paddingTop = 0 }) => {
  return (
    <section
      className={`grow-business-section fix section-padding pt-${paddingTop}`}
    >
      <div className="container">
        <div className="grow-business-wrapper-2">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div
                className="grow-business-image wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="assets/img/grow/02.jpg" alt="img" />
                <div
                  className="grap-shape float-bob-x wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/grow/grap.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grow-business-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="assets/img/bale.png" alt="img" />
                    Safe Relocation Services
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                   Complete Moving Packing and Transport Solutions
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  We carefully manage every relocation process with expert planning safe handling reliable transport clear coordination professional teams quality packing timely delivery and customer focused service excellence
                </p>
                <div className="grow-counting-area">
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={100} />
                      </span>
                      %
                    </h2>
                    <p>Safe Shifting</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={100} />
                      </span>
                      %
                    </h2>
                    <p>Timely Delivery</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={100} />
                      </span>
                      %
                    </h2>
                    <p>Secure Transport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GrowBusiness;

