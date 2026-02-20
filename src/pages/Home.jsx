import { useEffect, useState } from "react";
import { supabase } from "../supabase-client";

export default function Home() {
  const [firstName, setFirstName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (user) {
          const { data, error: dbError } = await supabase
            .from("profiles")
            .select("first_name")
            .eq("id", user.id)
            .single();
          if (dbError) throw dbError;
          if (data) {
            setFirstName(data.first_name);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUserName();
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-full w-full z-50 absolute top-0 left-0">
      <h1 className="font-bold text-2xl">Welcome, {firstName}</h1>
    </div>
  );
}
