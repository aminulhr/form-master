import { useContext } from "react";
import { GiftContext } from "./GrandPa";

const Spatial = () => {
  const gift = useContext(GiftContext);
  return (
    <div>
      <h1>Spatial</h1>
      <p>Has:{gift}</p>
    </div>
  );
};

export default Spatial;
