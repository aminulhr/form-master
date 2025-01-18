import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h1>Aunty</h1>
      <section className="flex">
        <Cousin name={"Rifat"}></Cousin>
        <Cousin name={"Rotna"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
