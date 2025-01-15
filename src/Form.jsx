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
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="bg-yellow-100 text-black text-2xl font-bold p-4 m-4 rounded-md">
          Fill in the Form
        </h1>
        <input
          onChange={handelName}
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="text"
          name="name"
        />{" "}
        <br />
        <input
          onChange={handelEmail}
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="email"
          name="email"
        />{" "}
        <br />
        <input
          onChange={handelPassword}
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="password"
          name="password"
          required
        />{" "}
        <br />
        <input
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="submit"
          value="Submit Form"
        />{" "}
        <br />
        {error && (
          <p className="text-3lx text-red-500" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
