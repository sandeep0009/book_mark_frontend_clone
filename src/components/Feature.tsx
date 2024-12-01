import React, { useState } from "react";
import { feature } from "../helper/feature";

const Feature = () => {
  const [activeFeature, setActiveFeature] = useState(feature[0]);

  const handleFeatureClick = (id) => {
    const selectedFeature = feature.find((item) => item.id === id);
    setActiveFeature(selectedFeature);
  };

  return (
    <div>
      <div className="text-center">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      <div>
        <ul className="flex gap-10 justify-center">
          {feature.map((item) => (
            <li
              key={item.id}
              className={`text-gray-600 hover:text-red-400 cursor-pointer ${
                activeFeature.id === item.id ? "text-red-400 font-bold" : ""
              }`}
              onClick={() => handleFeatureClick(item.id)}
            >
              {item.heading}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <img src={activeFeature.src} alt={activeFeature.heading} className="mx-auto" />
        <h3 className="text-2xl font-semibold mt-4">{activeFeature.heading}</h3>
        <p className="mt-2 text-gray-600">{activeFeature.para}</p>
      </div>
    </div>
  );
};

export default Feature;
