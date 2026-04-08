import { useState } from "react";
import {
  CustomSelectOption,
  CustomSelectOptionValues,
} from "../../typings/my-types";

export default function CustomSelect<T extends readonly CustomSelectOption[]>({
  selectTitle = "Change option",
  options,
  defaultOptionValue = options[0].value,
  onOptionSelect,
}: {
  selectTitle?: string;
  options: T;
  defaultOptionValue?: CustomSelectOptionValues<T>;
  onOptionSelect?: (option: CustomSelectOption) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CustomSelectOption>(
    options.find((option) => option.value === defaultOptionValue) || options[0],
  );

  const toggleSelect = () => {
    setIsActive(!isActive);
  };

  const selectOption = (option: CustomSelectOption) => {
    setSelectedOption(option);
    onOptionSelect?.(option);
    toggleSelect();
  };

  return (
    <div className="relative" title={selectTitle}>
      <div
        className="flex justify-center items-center gap-2 bg-gray-800 rounded-md p-2 cursor-pointer"
        onClick={toggleSelect}
      >
        {selectedOption.title}
      </div>
      {isActive && (
        <ul className="absolute top-12 bg-gray-800 w-25 flex flex-col justify-center items-center rounded-md">
          {options.map((option, index) => (
            <li
              key={option.id + option.title}
              className={`w-full flex justify-center items-center gap-2 hover:bg-gray-600 cursor-pointer ${selectedOption.id === option.id ? "bg-gray-700" : ""} ${index === 0 ? "rounded-t-md" : ""} ${index === options.length - 1 ? "rounded-b-md" : ""}`}
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
