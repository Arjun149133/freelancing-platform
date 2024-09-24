import RegisterButton from "./RegisterButton";

const WelcomeNav = () => {
  return (
    <nav className=" flex justify-between px-8 py-2 my-2 border-b border-slate-200 sticky">
      {/* logo */}
      <div>Freelancing platform</div>
      {/* searchbar */}
      <div>search</div>
      {/* pages */}
      <div>hello</div>
      {/* register */}
      <div>
        <RegisterButton />
      </div>
    </nav>
  );
};

export default WelcomeNav;
