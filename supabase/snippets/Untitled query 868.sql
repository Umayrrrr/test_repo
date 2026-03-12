-- 1. Enable RLS on the table (if not already done)
ALTER TABLE todolist ENABLE ROW LEVEL SECURITY;

-- 2. Create the Update policy
CREATE POLICY "Users can update their own todos" 
ON todolist 
FOR UPDATE 
TO authenticated 
USING ( (SELECT auth.uid()) = user_id )
WITH CHECK ( (SELECT auth.uid()) = user_id );
