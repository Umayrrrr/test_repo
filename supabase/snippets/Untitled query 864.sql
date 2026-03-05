-- 1. Create a function that bypasses RLS to check admin status
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Drop the old broken policy
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- 3. Apply the new safe policy
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  (SELECT is_admin()) -- Use the bypass function
  OR (auth.uid() = id) -- Users can always see themselves
);
