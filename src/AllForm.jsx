import Form from "./Form";
import HookForm from "./HookForm";
import Ref_Form from "./Ref_Form";
import ReUsableForm from "./ReUsableForm";

const AllForm = () => {
  const handleSignUpSubmit = (data) => {
    console.log("Sign UP Data", data);
  };
  const handleUpdataProfile = (data) => {
    console.log("Updata Profile Data", data);
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold text-yellow-500 underline">
        Form Master
      </h1>{" "}
      <div>
        <div className="flex  gap-2  ">
          <Form />
          <Ref_Form />
          <HookForm />
          <ReUsableForm
            handleSubmit={handleSignUpSubmit}
            submitBtnText="Registration"
          >
            <div>
              <h2 className="bg-red-500 text-black  font-bold p-1 m-1 rounded-md text-center">
                Pleace Sign UP
              </h2>
            </div>
          </ReUsableForm>

          <ReUsableForm
            submitBtnText="updata"
            handleSubmit={handleUpdataProfile}
          >
            <div>
              <h2 className="bg-red-500 text-black text-md font-bold p-2 m-2 rounded-md text-center">
                updata Profile
              </h2>
            </div>
          </ReUsableForm>
        </div>
      </div>
    </div>
  );
};

export default AllForm;
