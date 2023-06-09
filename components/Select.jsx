"use client";

import clsx from "clsx";
import { useState } from "react";

const Select = ({ label, options, disabled, name, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="z-[100]">
      <label
        className="
        block 
        sm:text-[16px] 
        text-sm
        font-medium 
        text-gray-900
      "
      >
        {label}
      </label>
      <div className="mt-[5px]">
        <select
          disabled={disabled}
          name={name}
          id={name}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className={clsx(
            `
              block 
              w-full 
              rounded-[5px] 
              py-[8px]
              px-[12px]
              sm:py-[10.5px]
              sm:px-[15px]
              text-black
              border-1
              border
              bg-primary-lightred 
              border-primary-gray 
              placeholder:text-gray-400 
              focus:bg-white
              focus:outline-none
              focus:ring-transparent
              text-sm
              sm:text-md 
            `,
            disabled && "opacity-50 cursor-default"
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
