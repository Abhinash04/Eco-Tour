import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import './tour.css';
import Header from './components/Header';

const Tour = () => {
  return (
    <section className="tour-section">
    <Header/>
      <Swiper
        className="tour-swiper"
        grabCursor={true}
        speed={500}
        effect="fade"
        loop={true}
        mousewheel={{ invert: false, sensitivity: 1 }}
      >
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-one">kedarnath</h1>
          <img src="https://wallpapers.com/images/hd/kedarnath-temple-fences-4k-20mjafmypuf2gqrn.jpg" alt="kedarnath temple"/>
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-two">Manali</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" alt="Manali" />
        </SwiperSlide>
        
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-three">Allepey</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg" alt="Allepey" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-four">Amritsar</h1>
          <img src="https://m.media-amazon.com/images/I/81fS1MSi9wL.jpg" alt="Amritsar" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-five">AksharDham</h1>
          <img src="https://c4.wallpaperflare.com/wallpaper/629/182/419/temples-akshardham-wallpaper-preview.jpg" alt="AksharDham" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-six">Char Minar</h1>
          <img src="https://wallpapercave.com/wp/wp6539377.jpg" alt="Char Minar" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-seven">Hawa Mahal</h1>
          <img src="https://wallpapercave.com/wp/wp4555030.jpg" alt="Hawa Mahal" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eight">Puri</h1>
          <img src="https://wallpapercave.com/wp/wp8207549.jpg" alt="Puri" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-nine">Goa Beach</h1>
          <img src="https://wallpapercave.com/wp/wp3170957.jpg" alt="Goa Beach" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-ten">Taj Mahal</h1>
          <img src="https://wallpaper.forfun.com/fetch/3c/3c7406b15a1783bcc5f031e285c91922.jpeg" alt="Taj Mahal" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eleven">India Gate</h1>
          <img src="https://wallpapers.com/images/hd/india-gate-in-delhi-omvkk9thuh7nvsop.jpg" alt="India Gate" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twelve"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-thirteen"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-fourteen"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-fifteen"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-sixteen"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-seventeen"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eighteen"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-nineteen"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twenty"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentyone"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentytwo"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentythree"></h1>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentyfour"></h1>
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Tour;
