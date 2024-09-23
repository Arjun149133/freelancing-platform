import SignupForm from "@/components/signup/SignupForm";

const RegisterPage = () => {
  return (
    <div className=" flex justify-center items-center flex-col h-screen">
      <div className=" font-bold text-4xl mb-4">
        <h1 className=" flex justify-center">Welcome To</h1>
        <h1 className="">Freelancers Hub</h1>
      </div>
      <SignupForm />
    </div>
  );
};

export default RegisterPage;
