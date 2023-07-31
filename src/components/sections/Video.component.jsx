import React from "react";

const VideoComponent = () => {
  return (
    <div className="border border-neutral-400 border-dashed p-2 mb-4">
      <div className="h-60 bg-neutral-100 flex items-center justify-center">
        <div className="flex flex-row">
          <input
            type="text"
            className="border border-neutral-400 rounded-md py-2 pl-4 pr-20 w-96 text-sm"
            placeholder="Paste your Youtube or Vimeo video URL here"
          />
          <button
            type="button"
            className="bg-green-600 ml-2 py-2 px-8 rounded-md text-neutral-50"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
