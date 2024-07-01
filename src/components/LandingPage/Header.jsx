import React from "react";
import the_exit from "../../assets/images/the_exit-03.jpg";

function Header() {
  return (
    <div className="header flex flex-col sm:flex-row items-center justify-between pl-4 md:px-10 py-8 ">
      <div className="logo max-h-14 max-w-14 ">
        <img src={the_exit} className="m-0 h-full w-full object-cover" alt="" />
      </div>
      <div className="menu_items pt-8 sm:pt-0">
        <ul>
          <li className="inline mr-3">
            <a href="#service">Service</a>
          </li>
          <li className="inline mr-3">
            <a href="#about">About</a>
          </li>
          <li className="inline mr-3">
            <a
              href="#getInTouch"
              className="bg-white-500 hover:bg-slate-900 text-black hover:text-white py-2 rounded-full px-4 border border-slate-900 transition-all duration-300"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
