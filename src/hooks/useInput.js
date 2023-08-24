import { useState } from "react";
export const useInput = (initialValue, validate) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const invalid = isFocused && !validate(value);
  return { value, onChange, invalid, setIsFocused };
};
