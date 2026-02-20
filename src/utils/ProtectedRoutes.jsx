import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { supabase } from "../supabase-client";

const ProtectedRoutes = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session === undefined) return null;

  return session ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
