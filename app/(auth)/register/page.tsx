import SignupForm from "@/components/SignupForm";

const RegisterPage = () => {
  return (
    <div className=" flex justify-center items-center flex-col h-screen">
      <div className=" font-bold text-4xl m-8">
        <h1 className=" flex justify-center">Welcome To</h1>
        <h1 className="">Freelancers Hub</h1>
      </div>
      <SignupForm />
    </div>
  );
};

export default RegisterPage;
