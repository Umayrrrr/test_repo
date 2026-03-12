-- Ensure users can see their own rows (required for update to work)
CREATE POLICY "Enable read for users based on user_id" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Ensure users can update their own rows
CREATE POLICY "Enable update for users based on user_id" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id) 
WITH CHECK (auth.uid() = id);

-- Ensure a row exists to update (if you haven't created one yet)
CREATE POLICY "Enable insert for users" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

-- This allows the app to read the scores back from the table
CREATE POLICY "Users can view their own scores" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Allow users to read their own scores
CREATE POLICY "Users can select own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);
