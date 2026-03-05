
DROP TABLE IF EXISTS public.feedback_messages;

CREATE TABLE public.feedback_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  feedback_id bigint REFERENCES public.feedbacks(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id),
  content text NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'user')),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_messages_feedback_id ON public.feedback_messages(feedback_id);
