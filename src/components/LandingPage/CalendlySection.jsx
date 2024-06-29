import React from "react";
import Calendly from "../../utils/Calendly";

function CalendlySection() {
  return (
    <div className="h-full overflow-hidden pt-10 flex items-center w-full ">
      <div id="getInTouch" className=" p-12 mx-12 shadow-[4px_4px_6px_2px_#71717123] flex align-middle flex-col rounded-xl" >
        <h1 className="text-5xl text-center my-8">Let's Grow Together</h1>
        <p className="text-md text-center my-2">Making more than $90k/mo in revenue Lets chat.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-48 m-auto mt-10">Get in Touch</button>
      </div>
      <Calendly />
    </div>
  );
}

// footer flex align-middle flex-col mx-auto py-10 shadow-[4px_8px_9px_2px_#00000024] my-10 rounded-xl
export default CalendlySection;
