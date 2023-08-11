import React from "react";
import { L_LEVELS } from "../../constants";
import SectionContainer from "../Section.container";

const ListComponent = ({ attributes }) => {
  const { content, level, order } = attributes;

  const ListItem = ({ type, content }) => {
    return (
      <div>
        {type === L_LEVELS.UN_ORDERED && (
          <ul className="list-decimal pl-4">
            {content.map((item, index) => {
              return (
                <li key={index}>
                  {item.item}
                  <NestedList nestedContent={item.nested} nestedLevel={1} />
                </li>
              );
            })}
          </ul>
        )}
        {type === L_LEVELS.ORDERED && (
          <ol className="list-[disc] pl-4">
            {content.map((item, index) => {
              return (
                <li key={index}>
                  {item.item}
                  <NestedList nestedContent={item.nested} nestedLevel={1} />
                </li>
              );
            })}
          </ol>
        )}
      </div>
    );
  };

  const NestedList = ({ nestedContent, nestedLevel }) => {
    if (!nestedContent || nestedLevel > 3) return null;

    return (
      <ul className="list-disc pl-4">
        {nestedContent.content.map((nestedItem, index) => (
          <li key={index}>
            {nestedItem.item}
            <NestedList
              nestedContent={nestedItem.nested}
              nestedLevel={nestedLevel + 1}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <SectionContainer>
      <ListItem key={order} type={level} content={content}></ListItem>
    </SectionContainer>
  );
};

export default ListComponent;
