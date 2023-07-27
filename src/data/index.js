import { TYPES } from "../constants";

const builder = [
  {
    order: 1,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: 1,
    markup: "#",
    link: {
      url: "https://www.forzotechlabs.com",
      alt: "Forzo Website",
    },
  },
  {
    order: 2,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: 2,
    markup: "##",
    link: null,
  },
  {
    order: 3,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: 3,
    markup: "###",
    link: null,
  },
  {
    order: 4,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: 4,
    markup: "####",
    link: null,
  },
  {
    order: 5,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: 5,
    markup: "#####",
    link: null,
  },
  {
    order: 6,
    type: TYPES.HEADING,
    content: "This is a heading",
    level: 6,
    markup: "######",
    link: null,
  },
  {
    order: 7,
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
    order: 8,
    type: TYPES.PARAGRAPH,
    content: "This is a paragraph",
    level: 0,
    markup: null,
    link: null,
  },
];

export default builder;
