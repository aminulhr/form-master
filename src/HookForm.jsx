import useInputState from "./useInputState";

const HookForm = () => {
  const [name, handleChange] = useInputState("45 day challenge");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" /> <br />
        <input type="email" name="email" /> <br />
        <input type="password" name="password" /> <br />
      </form>
    </div>
  );
};

export default HookForm;
