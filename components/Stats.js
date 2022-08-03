function Stats({ num, label }) {
  return (
    <div className="flex items-end gap-1 font-semibold">
      <div className="leading-none text-md">{num}</div>
      <div
        className=" leading-none
text-xs uppercase"
      >
        {label}
      </div>
    </div>
  );
}

export default Stats;
