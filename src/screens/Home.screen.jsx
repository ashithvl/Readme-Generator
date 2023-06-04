import React from "react";
import SideBarComponent from "../components/SideBar.component";
import WorkAreaComponent from "../components/WorkArea.component";

const HomeScreen = () => {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="w-72 border border-t-0 border-b-0 border-l-0 border-neutral-300">
        <SideBarComponent />
      </div>
      <div className="w-full h-full">
        <WorkAreaComponent />
      </div>
    </div>
  );
};

export default HomeScreen;
