import React from "react";
import TopBarComponent from "./TopBar.component";

const WorkAreaComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="h-full">
        <TopBarComponent />
      </div>
      <div className="flex-1 border border-neutral-300 rounded-sm m-4">
        <p>H1</p>
      </div>
    </div>
  );
};

export default WorkAreaComponent;
