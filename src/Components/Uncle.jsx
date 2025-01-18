import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h1>Uncle</h1>
      <section className="flex">
        <Cousin name="Dihan"></Cousin>
        <Cousin name="Dina"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
