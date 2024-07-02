import React from "react";
import { motion } from "framer-motion";
import a from "../../assets/images/a.png";
import b from "../../assets/images/b.png";
import c from "../../assets/images/c.png";
import d from "../../assets/images/d.png";
import e from "../../assets/images/e.png";
import f from "../../assets/images/f.png";
import g from "../../assets/images/g.png";
import h from "../../assets/images/h.png";
import i from "../../assets/images/i.png";
import j from "../../assets/images/j.png";

function Card({ item }) {
  console.log(item);
  return (
    <div className="cards px-4 md:px-14 w-32 md:w-56 h-32 sm:h-40 flex items-center ">
      {/* {item} */}
      <img src={item} alt="a" className="filter invert"  />
    </div>
  );
}

function ScrollMotion({ list }) {
  return (
    <motion.div
      className="flex flex-shrink-0"
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {list.map((item, index) => (
        <Card item={item} id={index} />
      ))}
    </motion.div>
  );
}

function BrandScroll() {
  const list = [a, b, c, d, e, f, g];
  return (
    <div className="brandScroll_wrapper w-full pb-2 sm:pb-8 overflow-hidden bg-blue-800 mt-10 mb-16 sm:mb-0">
      <div className="brand_header text-3xl md:text-5xl mt-8 md:mt-12 flex justify-center md:pb-12 text-slate-100">
        Trusted By
      </div>
      <div className="flex">
        <ScrollMotion list={list} />
        <ScrollMotion list={list} />
      </div>
    </div>
  );
}

export default BrandScroll;
