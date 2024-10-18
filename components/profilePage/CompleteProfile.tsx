import Bio from "./Bio";
import ProfileCard from "./ProfileCard";

const CompleteProfile = () => {
  return (
    <div className=" border border-slate-300 rounded-lg">
      <ProfileCard />
      <Bio />
    </div>
  );
};

export default CompleteProfile;
