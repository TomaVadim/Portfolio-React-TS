import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './Slider.css';

import one from '../../assets/landscape-photography-tips-yosemite-valley-feature.webp';
import two from '../../assets/landscape-photography-tips-yosemite-valley-feature.webp';
import three from '../../assets/landscape-photography-tips-yosemite-valley-feature.webp';
import four from '../../assets/landscape-photography-tips-yosemite-valley-feature.webp';

export const Slider: FC = () => {
  return (
    <div className='slider-container'>
      <Swiper
        centeredSlides={true}
        modules={[EffectCards]}
        effect='cards'
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='custom-swiper'
      >
        <SwiperSlide className='slide'>
          <img src={one} alt='' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={two} alt='' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={three} alt='' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={four} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
