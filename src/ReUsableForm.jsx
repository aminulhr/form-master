const ReUsableForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-64 border-2 border-yellow-200 mt-4 mb-4 rounded-md">
      <h1 className="bg-lime-500 text-black text-md font-bold p-4 m-4 rounded-md w-max">
        Re-usable Form
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
        />{" "}
        <br />
        <input
          className="bg-blue-600 text-white p-4 m-4 rounded-md font-bold hover:bg-blue-800 "
          type="submit"
          value="Submit Reusable Form"
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default ReUsableForm;
