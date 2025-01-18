import Aunty from "./Aunty";
import Dad from "./Dad";
import "./grandpa.css";
import Uncle from "./Uncle";
const GrandPa = () => {
  return (
    <div className="grandpa ">
      <h1 className="text-2xl text-center font-extrabold">Grandpa</h1>
      <section className="flex">
        <Dad />
        <Uncle />
        <Aunty />
      </section>
    </div>
  );
};

export default GrandPa;
