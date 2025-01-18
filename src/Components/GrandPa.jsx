import { createContext, useState } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import "./grandpa.css";
import Uncle from "./Uncle";
export const GiftContext = createContext("Ring");
export const HadiaContext = createContext(500);
const GrandPa = () => {
  const [hadia, sethadia] = useState(500);
  return (
    <div className="grandpa text-yellow-200">
      <h1 className="text-2xl text-center font-extrabold">Grandpa</h1>
      <p className="text-center">Total Hadia: {hadia}</p>
      <HadiaContext.Provider value={[hadia, sethadia]}>
        <GiftContext.Provider value="Ring">
          <section className="flex">
            <Dad />
            <Uncle />
            <Aunty />
          </section>
        </GiftContext.Provider>
      </HadiaContext.Provider>
    </div>
  );
};

export default GrandPa;
