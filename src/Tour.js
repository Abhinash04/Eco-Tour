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
          <h1 className="tour-title tour-title-one">Edinburgh</h1>
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1bdebd02-d675-4469-be36-dc248448980d" alt="Edinburgh" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-two">Argentine Patagonia</h1>
          <img src="https://getwallpapers.com/wallpaper/full/3/c/6/699218-patagonia-wallpapers-2560x1600-for-1080p.jpg" alt="Argentine Patagonia" />
        </SwiperSlide>
        
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-three">Amalfi Coast</h1>
          <img src="https://images.unsplash.com/photo-1710897071793-db30046f5ed6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Amalfi Coast" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-four">Stockholm</h1>
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/62411bbf-dde9-4654-9298-1fe3e7da2d64" alt="Stockholm" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-five">Paris</h1>
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b49c729f-65b0-4a2a-baf7-1d9f180df0a6" alt="Paris" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-six">Brugge</h1>
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c9a61071-c74d-4e8b-966a-6948cdbd9665" alt="Brugge" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-seven">Bavaria</h1>
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/25ab6cb7-9251-4aa5-9993-32ebd8542616" alt="Bavaria" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eight">Copenhagen</h1>
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/365656bc-24bc-4d95-92da-7f34faa616cf" alt="Copenhagen" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-nine">NiagaraFalls</h1>
          <img src="https://wallpapercave.com/wp/hwZ4A02.jpg" alt="Niagara Falls" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-ten">Santorini</h1>
          <img src="https://www.hdwallpaper.nu/wp-content/uploads/2017/03/santorini-24.jpg" alt="Santorini" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eleven">Florence</h1>
          <img src="https://pixelz.cc/wp-content/uploads/2017/11/florence-cathedral-italy-uhd-8k-wallpaper-.jpg" alt="Florence" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twelve">Yosemite</h1>
          <img src="https://cdn.wallpapersafari.com/53/21/cXDGH2.jpg" alt="Yosemite" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Tour;
