import { createClient } from "@/utils/supabase/server";
import SignOut from "@/components/SignOut";
import Navbar from "@/components/navbar/Navbar";

const DashboardPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  // console.log(user);

  return (
    <div>
      <Navbar />
      DashboardPage, hello {user?.user_metadata?.full_name}
      <SignOut />
    </div>
  );
};

export default DashboardPage;
