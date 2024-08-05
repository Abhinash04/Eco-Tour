import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './tour.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/services';
import india from '../images/india.png'
import BookPlace from '../components/BookPlace';

const Tour = () => {
  return (
    <>
      <section className="tour-section">
        <Header />
        <Swiper
          className="tour-swiper"
          grabCursor={true}
          speed={500}
          effect="fade"
          loop={true}
          mousewheel={{ invert: false, sensitivity: 1 }}
        >
          <SwiperSlide className="tour-swiper-slide">
            <h1 className="tour-title tour-title-one">KEDARNATH</h1>
            <img src="https://wallpapers.com/images/hd/kedarnath-temple-fences-4k-20mjafmypuf2gqrn.jpg" alt="kedarnath temple" />
          </SwiperSlide>
          <SwiperSlide className="tour-swiper-slide">
            <h1 className="tour-title tour-title-two">MANALI</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" alt="Manali" />
          </SwiperSlide>
          <SwiperSlide className="tour-swiper-slide">
            <h1 className="tour-title tour-title-three">ALLEPEY</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg" alt="Allepey" />
          </SwiperSlide>
          <SwiperSlide className="tour-swiper-slide">
            <h1 className="tour-title tour-title-four">AMRITSAR</h1>
            <img src="https://m.media-amazon.com/images/I/81fS1MSi9wL.jpg" alt="Amritsar" />
          </SwiperSlide>
          <SwiperSlide className="tour-swiper-slide">
            <h1 className="tour-title tour-title-five">AKSHARDHAM</h1>
            <img src="https://c4.wallpaperflare.com/wallpaper/629/182/419/temples-akshardham-wallpaper-preview.jpg" alt="AksharDham" />
          </SwiperSlide>
          <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-six">CHAR MINAR</h1>
          <img src="https://wallpapercave.com/wp/wp6539377.jpg" alt="Char Minar" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-seven">HAWA MAHAL</h1>
          <img src="https://wallpapercave.com/wp/wp4555030.jpg" alt="Hawa Mahal" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eight">PURI</h1>
          <img src="https://wallpapercave.com/wp/wp8207549.jpg" alt="Puri" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-nine">GOA BEACH</h1>
          <img src="https://wallpapercave.com/wp/wp3170957.jpg" alt="Goa Beach" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-ten">TAJ MAHAL</h1>
          <img src= {india} alt="Taj Mahal" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eleven">INDIA GATE</h1>
          <img src="https://wallpapers.com/images/hd/india-gate-in-delhi-omvkk9thuh7nvsop.jpg" alt="India Gate" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twelve">KUTCH</h1>
          <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg" alt="Kutch" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-thirteen">LOTUS TEMPLE</h1>
          <img src="https://www.tripsavvy.com/thmb/SkQRZk9L1MWXB75X5HX80fpUpOM=/2121x1414/filters:fill(auto,1)/GettyImages-185733537-5b51446046e0fb00378bc660.jpg" alt="Lotus Temple" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-fourteen">ELORA CAVES</h1>
          <img src="https://wallpapercave.com/wp/wp9401269.jpg" alt="Elora Caves" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-fifteen">DAL LAK</h1>
          <img src="https://wallpapercave.com/wp/wp8165783.jpg" alt="Dal Lake" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-sixteen">KONARK</h1>
          <img src="https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg" alt="Konark" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-seventeen">RUMTEK</h1>
          <img src="https://image3.mouthshut.com/images/Restaurant/Photo/-87248_68255.jpg" alt="Rumtek-Monastery" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-eighteen">RAMESWARAM</h1>
          <img src="https://www.tamilnadutourism.com/blog/wp-content/uploads/2022/11/rameswaram-temple.jpg" alt="Rameswaram" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-nineteen">KANYAKUMARI</h1>
          <img src="https://www.tripsavvy.com/thmb/yUi3kQW3JtyCFRrK9DqqNSb12nA=/2121x1414/filters:fill(auto,1)/GettyImages-1171590321-366ab14d9da048158c2a52e1b851d8f0.jpg" alt="Kanyakumari" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twenty">BODH GAYA</h1>
          <img src="https://wallpapercave.com/wp/wp10731786.jpg" alt="Bodh Gaya" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentyone">LEH-LADAKH</h1>
          <img src="https://wallpaperaccess.com/full/1398665.jpg" alt="Leh-Ladakh" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentytwo">MUMBAI</h1>
          <img src="https://wallpaperaccess.com/full/1180373.jpg" alt="Mumbai" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentythree">MOUNT ABU</h1>
          <img src="https://www.myavidtravels.com/wp-content/uploads/2018/01/LRM_EXPORT_20180514_144042.jpg" alt="Mount Abu" />
        </SwiperSlide>
        <SwiperSlide className="tour-swiper-slide">
          <h1 className="tour-title tour-title-twentyfour">NAINITAL</h1>
          <img src="https://wallpaperaccess.com/full/9071222.jpg" alt="Nainital" />
        </SwiperSlide>
        </Swiper>
      </section>
      <BookPlace/>
      <Services />
      <Footer/>
    </>
  );
};

export default Tour;
