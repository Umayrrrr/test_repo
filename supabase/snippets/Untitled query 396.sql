-- Create the messages table
CREATE TABLE feedback_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  feedback_id UUID REFERENCES feedbacks(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES auth.users(id),
  sender_role TEXT, -- 'admin' or 'user'
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE feedback_messages ENABLE ROW LEVEL SECURITY;
