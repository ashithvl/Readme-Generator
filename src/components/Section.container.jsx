import React from "react";

const SectionContainer = ({ children, className, ...props }) => {
  return (
    <div
      className={`border border-neutral-400 border-dashed p-2 mb-4 hover:border-green-400 text- ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
