import { createClient } from "@/utils/supabase/server";
import { useEffect } from "react";

const DashboardPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return <div>DashboardPage, hello {user?.user_metadata?.full_name} </div>;
};

export default DashboardPage;
