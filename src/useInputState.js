import { useState } from "react";

const useInputState = (defaultValue = "") => {
  const [value, setvalue] = useState(defaultValue);
};
