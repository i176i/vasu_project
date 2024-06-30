import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import sample_video_1 from "../../assets/videos/sample_video_1.mp4";
import sample_video_2 from "../../assets/videos/sample_video_2.mp4";
import sample_video_3 from "../../assets/videos/sample_video_3.mp4";
import left_arrow from "../../assets/images/left-arrow.png";
import right_arrow from "../../assets/images/right-arrow.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const indexes = [
    { index: 0, url: "https://cdn.shopify.com/videos/c/o/v/ff9893a9e10a4d2f9fd08d68f08435aa.mp4" },
    { index: 1, url: "https://cdn.shopify.com/videos/c/o/v/37a45bdc3f4340f59d1ee04f04dd20ca.mp4" },
    { index: 2, url: "https://cdn.shopify.com/videos/c/o/v/c541005a34ad44f8bfe385d2099a9cc2.mp4" },
    { index: 3, url: "https://cdn.shopify.com/videos/c/o/v/b4f5e0dd6e784fe9bbc2574eaaef6be6.mp4" },
    { index: 4, url: "https://cdn.shopify.com/videos/c/o/v/3bf3b3b7d2b64670bcdba59ed6286e4c.mp4" },
    { index: 5, url: "https://cdn.shopify.com/videos/c/o/v/da8fe135be79439c81f16ca54c70edde.mp4" },
    { index: 6, url: "https://cdn.shopify.com/videos/c/o/v/17bd689ecc9842deaaa174ee1c613783.mp4" },
    { index: 7, url: "https://cdn.shopify.com/videos/c/o/v/027cf56ebf384bcebff6873f28be8916.mp4" },
    { index: 8, url: "https://cdn.shopify.com/videos/c/o/v/37a45bdc3f4340f59d1ee04f04dd20ca.mp4" },
  ];
  const middleVideo = Math.floor(indexes.length / 2);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swiperRef = React.useRef(null);

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={middleVideo}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper swiper_main_container"
        navigation={true}
        onActiveIndexChange={(swiper) => {
          console.log(swiper);
          setActiveIndex(swiper.activeIndex);
        }}
        
      >
        {indexes.map((item, index) => (
          <SwiperSlide id={index} style={{minHeight : "380px"}}>
            <div className="rounded-2xl overflow-hidden h-full bg-white border-2 border-slate-400 object-contain">
              <ReactPlayer
                className="react-player fixed-bottom h-full"
                url={item.url}
                width="100%"
                heigh="100%"
                controls={activeIndex == item.index}
                playing={activeIndex == item.index}
                style={{ objectFit: "contain", borderRadius: "10px" }}
                loop={true}
                // config={{
                //   file: {
                //     attributes: {
                //       style: {
                //         objectFit: "contain", 
                //       },
                //     },
                //   },
                // }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="swiper-button-prev absolute z-10 top-1/2 left-12 transform -translate-y-1/2 px-4  bg-blue-800 shadow-[4px_8px_5px_2px_#eeecec22] rounded-full w-16 h-16"
        onClick={slidePrev}
      >
        <img src={left_arrow} alt="" className="invert" />
      </button>

      <button
        className="swiper-button-prev absolute z-10 top-1/2 right-12 transform -translate-y-1/2 bg-blue-800 px-4 shadow-[4px_8px_5px_2px_#eeecec22] rounded-full w-16 h-16"
        onClick={slideNext}
      >
        <img src={right_arrow} alt="" className="invert" />
      </button>
    </div>
  );
}
