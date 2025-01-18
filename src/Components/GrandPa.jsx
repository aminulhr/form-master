import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import "./grandpa.css";
import Uncle from "./Uncle";
export const GiftContext = createContext("Ring");
const GrandPa = () => {
  return (
    <div className="grandpa text-yellow-200">
      <h1 className="text-2xl text-center font-extrabold">Grandpa</h1>
      <GiftContext.Provider value="Ring">
        <section className="flex">
          <Dad />
          <Uncle />
          <Aunty />
        </section>
      </GiftContext.Provider>
    </div>
  );
};

export default GrandPa;
