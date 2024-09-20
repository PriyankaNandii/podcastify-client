/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Slider = () => {
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[])
    return (
        <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className='relative  h-[100vh]' data-aos = "zoom-in">
           <img className=' lg:w-full h-full object-cover rounded-xl bg-opacity-100 opacity-100' src="/images/slide1.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[35%] lg:top-[25%] sm:left-[5%] md:left-[5%] lg:left-[5%] text-7xl  text-white ">Welcome to 
                <span className='text-red-600'>Podcastify</span></h2>
            <p className='text-5xl font-extrabold text-red-600 absolute sm:top-[25%] md:top-[30%] lg:top-[40%] sm:left-[5%] md:left-[5%] lg:left-[5%]'>Let's Listen Together.</p>
            <p className='text-xl text-white absolute sm:top-[35%] md:top-[45%] lg:top-[52%] sm:left-[10%] md:left-[15%] lg:left-[5%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, dolorem?</p>
            <div className='flex flex-row gap-20'> <button className=" absolute btn text-xl font-normal text-white border-b-2 border-b-white bg-red-600 sm:top-[35%] md:top-[45%] lg:top-[60%] sm:left-[10%] md:left-[15%] lg:left-[10%]">Latest Episodes</button>
            <button className=" absolute btn text-xl font-normal text-white border-b-2 border-b-white bg-red-600 sm:top-[35%] md:top-[45%] lg:top-[60%] sm:left-[10%] md:left-[15%] lg:left-[25%]">Play</button>
            </div>
            <p className='text-2xl text-red-500 px-4 mt-4 absolute sm:top-[45%] md:top-[65%] lg:top-[80%] sm:left-[5%] md:left-[5%] lg:left-[5%]'>Slide to see some nice demos..</p>
           </div>
        </div>
        </SwiperSlide> 
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-full h-screen rounded-xl bg-opacity-100 opacity-100' src="/images/slide2.jpg" alt="" /> 
           <div className=''>
            <h2 className="absolute sm:top-[15%] md:-top[35%] lg:top-[25%] sm:left-[5%] md:left-[5%] lg:left-[5%] text-7xl  text-white ">Welcome to 
                <span className='text-red-600'>Podcastify</span></h2>
            <p className='text-5xl font-extrabold text-red-600 absolute sm:top-[25%] md:top-[30%] lg:top-[40%] sm:left-[5%] md:left-[5%] lg:left-[5%]'>Let's Listen Together.</p>
            <p className='text-xl text-white absolute sm:top-[35%] md:top-[45%] lg:top-[52%] sm:left-[10%] md:left-[15%] lg:left-[5%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, dolorem?</p>
            <div className='flex flex-row gap-20'> <button className=" absolute btn text-xl font-normal text-white border-b-2 border-b-white bg-red-600 sm:top-[35%] md:top-[45%] lg:top-[60%] sm:left-[10%] md:left-[15%] lg:left-[10%]">Latest Episodes</button>
            <button className=" absolute btn text-xl font-normal text-white border-b-2 border-b-white bg-red-600 sm:top-[35%] md:top-[45%] lg:top-[60%] sm:left-[10%] md:left-[15%] lg:left-[25%]">Play</button>
            </div>
            <p className='text-2xl text-red-500 px-4 mt-4 absolute sm:top-[45%] md:top-[65%] lg:top-[80%] sm:left-[5%] md:left-[5%] lg:left-[5%]'>Slide to see some nice demos..</p>
           </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-full h-screen rounded-xl bg-opacity-100 opacity-100' src="/images/slide3.jpg" alt="" /> 
           <div className=''>
            <h2 className="absolute sm:top-[15%] md:-top[35%] lg:top-[25%] sm:left-[5%] md:left-[5%] lg:left-[5%] text-7xl  text-white ">Welcome to 
                <span className='text-red-600'>Podcastify</span></h2>
            <p className='text-5xl font-extrabold text-red-600 absolute sm:top-[25%] md:top-[30%] lg:top-[40%] sm:left-[5%] md:left-[5%] lg:left-[5%]'>Let's Listen Together.</p>
            <p className='text-xl text-white absolute sm:top-[35%] md:top-[45%] lg:top-[52%] sm:left-[10%] md:left-[15%] lg:left-[5%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, dolorem?</p>
            <div className='flex flex-row gap-20'> <button className=" absolute btn text-xl font-normal text-white border-b-2 border-b-white bg-red-600 sm:top-[35%] md:top-[45%] lg:top-[60%] sm:left-[10%] md:left-[15%] lg:left-[10%]">Latest Episodes</button>
            <button className=" absolute btn text-xl font-normal text-white border-b-2 border-b-white bg-red-600 sm:top-[35%] md:top-[45%] lg:top-[60%] sm:left-[10%] md:left-[15%] lg:left-[25%]">Play</button>
            </div>
            <p className='text-2xl text-red-500 px-4 mt-4 absolute sm:top-[45%] md:top-[65%] lg:top-[80%] sm:left-[5%] md:left-[5%] lg:left-[5%]'>Slide to see some nice demos..</p>
           </div>
        </div>
        </SwiperSlide>
    
    </Swiper>
        </div>
    );
};

export default Slider;