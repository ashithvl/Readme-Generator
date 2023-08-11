import React from "react";
import SectionContainer from "../Section.container";

const CodeComponent = ({ attributes }) => {
  const { content } = attributes;
  return (
    <SectionContainer>
      <pre className="bg-neutral-100 p-2 rounded">
        <p className="bg-neutral-100 px-2 rounded">{content}</p>
      </pre>
    </SectionContainer>
  );
};

export default CodeComponent;
