type FilterProps = {
  items: { label: string; value: string }[];
  active?: string;
  onChange: (item: { label: string; value: string }) => void;
};

const Filter: React.FC<FilterProps> = (props) => {
  const { items, active = "all", onChange } = props;
  const withAll = [{ label: "All", value: "all" }, ...items];
  return (
    <div className="flex items-center container  mx-auto my-12 flex-col lg:flex-row flex-wrap">
      <span className=" text-2xl font-bold">Filter:</span>
      {withAll.map((i) => (
        <button
          onClick={() => onChange(i)}
          className={`uppercase text-base whitespace-nowrap border-2 border-black py-1 px-3 rounded-full first:ml-0 ml-2 mb-2 ${
            active === i.value ? "text-white bg-black" : ""
          }`}
          key={i.value}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
