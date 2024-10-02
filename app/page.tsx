"use client";
import WelcomePage from "@/components/welcomePage/WelcomePage";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";



const Home = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      console.log(user);
    };
    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user !== null) {
    redirect("/dashboard");
  }
  return (
    <div>
      <WelcomePage />
    </div>
  );
};

export default Home;
