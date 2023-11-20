const SelectComponent = ({ label, value, onChange, options = [] }) => {
  return (
    <div className="relative">
      <p className="pt-0 pr-1 pb-2 pl-1 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
        {label}
      </p>

      <select
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white  border-gray-300 rounded-md"
      >
        {options && options.length ? (
          options?.map((optionItem) => (
            <option id={optionItem.id} value={optionItem.id} key={optionItem.id}>
              {optionItem.label}
            </option>
          ))
        ) : (
          <option id="" value={""}>
            Select
          </option>
        )}
      </select>
    </div>
  );
};

export default SelectComponent;
