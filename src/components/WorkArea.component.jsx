import React from "react";
import TopBarComponent from "./TopBar.component";

import { TYPES } from "../constants";
import builders from "../data";
import HeadingComponent from "./sections/Heading.component";

const WorkAreaComponent = () => {
  return (
    <div className="flex flex-col h-full">
      <TopBarComponent />
      <div className="flex-1 border border-neutral-300 rounded-sm m-4 overflow-y-scroll no-scrollbar p-4">
        {builders.map((data) => {
          if (data.type === TYPES.HEADING) {
            return <HeadingComponent attributes={data} key={data.order} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WorkAreaComponent;
