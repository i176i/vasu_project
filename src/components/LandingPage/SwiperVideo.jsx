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
    { index: 0, url: sample_video_2 },
    { index: 1, url: sample_video_3 },
    { index: 2, url: sample_video_1 },
    { index: 3, url: sample_video_3 },
    { index: 4, url: sample_video_1 },
    { index: 5, url: sample_video_2 },
    { index: 6, url: sample_video_1 },
    { index: 7, url: sample_video_3 },
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
          rotate: 10,
          stretch: 1,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        onActiveIndexChange={(swiper) => {
          console.log(swiper);
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {indexes.map((item, index) => (
          <SwiperSlide className="min-h-96" id={index}>
            <div className="rounded-lg h-full bg-white overflow-clip object-contain">
              <ReactPlayer
                className="react-player fixed-bottom h-full"
                url={item.url}
                width="100%"
                controls={activeIndex == item.index}
                playing={activeIndex == item.index}
                style={{ objectFit: "contain", height: "100%" }}
                loop={true}
                config={{
                  file: {
                    attributes: {
                      style: {
                        objectFit: "cover", // Ensure the video fits within the player without stretching
                      },
                    },
                  },
                }}
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
