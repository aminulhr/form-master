import { useContext } from "react";
import Cousin from "./Cousin";
import { HadiaContext } from "./GrandPa";

const Aunty = () => {
  const [hadia, sethadia] = useContext(HadiaContext);
  return (
    <div>
      <h1>Aunty</h1>
      <section className="flex">
        <Cousin name={"Rifat"}></Cousin>
        <Cousin name={"Rotna"}></Cousin>
      </section>
      <p>Hadia: {hadia}</p>
      <button
        className="bg-blue-400 p-2 m-2 rounded-md"
        onClick={() => sethadia(hadia + 500)}
      >
        Give More
      </button>
    </div>
  );
};

export default Aunty;
