import useInputState from "./useInputState";

const HookForm = () => {
  //   const [name, handleChange] = useInputState("45 day challenge");
  const emailState = useInputState("45Chalnge@gmail.com");
  const handleSubmit = (e) => {
    console.log(emailState.value);
    e.preventDefault();
  };
  return (
    <div className="w-64 border-2 border-yellow-200 mt-4 mb-4 rounded-md">
      <h1 className="bg-red-300 text-black text-md font-bold p-2 m-2 rounded-md w-max">
        Custom Hook From
      </h1>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          className="bg-gray-100 text-black p-2 m-2 rounded-md"
        />{" "}
        <br /> */}
        <input
          {...emailState}
          type="email"
          name="email"
          className="bg-gray-100 text-black p-2 m-2 rounded-md"
        />{" "}
        <br />
        <input
          className="bg-blue-600 text-white p-2 m-2 rounded-md font-bold hover:bg-blue-800 "
          type="submit"
          value="Submit Hook Form"
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default HookForm;
