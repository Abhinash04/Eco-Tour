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
          <h1 className="tour-title tour-title-one">Kashmir</h1>
          <div className="card">
        
        </div>
          <img src="https://c4.wallpaperflare.com/wallpaper/146/888/19/himalayas-kashmir-mountains-winter-wallpaper-preview.jpg" alt="Kashmir"/>
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
          <h1 className="tour-title tour-title-four">Golden Temple</h1>
          <img src="https://static.toiimg.com/thumb/61820954.cms?resizemode=75&width=1200&height=900" alt="Stockholm" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-five">AksharDham Temple</h1>
          <img src="https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740ptZ4Mc.jpg" alt="Paris" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-six">Char Minar</h1>
          <img src="https://dailymela.com/wp-content/uploads/2024/05/Charminar-Hyderabad-1024x536.jpg" alt="Char Minar" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-seven">Hawa Mahal</h1>
          <img src="https://hawamahalfestival.in/images/hawa-mahal-bg-992.jpg" alt="Hawa Mahal" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eight">Jagannath Temple</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI.jpg/1200px-ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI.jpg" alt="Jagannath Temple" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-nine">Goa Beach</h1>
          <img src="https://media1.thrillophilia.com/filestore/b8iqw6n62s37df5vqj13dpxr17cg_shutterstock_1850377780.jpg?w=400&dpr=2" alt="Goa Beach" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-ten">GateWay of India</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Gateway_of_India_in_Mumbai.jpg" alt="GateWay of India" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eleven">India Gate</h1>
          <img src="https://pixelz.cc/wp-content/uploads/2017/11/florence-cathedral-italy-uhd-8k-wallpaper-.jpg" alt="India Gate" />
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Tour;
