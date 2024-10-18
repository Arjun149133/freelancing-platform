import Certificates from "./Certificates";
import CompleteProfile from "./CompleteProfile";
import EmploymentHistory from "./EmploymentHistory";

export const ProfilePage = () => {
  return (
    <div>
      <CompleteProfile />
      <EmploymentHistory />
      <Certificates />
    </div>
  );
};
