import { FaList } from "react-icons/fa";
import { MdOutlineListAlt, MdCode } from "react-icons/md";
import { RiTableLine, RiHeading } from "react-icons/ri";
import { BiImageAlt } from "react-icons/bi";
import { RxDividerHorizontal } from "react-icons/rx";
import { BsBlockquoteLeft } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";
import { TfiParagraph } from "react-icons/tfi";

const sections = [
  { name: "Heading", icon: <RiHeading /> },
  { name: "Paragraph", icon: <TfiParagraph /> },
  { name: "List", icon: <FaList /> },
  { name: "CheckList", icon: <MdOutlineListAlt /> },
  { name: "Image", icon: <BiImageAlt /> },
  { name: "Table", icon: <RiTableLine /> },
  { name: "Divider", icon: <RxDividerHorizontal /> },
  { name: "Code", icon: <MdCode /> },
  { name: "Blockquote", icon: <BsBlockquoteLeft /> },
  { name: "Video", icon: <RxVideo /> },
  // { name: "Badge", icon: <TfiParagraph /> },
];

export default sections;
