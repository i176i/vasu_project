// import React from "react";
// import the_exit from "../../assets/images/the_exit-03.jpg";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useState } from "react";

// const items = (
//   <ul>
//     <li className="inline mr-3">
//       <a href="#service">Service</a>
//     </li>
//     <li className="inline mr-3">
//       <a href="#about">About</a>
//     </li>
//     <li className="inline mr-3">
//       <a
//         href="#getInTouch"
//         className="bg-white-500 hover:bg-slate-900 text-black hover:text-white py-2 rounded-full px-4 border border-slate-900 transition-all duration-300"
//       >
//         Get in touch
//       </a>
//     </li>
//   </ul>
// );
// function Header() {
//   return (
//     <div className="header flex flex-row items-center justify-between px-4 py-4 md:px-10 sm:py-8 ">
//       <div className="logo max-h-14 max-w-14 ">
//         <img src={the_exit} className="m-0 h-full w-full object-cover" alt="" />
//       </div>
//       <div className="menu_items pt-8 sm:pt-0 hidden sm:block">
//         {items}
//       </div>
//       <div className="sm:pt-0 flex items-center justify-center  sm:hidden ">
//         {/* {items} */}
//         <FaBars size={28}/>
//       </div>
//     </div>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import the_exit from "../../assets/images/the_exit-03.jpg";
// import { FaBars, FaTimes } from "react-icons/fa";

// const items = (
//   <ul>
//     <li className="inline mr-3">
//       <a href="#service">Service</a>
//     </li>
//     <li className="inline mr-3">
//       <a href="#about">About</a>
//     </li>
//     <li className="inline mr-3">
//       <a
//         href="#getInTouch"
//         className="bg-white-500 hover:bg-slate-900 text-black hover:text-white py-2 rounded-full px-4 border border-slate-900 transition-all duration-300"
//       >
//         Get in touch
//       </a>
//     </li>
//   </ul>
// );

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="header flex flex-row items-center justify-between px-4 py-4 md:px-10 sm:py-8 relative">
//       <div className="logo max-h-14 max-w-14 ">
//         <img src={the_exit} className="m-0 h-full w-full object-cover" alt="Logo" />
//       </div>
//       <div className="menu_items pt-8 sm:pt-0 hidden sm:block">
//         {items}
//       </div>
//       <div className="sm:pt-0 flex items-center justify-center sm:hidden">
//         <FaBars size={28} onClick={toggleMenu} />
//       </div>
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-end p-4">
//           <FaTimes size={28} onClick={toggleMenu} />
//         </div>
//         <div className="p-4">
//           {items}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import the_exit from "../../assets/images/the_exit-03.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const items = (
    <ul className="flex flex-col sm:flex-row  items-center mt-12 sm:mt-0">
      <li className="inline sm:mr-6 text-xl mb-10 sm:mb-4">
        <a href="#whatWeDo" onClick={closeMenu}>
          What we do
        </a>
      </li>
      <li className="inline sm:mr-6 text-xl mb-10 sm:mb-4">
        <a
          href="#getInTouch"
          className="bg-white-500 hover:bg-slate-900 text-black hover:text-white py-2 rounded-full px-4 border border-slate-900 transition-all duration-300"
          onClick={closeMenu}
        >
          Get in touch
        </a>
      </li>
    </ul>
  );

  return (
    <div className="header flex flex-row items-center justify-between px-4 py-4 md:px-10 sm:py-8 relative">
      <div className="logo max-h-14 max-w-14">
        <img
          src={the_exit}
          className="m-0 h-full w-full object-cover"
          alt="Logo"
        />
      </div>
      <div className="menu_items pt-8 sm:pt-0 hidden sm:block">{items}</div>
      <div className="sm:pt-0 flex items-center justify-center sm:hidden">
        <FaBars
          size={28}
          onClick={toggleMenu}
          style={{ strokeWidth: "1" }}
          strokeWidth={5}
        />
      </div>
      {/* {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-5" onClick={toggleMenu}></div>
      )} */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4 ">
          <FaTimes size={28} onClick={toggleMenu} fontWeight={1} />
        </div>
        <div className="p-4">{items}</div>
      </div>
    </div>
  );
}

export default Header;
