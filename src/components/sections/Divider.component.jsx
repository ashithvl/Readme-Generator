import React from "react";
import SectionContainer from "../Section.container";

const DividerComponent = () => {
  return (
    <SectionContainer className="p-4">
      <div className="h-px bg-neutral-400 w-full"></div>
    </SectionContainer>
  );
};

export default DividerComponent;
