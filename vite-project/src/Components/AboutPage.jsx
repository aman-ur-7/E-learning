import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div>
        <h1>
          Most
          <span> Popular Course</span>
        </h1>
        <p>
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>
      <div className="swiper-slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <section>
              <div>
                <span>Front-end</span>
                <img src="../src/assets/Saly-1.png" alt="" />
              </div>
              <div>
                <p>Various version's are evolve </p>
              </div>
              <hr />
              <span>Free</span>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <div>
                <span>Bug-Fix</span>
                <img src="../src/assets/Saly-2.png" alt="" />
              </div>
              <div>
                <p>Various version's are evolve </p>
              </div>
              <hr />
              <span>Free</span>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <div>
                <span>React.js</span>
                <img src="../src/assets/Saly-3.png" alt="" />
              </div>
              <div>
                <p>Various version's are evolve </p>
              </div>
              <hr />
              <span>Free</span>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <div>
                <span>MERN Stack</span>
                <img src="../src/assets/Saly-4.png" alt="" />
              </div>
              <div>
                <p>Various version's are evolve </p>
              </div>
              <hr />
              <span>Free</span>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <div>
                <span>Business</span>
                <img src="../src/assets/Saly-4.png" alt="" />
              </div>
              <div>
                <p>Various version's are evolve </p>
              </div>
              <hr />
              <span>Free</span>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AboutPage;
