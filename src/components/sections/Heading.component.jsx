import React, { useEffect, useState } from "react";

import { MdOutlineDelete } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { H_LEVELS, H_OPTIONS } from "../../constants";
import SectionContainer from "../Section.container";

const INITIAL_STATE = { url: null, alt: null, isValid: false };

const HeadingComponent = ({ attributes }) => {
  const { content, level, link } = attributes;

  const [isLinkActivated, setLinkActivated] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);

  const style = () => {
    const headingStyles = {
      [H_LEVELS.H1]: "text-5xl",
      [H_LEVELS.H2]: "text-4xl",
      [H_LEVELS.H3]: "text-3xl",
      [H_LEVELS.H4]: "text-2xl",
      [H_LEVELS.H5]: "text-xl",
      [H_LEVELS.H6]: "text-lg",
    };
    let headingStyle = headingStyles[level] || "";
    if (link && link.url) headingStyle += ` text-sky-600`;
    return headingStyle;
  };

  useEffect(() => {
    if (link && link.url) {
      setState({ ...link, isValid: true });
    }
  }, []);

  return (
    <SectionContainer className="relative">
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
          {H_OPTIONS.map((hLevel) => (
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
    </SectionContainer>
  );
};

export default HeadingComponent;
