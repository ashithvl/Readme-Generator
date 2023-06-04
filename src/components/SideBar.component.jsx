import React from "react";

import { FaList } from "react-icons/fa";
import { MdOutlineListAlt, MdCode } from "react-icons/md";
import { RiTableLine } from "react-icons/ri";
import { BiImageAlt } from "react-icons/bi";
import { RxDividerHorizontal } from "react-icons/rx";
import { BsBlockquoteLeft } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";

const SideBarComponent = () => {
  return (
    <div className="w-full py-4 pl-4 mt-16">
      {/* <p className="mb-4 text-green-600 text-lg font-light">Readme Generator</p> */}
      <div className="flex items-center">
        <p className="text-md font-light text-green-600">Sections</p>
        <hr className="flex-1 border-green-600 ml-4"></hr>
      </div>
      <div className="py-4 pr-4">
        <div className="flex flex-row gap-4">
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-4xl text-neutral-700">H</p>
            <p className="text-sm font-light text-neutral-500">Heading</p>
          </div>
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-4xl text-neutral-700">P</p>
            <p className="text-sm font-light text-neutral-500">Paragraph</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-1xl text-neutral-700 py-1">
              <FaList />
            </p>
            <p className="text-sm font-light text-neutral-500">List</p>
          </div>
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">
              <MdOutlineListAlt />
            </p>
            <p className="text-sm font-light text-neutral-500">Checklist</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">
              <BiImageAlt />
            </p>
            <p className="text-sm font-light text-neutral-500">Image</p>
          </div>
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">
              <RiTableLine />
            </p>
            <p className="text-sm font-light text-neutral-500">Table</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">
              <RxDividerHorizontal />
            </p>
            <p className="text-sm font-light text-neutral-500">Divider</p>
          </div>
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">
              <MdCode />
            </p>
            <p className="text-sm font-light text-neutral-500">Code</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">
              <BsBlockquoteLeft />
            </p>
            <p className="text-sm font-light text-neutral-500">Blockquote</p>
          </div>
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">
              <RxVideo />
            </p>
            <p className="text-sm font-light text-neutral-500">Video</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center cursor-pointer">
            <p className="text-2xl text-neutral-700 py-1">B</p>
            <p className="text-sm font-light text-neutral-500">Badge</p>
          </div>
          <div className="flex-1 flex flex-col border rounded-sm p-1 py-2 items-center justify-center invisible">
            {/* <p className="text-2xl text-neutral-700 py-1">P</p>
            <p className="text-sm font-light text-neutral-500">Paragraph</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
