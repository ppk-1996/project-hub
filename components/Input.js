import { useState } from "react";

export default function Input({ label, name, type = "text" }) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="relative flex flex-col h-14 my-4 ">
      <input
        className="h-16 rounded-[6px] pt-6 px-4 pb-1 outline-none shadow-none lg:w-80
                  transition-shadow ease-out duration-200 
                  focus:shadow-[0_0_0_2px_#00979C]"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        name={name}
      />
      {value || isFocus ? (
        <label
          className="absolute pointer-events-none 
                  origin-top-left 
                   transition-transform ease-out duration-200 text-[#6f81a5] left-4 
                   translate-y-2 scale-75
                   "
          htmlFor={name}
        >
          {label}
          <span className="ml-1 text-red-500 font-semibold">*</span>
        </label>
      ) : (
        <label
          className="absolute pointer-events-none 
                    translate-y-4 scale-100 origin-top-left 
                    transition-transform ease-out duration-200 text-[#6f81a5] left-4
                    focus-within:translate-y-3 focus-within:text-[#0a53e4]
                    "
          htmlFor="username"
        >
          {label}
          <span className="ml-1 text-red-500 font-semibold">*</span>
        </label>
      )}
    </div>
  );
}
