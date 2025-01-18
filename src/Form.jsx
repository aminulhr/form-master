import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError(alert("Password must be at least 6 characters long"));
    } else {
      setError("");
      console.log(name, email, password, error);
    }
  };
  return (
    <div className=" w-64 border-2 border-yellow-200 mt-4  rounded-md ">
      <h1 className="bg-green-400 text-black text-md font-bold p-2 m-2 rounded-md w-max">
        Controled Form with <br /> React useState Hooks
      </h1>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-col  ">
          <input
            placeholder="Name"
            onChange={handelName}
            className="bg-gray-100 text-black p-1 m-1 rounded-md"
            type="text"
            name="name"
          />{" "}
          <br />
          <input
            placeholder="Email"
            onChange={handelEmail}
            className="bg-gray-100 text-black p-1 m-1 rounded-md"
            type="email"
            name="email"
          />{" "}
          <br />
          <input
            placeholder="Password"
            onChange={handelPassword}
            className="bg-gray-100 text-black p-1 m-1 rounded-md"
            type="password"
            name="password"
            required
          />{" "}
          <br />
          <input
            className="bg-blue-600 text-white p-1 m-1 rounded-md font-bold hover:bg-blue-800 "
            type="submit"
            value="Submit Controled Form"
          />{" "}
          <br />
          {error && (
            <p className="text-3lx text-red-500" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
