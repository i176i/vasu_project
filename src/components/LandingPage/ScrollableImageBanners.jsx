import React from "react";
import promotion_a from "../../assets/images/compressed_promotional/promotion_a.jpg";
import promotion_b from "../../assets/images/compressed_promotional/promotion_b.jpg";
import promotion_c from "../../assets/images/compressed_promotional/promotion_c.jpg";
import promotion_d from "../../assets/images/compressed_promotional/promotion_d.jpg";
import promotion_e from "../../assets/images/compressed_promotional/promotion_e.jpg";
import promotion_f from "../../assets/images/compressed_promotional/promotion_f.jpg";
import promotion_g from "../../assets/images/compressed_promotional/promotion_g.jpg";

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
    promotion_a,
    promotion_b,
    promotion_c,
    promotion_d,
    promotion_e,
    promotion_f,
    promotion_g,
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
