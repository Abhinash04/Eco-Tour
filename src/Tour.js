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
          <h1 className="tour-title tour-title-one">Kedarnath</h1>
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
          <h1 className="tour-title tour-title-twelve">Kutch</h1>
          <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg" alt="Kutch" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-thirteen">Lotus Temple</h1>
          <img src="https://wallpapercave.com/wp/wp3776823.jpg" alt="Lotus Temple" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-fourteen">Elora Caves</h1>
          <img src="https://wallpapercave.com/wp/wp9401269.jpg" alt="Elora Caves" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-fifteen">Dal Lake</h1>
          <img src="https://wallpapercave.com/wp/wp8165739.jpg" alt="Dal Lake" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-sixteen">Konark Sun Temple</h1>
          <img src="https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg" alt="Konark" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-seventeen">Gangtok</h1>
          <img src="https://wallpapercave.com/wp/wp8551850.jpg" alt="Gangtok" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eighteen">Rameswaram</h1>
          <img src="https://wallpapercave.com/wp/wp10875786.jpg" alt="Rameswaram" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-nineteen">Kanyakumari</h1>
          <img src="https://wallpapercave.com/wp/wp7626693.jpg" alt="Kanyakumari" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twenty">Bodh Gaya</h1>
          <img src="https://wallpapercave.com/wp/wp10731786.jpg" alt="Bodh Gaya" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentyone">Leh</h1>
          <img src="https://wallpapercave.com/wp/wp4527553.jpg" alt="Leh" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentytwo">Gateway of India</h1>
          <img src="https://wallpapercave.com/wp/wp5172691.jpg" alt="Gateway of India" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentythree">Mount Abu</h1>
          <img src="https://wallpapercave.com/wp/wp10799121.jpg" alt="Mount Abu" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentyfour">Nainital</h1>
          <img src="https://wallpapercave.com/wp/wp2688903.jpg" alt="Nainital" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Tour;
