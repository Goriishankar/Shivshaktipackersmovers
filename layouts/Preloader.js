"use client";

import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
      // page load hone ke baad preloader hide
      const timer = setTimeout(() => {
        preloader.classList.add("loaded");
        preloader.style.display = "none";
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>

        <div className="txt-loading">
          <span className="letters-loading">S</span>
          <span className="letters-loading">H</span>
          <span className="letters-loading">I</span>
          <span className="letters-loading">V</span>
          <span className="letters-loading"> </span>
          <span className="letters-loading">S</span>
          <span className="letters-loading">H</span>
          <span className="letters-loading">A</span>
          <span className="letters-loading">K</span>
          <span className="letters-loading">T</span>
          <span className="letters-loading">I</span>
        </div>

        <p className="text-center">Packers & Movers</p>
      </div>

      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
