import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_01 from "./assets/images/img-01.jpg";
import slide_image_02 from "./assets/images/img-02.jpg";
import slide_image_03 from "./assets/images/img-03.jpg";
import slide_image_04 from "./assets/images/img-04.jpg";
import slide_image_05 from "./assets/images/img-05.jpg";
import slide_image_06 from "./assets/images/img-06.jpg";
import slide_image_07 from "./assets/images/img-07.jpg";
import slide_image_08 from "./assets/images/img-08.jpg";
import slide_image_09 from "./assets/images/img-09.jpg";
import slide_image_10 from "./assets/images/img-10.jpg";
import slide_image_11 from "./assets/images/img-11.jpg";
import slide_image_12 from "./assets/images/img-12.jpg";
import slide_image_13 from "./assets/images/img-13.jpg";
import slide_image_14 from "./assets/images/img-14.jpg";
import slide_image_15 from "./assets/images/img-15.jpg";
import slide_image_16 from "./assets/images/img-16.jpg";
import slide_image_17 from "./assets/images/img-17.jpg";
import slide_image_18 from "./assets/images/img-18.jpg";

function App() {

  return (
    <div className="container">
      <h1 className="heading">My Acrylic Gallery</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }
      }
      pagination={{
        el:'.swiper-pagination', 
        // bulletActiveClass: '.swiper-pagination-bullet-active',
        // bulletClass: '.swiper-pagination-bullet',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className='swiper_container'
      >
        <SwiperSlide>
          <img src={slide_image_01} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_02} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_03} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_04} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_05} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_06} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_07} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_08} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_09} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_15} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_16} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_17} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_18} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination">

          </div>
        </div>
      </Swiper>
     </div>
  )
}

export default App
0