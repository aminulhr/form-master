import { useContext } from "react";
import { GiftContext } from "./GrandPa";

const Sister = () => {
  const gift = useContext(GiftContext);
  return (
    <div>
      <h1>sister</h1>
      <p>Has: {gift}</p>
    </div>
  );
};

export default Sister;
