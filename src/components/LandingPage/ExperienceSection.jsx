import React from "react";
import ExperienceCard from "../../utils/ExperienceCard";
import marketin_1 from "../../assets/images/marketin_1.webp";
import marketin_2 from "../../assets/images/marketin_2.webp";
import marketin_3 from "../../assets/images/marketin_3.webp";
import marketin_4 from "../../assets/images/marketin_4.webp";

function ExperienceSection() {
  const data = {
    items: [
      {
        header: "Paid Ads",
        content:
          "We develop multi-level strategies to find new customers, capture their attention, and drive high converting traffic to your website.",
        image: marketin_1,
      },
      {
        header: "Content Creation",
        content:
          "Our in-house team creates high quality, scroll-stopping, conversion-focused content for your brand.",
        image: marketin_2,
      },
      {
        header: "CRO and Landing Page Optimization",
        content:
          "Maximize your site's potential with our CRO and landing page optimization. Using audience analysis and  journey optimization through AI, we increase conversion rates and user engagement.",
        image: marketin_4,
      },
      {
        header: "Email & SMS",
        content:
          "We help your emails reach more inboxes, increase open and click-through rates, and generate massive revenue.",
        image: marketin_3,
      },
    ],
  };

  return (
    <div id="about" className="experience mx-10 mt-24">
      <div className="experience_header flex justify-between mx-20 mb-10">
        <h1 className="text-3xl ">What We Do</h1>
        <button className="bg-white-500 hover:bg-slate-900 text-black hover:text-white font-bold py-2 rounded-full px-4 border border-slate-900">
          Our Services
        </button>
      </div>
      <div className="flex justify-between py-10">
        <ExperienceCard
          heading={data.items[0].header}
          content={data.items[0].content}
          image={marketin_1}
        />
        <ExperienceCard
          heading={data.items[1].header}
          content={data.items[1].content}
          image={marketin_2}
        />
        <ExperienceCard
          heading={data.items[2].header}
          content={data.items[2].content}
          image={marketin_3}
        />
        <ExperienceCard
          heading={data.items[3].header}
          content={data.items[3].content}
          image={marketin_4}
        />
      </div>
    </div>
  );
}

export default ExperienceSection;
