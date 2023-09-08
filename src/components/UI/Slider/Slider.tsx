import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './Slider.css'; // Import your custom styles

import one from '../../../images/Paulina-Stopka-vertical-landscapes-Lago-Di-Braies.webp';
import two from '../../../images/landscape-photography-tips-yosemite-valley-feature.webp';
import three from '../../../images/pexels-pixabay-147411.jpg';
import four from '../../../images/pexels-tobi-675764.jpg';

export const Slider: FC = () => {
  return (
          <div className="slider-container">
            <Swiper
            centeredSlides={true}
            modules={[EffectCards]}
            effect='cards'
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="custom-swiper"
                >
                  <SwiperSlide className='slide'>
                  <img src={one} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='slide'>
                  <img src={two} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='slide'>
                  <img src={three} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='slide'>
                  <img src={four} alt="" />
                  </SwiperSlide>
                </Swiper>
          </div>
  );
};
