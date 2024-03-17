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
        <section className="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
            <span className="mb-3 text-white bg-blue-900 badge">Pre Beta</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
              Great customer relationships start here.
            </h1>
            <form className="w-full mb-6">
              <label className="sr-only">Your Email</label>
              <div className="block lg:hidden">
                <input
                  className="text-blue-900 form-input form-input-lg"
                  type="email"
                  placeholder="Enter your email..."
                  required="true"
                />
                <button
                  className="w-full mt-2 text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
              <div className="hidden w-full form-append lg:flex">
                <input
                  className="text-blue-900 form-input form-input-lg"
                  type="email"
                  placeholder="Enter your email..."
                  required="true"
                />
                <button
                  className="text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
            </form>
            <p className="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">
              Get the #1 Business Messenger and start delivering personalized
              experiences at every stage of the customer journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              alt="3 women looking at a laptop"
              className="object-cover w-full h-64 bg-gray-100 md:h-full"
              loading="lazy"
            />
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
            <span className="mb-3 text-white bg-blue-900 badge">Pre Beta</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
              Great customer relationships start here.
            </h1>
            <form className="w-full mb-6">
              <label className="sr-only">Your Email</label>
              <div className="block lg:hidden">
                <input
                  className="text-blue-900 form-input form-input-lg"
                  type="email"
                  placeholder="Enter your email..."
                  required="true"
                />
                <button
                  className="w-full mt-2 text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
              <div className="hidden w-full form-append lg:flex">
                <input
                  className="text-blue-900 form-input form-input-lg"
                  type="email"
                  placeholder="Enter your email..."
                  required="true"
                />
                <button
                  className="text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
            </form>
            <p className="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">
              Get the #1 Business Messenger and start delivering personalized
              experiences at every stage of the customer journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              alt="3 women looking at a laptop"
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
