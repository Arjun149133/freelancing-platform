import Bio from "./Bio";
import Education from "./Education";
import Portfolio from "./Portfolio";
import ProfileCard from "./ProfileCard";
import WorkHistory from "./WorkHistory";

const CompleteProfile = () => {
  return (
    <div className=" border border-slate-300 rounded-lg my-8">
      <ProfileCard />
      <Bio />
      <WorkHistory />
      <Portfolio />
      <Education />
    </div>
  );
};

export default CompleteProfile;
