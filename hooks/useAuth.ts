import { User, userState } from "@/store/atoms/authState";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import axios from "axios";

const useAuth = () => {
  const setUser = useSetRecoilState(userState);
  const supabase = createClient();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          const user = session.user;
          setUser(user as User);

          try {
            await axios.post("/api/auth/", user, {
              headers: {
                "Content-Type": "application/json",
              },
            });
          } catch (error) {
            console.error("Error handling user: ", error);
          }
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser]);

  return null; // No UI needed for this hook
};

export default useAuth;
