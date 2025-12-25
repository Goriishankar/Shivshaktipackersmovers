import Counter from "./Counter";

const FunFactCounter = ({ style }) => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={98} />
            </span>
            %
          </h2>
          <h6>Successful Delivery Rate</h6>
          <p>Safe secure relocation services delivered nationwide every time</p>
        </div>
      </div>

      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`}>
          <h2>
            <span className="count">
              <Counter end={35} />
            </span>
            m+
          </h2>
          <h6>Moves Completed</h6>
          <p>Professional packing loading transport unloading handled carefully</p>
        </div>
      </div>

      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={97} />
            </span>
            %
          </h2>
          <h6>Positive Customer Feedback</h6>
          <p>Trusted relocation solutions ensuring satisfaction safety reliability</p>
        </div>
      </div>

      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={92} />
            </span>
            %
          </h2>
          <h6>Professional Moving Experts</h6>
          <p>Experienced trained staff managing relocation tasks efficiently</p>
        </div>
      </div>
    </div>
  );
};

export default FunFactCounter;
