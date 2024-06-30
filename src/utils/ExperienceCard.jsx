import React from "react";

function ExperienceCard({ heading, content, image }) {
  return (
    <div className="w-64 min-h-72 rounded-xl border-none overflow-hidden shadow-[4px_8px_9px_2px_#00000024]">
      <div className="experience_image_section h-32">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="experience_description h-full  bg-slate-800 text-gray-50  px-3 py-3">
        <h2 className="text-lg font-bold">{heading}</h2>
        <p className="text-sm mt-2 leading-5">{content}</p>
      </div>
    </div>
  );
}

{/* <a
  href="https://www.w3schools.com/howto/howto_css_profile_card.asp"
  className="text-blue-500 block"
>
  Create such card
</a>; */}

export default ExperienceCard;
