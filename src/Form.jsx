const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.number.value);
    console.log("Form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="bg-yellow-100 text-black text-2xl font-bold p-4 m-4 rounded-md">
          Fill in the Form
        </h1>
        <input
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="text"
          name="name"
        />{" "}
        <br />
        <input
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="email"
          name="email"
        />{" "}
        <br />
        <input
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="number"
          name="number"
        />{" "}
        <br />
        <input
          className="bg-gray-100 text-black p-4 m-4 rounded-md"
          type="submit"
          value="Submit Form"
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default Form;
