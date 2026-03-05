-- 1. Create a table for the feedback threads
CREATE TABLE feedback_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  subject TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create a table for individual messages
CREATE TABLE feedback_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID REFERENCES feedback_threads ON DELETE CASCADE,
  sender_id UUID REFERENCES auth.users NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable Realtime for the messages table
ALTER TABLE feedback_messages REPLICA IDENTITY FULL;
