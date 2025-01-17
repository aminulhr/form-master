import Form from "./Form";
import HookForm from "./HookForm";
import Ref_Form from "./Ref_Form";

const App = () => {
  return (
    <div className="flex  w-max ml-8">
      <Form />
      <Ref_Form />
      <HookForm />
    </div>
  );
};

export default App;
