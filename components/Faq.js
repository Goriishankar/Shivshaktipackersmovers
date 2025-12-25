"use client";

import { useState } from "react";

const Faq = () => {
  const [openId, setOpenId] = useState("faq2"); // default open same as UI

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Some Question
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion">

                  {/* FAQ 1 */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${openId === "faq1" ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleFaq("faq1")}
                      >
                        Why Need Digital Marketing For Build Business ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq1" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${openId === "faq2" ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleFaq("faq2")}
                      >
                        How to Increase Web Traffic ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq2" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${openId === "faq3" ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleFaq("faq3")}
                      >
                        How to Development SEO Optimization ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq3" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${openId === "faq4" ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleFaq("faq4")}
                      >
                        Have Any Professional Team Member ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq4" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${openId === "faq5" ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleFaq("faq5")}
                      >
                        Have you any Global Customer ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq5" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
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

export default Faq;
