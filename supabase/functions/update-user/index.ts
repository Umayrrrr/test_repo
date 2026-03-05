import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response("ok", { headers: corsHeaders });

  try {
    const supabaseAdmin = createClient(
      "http://kong:8000",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU",
    );

    const { userId, email, first_name, role } = await req.json();

    // 1. Update Auth.Users (Email & Metadata)
    const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(
      userId,
      {
        email: email,
        user_metadata: { first_name, role },
        email_confirm: true, // Force confirmation so the email changes immediately
      },
    );

    // 2. Update Public.Profiles (Your custom table)
    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .update({ first_name, email, role })
      .eq("id", userId);

    if (profileError) throw profileError;

    return new Response(
      JSON.stringify({ message: "User updated in Auth and Profiles" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
