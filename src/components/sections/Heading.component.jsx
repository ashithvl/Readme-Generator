import React, { useEffect, useState } from "react";

import { MdOutlineDelete } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { H_LEVELS } from "../../constants";

const INITIAL_STATE = { url: null, alt: null, isValid: false };

const HeadingComponent = ({ attributes }) => {
  const { content, level, link } = attributes;

  const [isLinkActivated, setLinkActivated] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);

  const style = () => {
    let headingStyle = "";
    switch (level) {
      case 1:
        headingStyle += `text-5xl`;
        break;
      case 2:
        headingStyle += `text-4xl`;
        break;
      case 3:
        headingStyle += `text-3xl`;
        break;
      case 4:
        headingStyle += `text-2xl`;
        break;
      case 5:
        headingStyle += `text-xl`;
        break;
      case 6:
        headingStyle += `text-lg`;
        break;
      default:
        break;
    }
    if (link && link.url) headingStyle += ` text-sky-600`;

    return headingStyle;
  };

  useEffect(() => {
    if (link && link.url) {
      setState({ ...link, isValid: true });
    }
  }, []);

  return (
    <div className="relative border border-neutral-400 border-dashed p-2 mb-4 ">
      <div className="absolute -right-3 text-red-500 top-2 rounded-full bg-white p-1">
        <MdOutlineDelete />
      </div>

      {isLinkActivated ? (
        <div className="absolute right-6 text-neutral-500 border border-neutral-300 -top-3 rounded bg-neutral-100 p-1 px-2 flex items-center">
          <input
            type="text"
            placeholder="Enter url"
            value={state.url}
            className={`px-1 text-xs w-40 bg-neutral-50 border border-neutral-300 mr-2 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent `}
          />
          <input
            type="text"
            placeholder="Enter alt"
            value={state.alt}
            className={`px-1 text-xs w-40 bg-neutral-50 border border-neutral-300 mr-2 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent `}
          />
          {state.isValid ? (
            <AiFillCheckCircle
              className="text-emerald-500"
              onClick={() => setLinkActivated(false)}
            />
          ) : (
            <AiFillCloseCircle
              className="text-red-500"
              onClick={() => {
                setLinkActivated(false);
                setState(INITIAL_STATE);
              }}
            />
          )}
        </div>
      ) : (
        <div className="absolute right-6 text-neutral-500 border border-neutral-300 -top-3 rounded bg-neutral-100 p-1 flex items-center text-xs cursor-default">
          {H_LEVELS.map((hLevel) => (
            <p
              key={hLevel.level}
              className={`px-1 hover:text-emerald-700 ${
                level === hLevel.level && "font-bold"
              }`}
            >
              {hLevel.name}
            </p>
          ))}
          <div
            className={`px-1 text-xs text-neutral-500 hover:text-emerald-700`}
          >
            <BiLinkAlt
              onClick={() => {
                setLinkActivated(true);
                setState({ url: link && link.url, alt: link && link.alt });
              }}
            />
          </div>
        </div>
      )}

      <p className={`${style()} `}>{content}</p>
    </div>
  );
};

export default HeadingComponent;
