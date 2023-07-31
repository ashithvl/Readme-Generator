import React, { useState } from "react";

const BlockquoteComponent = () => {
  const [blockQuote, setBlockQuote] = useState([
    "This is a blockquote",
    "This is a blockquote 2",
  ]);

  return (
    <div className="border border-neutral-400 border-dashed p-2 mb-4">
      {blockQuote.map((quote) => {
        return (
          <blockquote className="border-l-2 border-l-neutral-400 pl-2">
            {quote}
          </blockquote>
        );
      })}
    </div>
  );
};

export default BlockquoteComponent;
