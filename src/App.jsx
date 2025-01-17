import Form from "./Form";
import HookForm from "./HookForm";
import Ref_Form from "./Ref_Form";
import ReUsableForm from "./ReUsableForm";

const App = () => {
  return (
    <div>
      <div className="flex ml-8 gap-3">
        <Form />
        <Ref_Form />
        <HookForm />
        <ReUsableForm />
      </div>
    </div>
  );
};

export default App;
