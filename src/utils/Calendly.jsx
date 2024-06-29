import React from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";


const Calendly = () => {
  return (
    <div className="calendly_wrapper w-full min-h-screen p-0" style={{minHeight : '650px'}}>
      <InlineWidget className="" url="https://calendly.com/rudyboateng/discovery-call-clone-2?month=2024-06" />
    </div>
  );
};



// const Calendly = () => {
//   return (
//     <div className="App">
//       <PopupWidget
//         url="https://calendly.com/rudyboateng/discovery-call-clone-2?month=2024-06"
//         rootElement={document.getElementById("root")}
//         text="Click here to schedule!"
//         textColor="#ffffff"
//         color="#00a2ff"
//       />
//     </div>
//   );
// };


// const Calendly = () => {
//   return (
//     <div
//       class="calendly-inline-widget"
//       data-url="https://calendly.com/rudyboateng/discovery-call-clone-2?month=2024-06"
//       style="min-width:320px;height:650px;"
//     ></div>
//   );
// };

export default Calendly;
