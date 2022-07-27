import React, { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function AboutProject({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();
  if (inputRef.current) {
    console.log(inputRef.current.scrollHeight);
  }

  return (
    <div className="min-h-[5rem] my-8 bg-white p-4">
      <div
        onClick={() => setIsOpen((pre) => !pre)}
        className="flex justify-between items-center "
      >
        <div className="text-2xl font-semibold">About This Project</div>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      <div
        ref={inputRef}
        className="overflow-hidden ease-in-out duration-300"
        style={
          isOpen
            ? { height: inputRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <p className="mt-4">Project Content Markdown: {content}</p>
      </div>
    </div>
  );
}

export default AboutProject;
