function Button({ children, back, front, text, w }) {
  return (
    <div
      style={{ width: w ? w : "fit-content" }}
      className=" h-12  border-2 border-transparent cursor-pointer relative overflow-hidden"
    >
      <a
        style={{
          background: front ? front : "rgb(0,151,156)",
          color: text ? text : "#000",
        }}
        className="font-semibold uppercase py-2 text-sm px-6 w-full inline-block text-center z-20 hover:mt-[3px] active:mt-[7px]"
      >
        {children}
      </a>
      <div
        style={{ background: back ? back : "#005C5F" }}
        className="w-full h-2 bg-black z-0"
      ></div>
    </div>
  );
}

export default Button;
