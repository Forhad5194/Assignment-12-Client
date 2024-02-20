import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
    const [ review , setReview ] = useState([])
    useEffect(()=> {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (
        <div>

            <h2 className="text-4xl font-bold text-center p-8">Latest User review</h2>

            <Swiper  navigation={true} modules={[Navigation]} className="mySwiper mb-5">
                
               {
                    review.map(review => <SwiperSlide key={review._id}>

                        <img className="mx-auto" src={review.img} alt="" />

                        <h2 className="text-center text-2xl font-bold">{review.name}</h2>
                        <p className="text-xl font-medium text-center ">{review.Description}</p>
                        <p className="text-center ">{review.title}</p>
                    </SwiperSlide>)
               }
            </Swiper>
        </div>
    );
};

export default Testimonials;