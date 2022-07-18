import { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";

function Tab() {
  const [isShow, setIsShow] = useState(false);
  const [select, setSelect] = useState("item2");

  const handleShow = () => setIsShow((pre) => !pre);
  const handleChange = (e) => {
    setSelect(e.target.innerText);
  };

  const shorten = (str) => {
    const strc = str;
    if (strc.length > 5) {
      return strc.slice(0, 5) + "...";
    }
  };

  const items = [
    "item1asfja;djkfa;ffk",
    "item2asfja;djkfa;ffk",
    "item3asfja;djkfa;ffk",
    "item4asfja;djkfa;ffk",
    "itme5asfja;djkfa;ffk",
    "item6asfja;djkfa;ffk",
    "item7asfja;djkfa;ffk",
    "item8asfja;djkfa;ffk",
    "item9asfja;djkfa;ffk",
    "itme10asfja;djkfa;ffk",
    "item11asfja;djkfa;ffk",
    "item12asfja;djkfa;ffk",
  ];

  return (
    <div className="cursor-pointer relative z-10">
      <div
        onClick={handleShow}
        style={{
          background: `${isShow ? "white" : ""}`,
          border: `${isShow ? "2px solid #d4d9d9" : ""}`,
          borderBottom: `${isShow ? "0px solid #eef2f2" : ""}`,
        }}
        className="bg-white max-w-fit p-1 px-3 flex items-center gap-x-2 hover:bg-maindark h-8 "
      >
        <span>{shorten(select) || "Heading"}</span>
        {isShow ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      <div
        style={{ display: `${isShow ? "block" : ""}` }}
        className="hidden absolute border-2 border-inherit bg-mainlight  pt-1 text-sm max-h-[300px] overflow-scroll"
      >
        {items.map((el, idx) => {
          return (
            <div
              style={{ background: `${select === el ? "#d4d9d9" : ""}` }}
              onClick={handleChange}
              className="p-1 w-64 hover:bg-maindark"
              key={idx}
            >
              {el}{" "}
              {select === el && <AiOutlineCheck className=" float-right" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tab;
