const ReUsableForm = ({ handleSubmit, submitBtnText = "submit", children }) => {
  const handlelocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div className="w-64 border-2 border-yellow-200 mt-4 mb-4 rounded-md">
      <h1 className="bg-lime-500 text-black text-md font-bold p-4 m-4 rounded-md w-55 text-2xl  ">
        Re-usable Form
      </h1>
      {children}
      <form onSubmit={handlelocalSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
        />{" "}
        <br />
        <input
          className="bg-blue-600 items-center justify-center align-  text-white p-4 m-4 rounded-md font-bold hover:bg-blue-800 "
          type="submit"
          value={submitBtnText}
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default ReUsableForm;
