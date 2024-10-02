import { createClient } from "@/utils/supabase/server";
import SignOut from "@/components/SignOut";

const DashboardPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  // console.log(user);

  return (
    <div>
      DashboardPage, hello {user?.user_metadata?.full_name}
      <SignOut />
    </div>
  );
};

export default DashboardPage;
