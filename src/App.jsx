import AllForm from "./AllForm";
import GrandPa from "./Components/GrandPa";
const App = () => {
  return (
    <div>
      <AllForm />
      <h1 className="text-2xl text-center font-extrabold text-yellow-500 underline">
        use Context API to avoid Prop drilling
      </h1>
      <GrandPa />
    </div>
  );
};

export default App;
