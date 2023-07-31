import React from "react";

const CodeComponent = ({ attributes }) => {
  const { content } = attributes;
  return (
    <div className="border border-neutral-400 border-dashed p-2 mb-4">
      <pre>
        <code className="bg-neutral-100 px-2">{content}</code>
      </pre>
    </div>
  );
};

export default CodeComponent;
