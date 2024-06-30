import React from "react";
import banner_img01 from "../../assets/images/banner_img01.jpg";
import banner_img02 from "../../assets/images/banner_img02.jpg";
import banner_img03 from "../../assets/images/banner_img03.jpg";
import banner_img04 from "../../assets/images/banner_img04.jpg";

function Card({ item }) {
  console.log(item);
  return (
    <div className="cards mx-1 min-w-64 min-h-80">
      <img className="w-full h-full object-cover" src={item} alt="" />
    </div>
  );
}

function ScrollableImageBanners() {
  const list = [
    banner_img01,
    banner_img02,
    banner_img03,
    banner_img04,
    banner_img01,
    banner_img02,
    banner_img03
  ];
  return (
    <div className="scrollable_banner_wrapper w-full px-20">
      <div className="flex overflow-x-scroll hide-scrollbar box-content py-10 ">
        {list.map((item, index) => (
          <Card item={item} id={index} />
        ))}
      </div>
    </div>
  );
}

export default ScrollableImageBanners;
