import img1 from "../../../../src/assets/images/1.jpg";
import img2 from "../../../../src/assets/images/2.jpg";
import img3 from "../../../../src/assets/images/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      classNameName="mySwiper"
    >
      <SwiperSlide>
        <section className="grid grid-cols-1 gap-0 bg-green-100 bg-opacity-25 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-green-900 md:text-4xl lg:text-5xl">
            Healing Hearts, Changing Lives
            </h1>
            <p className="pr-0 mb-4 text-sm text-green-800 tracking-relaxed lg:pr-16">
            Experience the Healing Power of Compassion and Care. Our Camps Make a Lasting Impact on Communities.
            </p>
          </div>
          <div>
            <img
              src={img1}
              alt="banner image"
              className="object-cover w-full h-64 bg-gray-100 md:h-full"
              loading="lazy"
            />
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="grid grid-cols-1 gap-0 bg-green-100 bg-opacity-25 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-green-900 md:text-4xl lg:text-4xl">
            Community Wellness Initiative
            </h1>
            <p className="pr-0 mb-4 text-sm text-green-800 tracking-relaxed lg:pr-16">
            Join Us in Promoting Wellness and Empowering Communities. Together, We're Making Healthier Futures Possible.
            </p>
          </div>
          <div>
            <img
              src={img2}
              alt="banner image"
              className="object-cover w-full h-64 bg-gray-100 md:h-full"
              loading="lazy"
            />
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="grid grid-cols-1 gap-0 bg-green-100 bg-opacity-25 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-green-900 md:text-4xl lg:text-5xl">
            Caring Beyond Borders
            </h1>
            <p className="pr-0 mb-4 text-sm text-green-800 tracking-relaxed lg:pr-16">
            Bringing Vital Healthcare Services Where They're Needed Most. Our Camps Reach Beyond Boundaries to Save Lives.
            </p>
          </div>
          <div>
            <img
              src={img3}
              alt="banner image"
              className="object-cover w-full h-64 bg-gray-100 md:h-full"
              loading="lazy"
            />
          </div>
        </section>
      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;
