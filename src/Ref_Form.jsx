import { useRef } from "react";

const Ref_Form = () => {
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const passwordRef = useRef(null);

  const handleUncontrolledForm = (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(numberRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div className="w-64 border-2 border-yellow-200 mt-4 rounded-md">
      <h1 className="bg-purple-500 text-black  font-bold p-1 m-1 rounded-md w-max">
        Uncontrolled Form with <br /> React useRef Hooks
      </h1>
      <div>
        <form onSubmit={handleUncontrolledForm} className="flex flex-col ">
          <br />
          <input
            placeholder="Email"
            type="email"
            name="email"
            ref={emailRef}
            className="bg-gray-100 text-black p-1 m-1 rounded-md"
          />
          <br />
          <input
            placeholder="Phone"
            type="number"
            name="Phone"
            ref={numberRef}
            className="bg-gray-100 text-black p-1 m-1 rounded-md"
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            name="password"
            ref={passwordRef}
            className="bg-gray-100 text-black p-1 m-1 rounded-md"
          />
          <br />
          <input
            className="bg-blue-600 text-white p-1 m-1 rounded-md font-bold hover:bg-blue-800"
            type="submit"
            value="Submit Uncontrolled Form"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Ref_Form;
