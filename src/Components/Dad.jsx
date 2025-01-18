import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div>
      <h1 className="text-center">Dad</h1>
      <section className="flex">
        <Myself />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Dad;
