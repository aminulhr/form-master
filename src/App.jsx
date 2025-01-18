import Form from "./Form";
import HookForm from "./HookForm";
import Ref_Form from "./Ref_Form";
import ReUsableForm from "./ReUsableForm";

const App = () => {
  const handleSignUpSubmit = (data) => {
    console.log("Sign UP Data", data);
  };
  const handleUpdataProfile = (data) => {
    console.log("Updata Profile Data", data);
  };
  return (
    <div>
      <div>
        <div className="flex ml-8 gap-3">
          <Form />
          <Ref_Form />
          <HookForm />
          <ReUsableForm
            handleSubmit={handleSignUpSubmit}
            submitBtnText="Registration"
          >
            <div>
              <h2 className="bg-red-500 text-black text-md font-bold p-4 m-4 rounded-md w-55 text-2xl">
                Pleace Sign UP
              </h2>
            </div>
          </ReUsableForm>

          <ReUsableForm
            submitBtnText="updata"
            handleSubmit={handleUpdataProfile}
          >
            <div>
              <h2 className="bg-red-500 text-black text-md font-bold p-4 m-4 rounded-md w-55 text-2xl">
                updata Profile
              </h2>
            </div>
          </ReUsableForm>
        </div>
      </div>
    </div>
  );
};

export default App;
