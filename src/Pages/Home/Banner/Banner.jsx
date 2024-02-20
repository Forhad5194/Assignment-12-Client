
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/Banner/1.jpg'
import img2 from '../../../assets/Banner/2.jpg'
import img3 from '../../../assets/Banner/3.jpg'
import img4 from '../../../assets/Banner/4.jpg'
import img5 from '../../../assets/Banner/5.jpg'
const Banner = () => {
    return (
        <div>
            
        
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-[800px] rounded-lg"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Banner;