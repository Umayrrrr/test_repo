-- Allow users to see only their own feedbacks, admins see all
CREATE POLICY "View feedbacks" ON feedbacks
FOR SELECT TO authenticated
USING (
  (SELECT auth.uid()) = user_id OR 
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Allow users to insert their own feedback
CREATE POLICY "Insert feedback" ON feedbacks
FOR INSERT TO authenticated
WITH CHECK ((SELECT auth.uid()) = user_id);

-- Specialized Update: Only allow updating specific reply columns
CREATE POLICY "Admin reply update" ON feedbacks
FOR UPDATE TO authenticated
USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'))
WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "User reply update" ON feedbacks
FOR UPDATE TO authenticated
USING ((SELECT auth.uid()) = user_id)
WITH CHECK ((SELECT auth.uid()) = user_id);


alter publication supabase_realtime add table feedbacks;


-- Set the default for all future rows
ALTER TABLE feedbacks 
ALTER COLUMN user_reply SET DEFAULT '[]'::jsonb,
ALTER COLUMN user_reply SET NOT NULL;

-- Backfill any existing NULL rows to empty arrays so your .map() doesn't fail
UPDATE feedbacks 
SET user_reply = '[]'::jsonb 
WHERE user_reply IS NULL;
