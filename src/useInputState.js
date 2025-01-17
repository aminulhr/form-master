import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setvalue] = useState(defaultValue);

  const onChange = (e) => {
    setvalue(e.target.value);
  };
  return {
    value,
    onChange,
  };
};
export default useInputState;
