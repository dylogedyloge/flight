import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const InputWithCloseButton = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleResetClick = () => {
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="px-4 py-2 pr-12 border border-gray-400 rounded-full"
      />
      {inputValue && (
        <button
          onClick={handleResetClick}
          className="transform -translate-y-1/2 focus:outline-none"
          style={{ backgroundColor: "red" }}
        >
          <AiOutlineClose className="text-gray-400 hover:text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default InputWithCloseButton;
