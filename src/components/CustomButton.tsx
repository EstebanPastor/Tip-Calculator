import { useState, type ChangeEvent } from "react";
import { useCalculatoreStore } from "../store/Calculator.store";

const CustomButton = () => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [buttonLabel, setButtonLabel] = useState<string>("Custom");

  const store = useCalculatoreStore();

  const handleClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    const decimalRegexp = /^\d*\.?\d*$/;

    const isValid = decimalRegexp.test(currentValue);

    if (!isValid) return;

    setInputValue(currentValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setNewValue(e.currentTarget.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNewValue(e.currentTarget.value);
    }
  };

  const setNewValue = (newValue: string) => {
    store.setTip(Number(newValue));
    setButtonLabel(`${newValue}%`);
    setIsEditable(false);
  };

  return (
    <>
      {isEditable ? (
        <input
          onKeyDown={handleEnter}
          onBlur={handleBlur}
          onChange={handleChange}
          autoFocus
          value={inputValue}
          type="text"
          className="focus:outline-Green-400 p-2 text-right caret-Green-400 text-Green-900 font-bold text-2xl"
        />
      ) : (
        <button
          className="flex items-center justify-center text-2xl font-bold bg-Green-200 rounded-[5px] cursor-pointer hover:bg-grey-100 text-Grey-100 hover:text-Grey-400"
          onClick={handleClick}
        >
          {buttonLabel}
        </button>
      )}
    </>
  );
};

export default CustomButton;
