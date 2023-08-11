import React, { useState } from "react";

import { AiOutlineBold, AiOutlineItalic } from "react-icons/ai";
import { BsTextCenter } from "react-icons/bs";
import { MdOutlineDelete, MdSubscript, MdSuperscript } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { LuSmilePlus } from "react-icons/lu";
import SectionContainer from "../Section.container";

const Paragraphcomponent = ({ attributes }) => {
  const { content } = attributes;

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isCentered, setIsCentered] = useState(false);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleTeaxtCenter = () => {
    setIsCentered(!isCentered);
  };

  return (
    <SectionContainer>
      <div className="absolute -right-3 text-red-500 top-2 rounded-full bg-white p-1">
        <MdOutlineDelete />
      </div>
      <div className="absolute right-6 text-neutral-500 border border-neutral-300 -top-3 rounded bg-neutral-100 p-1 flex items-center space-x-2 text-xs cursor-default">
        <AiOutlineBold onClick={handleBoldClick} />
        <AiOutlineItalic onClick={handleItalicClick} />
        <BsTextCenter onClick={handleTeaxtCenter} />
        <MdSubscript />
        <MdSuperscript />
        <BiLinkAlt />
        <LuSmilePlus />
      </div>
      <p
        className={`${isBold ? "font-bold" : "normal"} ${
          isItalic ? "italic" : "normal"
        } ${isCentered ? "text-center" : ""}`}
      >
        {content}
      </p>
    </SectionContainer>
  );
};

export default Paragraphcomponent;
