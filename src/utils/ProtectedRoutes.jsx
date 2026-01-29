import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { supabase } from "../supabase-client";

const ProtectedRoutes = () => {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);

      if (!session) {
        supabase.auth.signOut().then(() => {
          setSession(null);
        });
      }
    });
  }, []);

  if (session === undefined) return null;

  return session ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
