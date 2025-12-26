"use client";

import { useState } from "react";

const Faq = () => {
  const [openId, setOpenId] = useState("faq2");

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
                        Why Choose Shiv Shakti Packers And Movers ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq1" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Shiv Shakti Packers and Movers provides reliable packing
                        shifting relocation and transportation services with
                        trained staff secure handling timely delivery affordable
                        pricing professional support and complete customer
                        satisfaction across multiple cities in India
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
                        Do You Provide Safe Packing And Moving Services ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq2" ? "show" : ""}`}>
                      <div className="accordion-body">
                        We use quality packing materials experienced manpower
                        modern equipment careful loading unloading techniques
                        and systematic planning to ensure safe damage free
                        transport of household office and commercial goods
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
                        Do You Offer Local And Long Distance Relocation ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq3" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Shiv Shakti Packers and Movers handles local shifting
                        intercity relocation interstate moves and nationwide
                        transportation services with proper planning tracking
                        support transparent process and assured delivery time
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
                        Do You Have Trained And Professional Team Members ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq4" ? "show" : ""}`}>
                      <div className="accordion-body">
                        Our team includes skilled packers loaders drivers
                        supervisors and support staff trained to manage every
                        relocation task safely efficiently professionally and
                        responsibly from packing to final delivery process
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
                        Do You Serve Residential And Commercial Customers ?
                      </button>
                    </h4>
                    <div className={`accordion-collapse collapse ${openId === "faq5" ? "show" : ""}`}>
                      <div className="accordion-body">
                        We serve households offices shops warehouses corporate
                        clients and individuals offering customized moving
                        solutions insurance assistance storage options and
                        dependable services for every relocation requirement
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
