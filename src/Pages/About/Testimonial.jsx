
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-flip';
// import { EffectFlip, Navigation } from 'swiper/modules';

// const Testimonial = () => {
//     return (
//         <div  className="bg-gray-900 p-8 min-h-screen"
//         style={{
//             backgroundImage: "url(https://i.ibb.co.com/QmkskbP/177891431-fundo-com-um-microfone-profissional.jpg)",
//           }}>
       
//             {/* Title Section */}
//             <div className="text-white text-center mb-14">
//                 <h1 className="text-xl py-4">Testimonials</h1>
//                 <h1 className="text-4xl font-bold">
//                     What <span className="text-red-600">Listeners</span> Say
//                 </h1>
//             </div>

//             {/* Content Section */}
//             <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-12 mt-8">
//                 {/* Swiper Slider Section */}
//                 <div className="lg:w-1/2 md:w-1/2 w-full">
//                     <Swiper
//                         effect={'flip'}
//                         grabCursor={true}
//                         pagination={{ clickable: true }}
//                         navigation={true}
//                         modules={[EffectFlip, Navigation]}
//                         className="testimonial-swiper"
//                     >
//                         <SwiperSlide className='flex justify-center'>
//                             <section className="p-6 dark:bg-gray-900">
//                                 <div className="container max-w-xl mx-auto">
//                                     <div className="flex flex-col items-center w-full space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-800">
//                                         <blockquote className="max-w-lg text-lg italic font-medium text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum!</blockquote>
//                                         <div className="text-center text-white">
//                                             <p>Leroy Jenkins</p>
//                                             <p>CEO of Company Co.</p>
//                                         </div>
//                                         <div className="flex space-x-2">
//                                             <div className="rating">
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input
//                                                     type="radio"
//                                                     name="rating-2"
//                                                     className="mask mask-star-2 bg-red-500"
//                                                     defaultChecked />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </section>
//                         </SwiperSlide>

//                         <SwiperSlide className='flex justify-center'>
//                             <section className="p-6">
//                                 <div className="container max-w-xl mx-auto">
//                                     <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
//                                         <blockquote className="max-w-lg text-lg italic font-medium text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum!</blockquote>
//                                         <div className="text-center text-white">
//                                             <p>Leroy Jenkins</p>
//                                             <p>CEO of Company Co.</p>
//                                         </div>
//                                         <div className="flex space-x-2">
//                                             <div className="rating">
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input
//                                                     type="radio"
//                                                     name="rating-2"
//                                                     className="mask mask-star-2 bg-red-500"
//                                                     defaultChecked />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </section>
//                         </SwiperSlide>
//                         <SwiperSlide className='flex justify-center'>
//                             <section className="p-6">
//                                 <div className="container max-w-xl mx-auto">
//                                     <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-800">
//                                         <blockquote className="max-w-lg text-lg italic font-medium text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum!</blockquote>
//                                         <div className="text-center text-white">
//                                             <p>Leroy Jenkins</p>
//                                             <p>CEO of Company Co.</p>
//                                         </div>
//                                         <div className="flex space-x-2">
//                                             <div className="rating">
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input
//                                                     type="radio"
//                                                     name="rating-2"
//                                                     className="mask mask-star-2 bg-red-500"
//                                                     defaultChecked />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </section>
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>

//                 {/* Text Section */}
//                 <div className="text-white lg:w-1/2 md:w-1/2 w-full">
//                     <p className="text-lg">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, natus hic dolores accusamus asperiores atque saepe corrupti rem quia doloribus.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
import { EffectFlip, Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="relative bg-fixed bg-gray-900 p-8 min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://i.ibb.co.com/VJ0V5yC/1.webp')",
            }}>
            {/* Overlay to add slight darkening effect */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content Section */}
            <div className="relative z-10">
                {/* Title Section */}
                <div className="text-white text-center mb-14">
                    <h1 className="text-xl py-4">Testimonials</h1>
                    <h1 className="text-4xl font-bold">
                        What <span className="text-red-600">Listeners</span> Say
                    </h1>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-12 mt-8">
                    {/* Swiper Slider Section */}
                    <div className="lg:w-1/2 md:w-1/2 w-full">
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                            navigation={true}
                            modules={[EffectFlip, Navigation]}
                            className="testimonial-swiper"
                        >
                            <SwiperSlide className="flex justify-center w-full">
                                <section className="p-6 bg-black opacity-100 w-full">
                                    <div className="container max-w-xl mx-auto w-full">
                                        <div className="flex flex-col items-center w-full space-y-8 rounded-md lg:h-full lg:p-8 bg-black opacity-70 dark:text-gray-800">
                                            <blockquote className="max-w-lg text-lg italic font-medium text-center text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum!
                                            </blockquote>
                                            <div className="text-center text-white">
                                                <p>Leroy Jenkins</p>
                                                <p>CEO of Company Co.</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" defaultChecked />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </SwiperSlide>

                            <SwiperSlide className="flex justify-center w-full">
                                <section className="p-6 bg-black opacity-100 w-full">
                                    <div className="container max-w-xl mx-auto w-full">
                                        <div className="flex flex-col items-center w-full space-y-8 rounded-md lg:h-full lg:p-8 bg-black opacity-70 dark:text-gray-800">
                                            <blockquote className="max-w-lg text-lg italic font-medium text-center text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum!
                                            </blockquote>
                                            <div className="text-center text-white">
                                                <p>Leroy Jenkins</p>
                                                <p>CEO of Company Co.</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" defaultChecked />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </SwiperSlide>

                            <SwiperSlide className="flex justify-center w-full">
                                <section className="p-6 bg-black opacity-100 w-full">
                                    <div className="container max-w-xl mx-auto w-full">
                                        <div className="flex flex-col items-center w-full space-y-8 rounded-md lg:h-full lg:p-8 bg-black opacity-70 dark:text-gray-800">
                                            <blockquote className="max-w-lg text-lg italic font-medium text-center text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum!
                                            </blockquote>
                                            <div className="text-center text-white">
                                                <p>Leroy Jenkins</p>
                                                <p>CEO of Company Co.</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" defaultChecked />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Text Section */}
                    <div className="text-white lg:w-1/2 md:w-1/2 w-full">
                        <p className="text-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, natus hic dolores accusamus asperiores atque saepe corrupti rem quia doloribus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
