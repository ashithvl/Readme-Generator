import React from "react";
import { HiOutlineShare } from "react-icons/hi";
import { FiDownload, FiEye } from "react-icons/fi";

const TopBarComponent = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full p-4 border border-t-0 border-r-0 border-l-0 border-neutral-300">
      <h2 className="bg-green-700 rounded p-2 text-neutral-50 text-sm cursor-pointer">
        DEV
      </h2>
      <div className="flex flex-row">
        <div className="mr-4 self-center cursor-pointer">
          <HiOutlineShare />
        </div>
        <div className="flex items-center p-2 text-neutral-50 mr-4 bg-green-600 rounded self-center cursor-pointer">
          <FiDownload /> <p className="ml-2">Download</p>
        </div>
        <div className="p-2 flex items-center text-neutral-50 bg-blue-500 rounded self-center cursor-pointer">
          <FiEye /> <p className="ml-2">Preview</p>
        </div>
      </div>
    </div>
  );
};

export default TopBarComponent;
