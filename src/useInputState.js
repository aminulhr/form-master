import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setvalue] = useState(defaultValue);

  const handleChange = (val) => {
    setvalue(val);
  };
  return [value, handleChange];
};
export default useInputState;
