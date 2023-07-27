import React from "react";

import { SECTIONS } from "../constants";

const SideBarComponent = () => {
  return (
    <div className="w-full py-4 pl-4 mt-16">
      {/* <p className="mb-4 text-green-600 text-lg font-light">Readme Generator</p> */}
      <div className="flex items-center">
        <p className="text-md font-light text-green-600">Sections</p>
        <hr className="flex-1 border-green-600 ml-4"></hr>
      </div>
      <div className="py-4 pr-4 flex flex-wrap gap-4">
        {SECTIONS.map((section) => (
          <div
            key={section.name}
            className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer"
          >
            <p className="w-20 flex justify-center text-2xl text-neutral-600 py-1">
              {section.icon}
            </p>
            <p className="text-sm font-light text-neutral-500">
              {section.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarComponent;
