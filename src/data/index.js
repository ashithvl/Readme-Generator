import { H_LEVELS, L_LEVELS, TYPES } from "../constants";

const builder = [
  {
    order: 1,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: H_LEVELS.H1,
    link: {
      url: "https://www.forzotechlabs.com",
      alt: "Forzo Website",
    },
  },
  {
    order: 2,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: H_LEVELS.H2,
    link: null,
  },
  {
    order: 3,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: H_LEVELS.H3,
    link: null,
  },
  {
    order: 4,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: H_LEVELS.H4,
    link: null,
  },
  {
    order: 5,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: H_LEVELS.H5,
    link: null,
  },
  {
    order: 6,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: H_LEVELS.H6,
    link: null,
  },
  {
    order: 7,
    type: TYPES.LIST,
    content: [
      { item: "List One Unordered", nested: null },
      { item: "List Two Unordered", nested: null },
    ],
    level: L_LEVELS.ORDERED,
    link: null,
  },
  {
    order: 8,
    type: TYPES.LIST,
    content: [
      { item: "List One ordered", nested: null },
      { item: "List Two ordered", nested: null },
    ],
    level: L_LEVELS.UN_ORDERED,
    link: null,
  },
  {
    order: 10,
    type: TYPES.LIST,
    content: [
      {
        item: "List One nested ordered",
        nested: {
          content: [
            { item: "List One ordered", nested: null },
            {
              item: "List Two ordered",
              nested: {
                content: [
                  { item: "List One ordered", nested: null },
                  { item: "List Two ordered", nested: null },
                ],
                level: L_LEVELS.ORDERED,
              },
            },
          ],
          level: L_LEVELS.ORDERED,
        },
      },
      { item: "List Two ordered", nested: null },
    ],
    level: L_LEVELS.UN_ORDERED,
    link: null,
  },
  {
    order: 11,
    type: TYPES.DIVIDER,
    content: null,
    level: null,
    link: null,
  },
  {
    order: 12,
    type: TYPES.BLOCKQUOTE,
    content: "This is a blockquote",
    level: null,
    link: null,
  },
  {
    order: 13,
    type: TYPES.CODE,
    content: "npm i react-icons",
    level: 0,
    markup: null,
    link: null,
  },
  {
    order: 14,
    type: TYPES.CODE,
    content: `import React from "react";

  const CodeComponent = ({ attributes }) => {
    const { content } = attributes;
      return (
        <div className="border border-neutral-400 border-dashed p-2 mb-4">
          <pre>
            <code className="bg-neutral-100 px-2">{content}</code>
          </pre>
        </div>
      );
    };
    
  export default CodeComponent;`,
    level: 0,
    markup: null,
    link: null,
  },
  {
    order: 70,
    type: TYPES.PARAGRAPH,
    content: "This is a paragraph with links",
    level: 0,
    markup: null,
    link: {
      url: "https://www.forzotechlabs.com",
      alt: "Forzo Website",
    },
  },
  {
    order: 80,
    type: TYPES.PARAGRAPH,
    content: "This is a paragraph",
    level: 0,
    markup: null,
    link: null,
  },
];

export default builder;
