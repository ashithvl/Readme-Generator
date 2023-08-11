import React from "react";
import TopBarComponent from "./TopBar.component";

import { TYPES } from "../constants";
import builder from "../data";
import HeadingComponent from "./sections/Heading.component";
import Paragraphcomponent from "./sections/Paragraph.component";
import DividerComponent from "./sections/Divider.component";
import ImageComponent from "./sections/Image.component";
import ListComponent from "./sections/List.component";
import CodeComponent from "./sections/Code.component";
import BlockquoteComponent from "./sections/Blockquote.component";
import TableComponent from "./sections/Table.component";
import VideoComponent from "./sections/Video.component";
import CheckListComponent from "./sections/CheckList.component";

const WorkAreaComponent = () => {
  return (
    <div className="flex flex-col h-full">
      <TopBarComponent />
      <div className="flex-1 border border-neutral-300 rounded-sm m-4 overflow-y-scroll no-scrollbar p-4">
        {builder.map((data) => {
          if (data.type === TYPES.HEADING) {
            return <HeadingComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.PARAGRAPH) {
            return <Paragraphcomponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.LIST) {
            return <ListComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.CHECK_LIST) {
            return <CheckListComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.IMAGE) {
            return <ImageComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.TABLE) {
            return <TableComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.DIVIDER) {
            return <DividerComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.CODE) {
            return <CodeComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.BLOCKQUOTE) {
            return <BlockquoteComponent attributes={data} key={data.order} />;
          } else if (data.type === TYPES.VIDEO) {
            return <VideoComponent attributes={data} key={data.order} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WorkAreaComponent;
