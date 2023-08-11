import React from "react";
import { LuImagePlus } from "react-icons/lu";

const ImageComponent = () => {
  return (
    <div className="border border-neutral-400 border-dashed p-2 mb-4">
      <form
        className="bg-neutral-100 h-60 flex flex-col items-center justify-center text-neutral-400"
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" hidden className="input-field" />
        <LuImagePlus className="w-10 h-12" />
        <label>Browse images from your computer</label>
      </form>
    </div>
  );
};

export default ImageComponent;
