import { useState } from "react";
import { CustomSelectOption } from "../typings/my-types";

export default function CustomSelect({
  options,
}: {
  options: CustomSelectOption[];
}) {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CustomSelectOption>(
    options[0]
  );

  const toggleSelect = () => {
    setIsActive(!isActive);
  };

  const selectOption = (option: CustomSelectOption) => {
    setSelectedOption(option);
    toggleSelect();
  };

  return (
    <div className="relative" title="Change Language">
      <div
        className="flex justify-center items-center gap-2 bg-gray-800 rounded-md p-2 cursor-pointer"
        onClick={toggleSelect}
      >
        {selectedOption.title}
      </div>
      {isActive && (
        <ul className="absolute top-12">
          {options.map((option) => (
            <li
              key={option.id + option.title}
              className="flex justify-center items-center gap-2 hover:bg-zinc-700 cursor-pointer"
              onClick={() => selectOption(option)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
