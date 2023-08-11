import React from "react";
import SectionContainer from "../Section.container";

const BlockquoteComponent = ({ attributes }) => {
  const { content } = attributes;

  return (
    <SectionContainer>
      <p className="border-l-4 border-l-neutral-400 p-2">{content}</p>
    </SectionContainer>
  );
};

export default BlockquoteComponent;
