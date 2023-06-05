import React from "react";
import TopBarComponent from "./TopBar.component";

const WorkAreaComponent = () => {
  return (
    <div className="flex flex-col h-full">
      <TopBarComponent />
      <div className="flex-1 border border-neutral-300 rounded-sm m-4 overflow-y-scroll no-scrollbar"></div>
    </div>
  );
};

export default WorkAreaComponent;
