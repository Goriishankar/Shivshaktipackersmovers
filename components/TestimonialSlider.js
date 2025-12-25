"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonialSlider1 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider}
      className="swiper testimonial-slider"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              We received professional shifting service handled with great care
              and responsibility during the entire moving process, fully
              satisfied with timely delivery assurance
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Ajay Gowda / <span>IT Engineer</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              The office relocation was smooth organized and completely stress
              free thanks to their expert team and careful handling of all
              important documents equipment
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Vicky Bhattachaaray / <span>Bank Manager</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              Affordable pricing safe packing and polite staff made my house
              shifting experience very easy and comfortable throughout the
              entire relocation journey
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Surendar Singh / <span>Student</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              Reliable movers professional behavior and secure transportation
              ensured all household items reached safely without any damage
              or delay issues
            </p>
            <div className="author-items">
              <div className="author-image">
                <img src="assets/img/testimonial/client.png" alt="author-img" />
                <div className="content">
                  <h5>
                    Sweety Dube / <span>Doctor</span>
                  </h5>
                </div>
              </div>
              <img src="assets/img/testimonial/icon.png" alt="img" />
            </div>
          </div>
        </SwiperSlide>
      </div>

      <div className="swiper-dot pt-5 ps-1">
        <div className="dot" />
      </div>
    </Swiper>
  );
};
