import { useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import { ReplyIcon } from "lucide-react";
import LoaderComp from "../components/Loader";

export default function FeedbackChat() {
  const [userRole, setUserRole] = useState("user");
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (profile) setUserRole(profile.role);
      }
    };

    const init = async () => {
      await getUserRole();
      await fetchFeedbacks();
      setLoading(false);
    };
    init();
  }, []);

  const fetchFeedbacks = async () => {
    const { data, error } = await supabase
      .from("feedbacks")
      .select(
        `
      *,
      feedback_messages (
        id,
        content,
        role,
        created_at
      )
    `,
      )

      .order("created_at", {
        foreignTable: "feedback_messages",
        ascending: true,
      });

    if (!error) setFeedbackList(data || []);
  };

  const handleReplyAction = async (feedbackId) => {
    const replyInput = document.getElementById(`reply-input-${feedbackId}`);
    const replyText = replyInput.value;
    if (!replyText) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("feedback_messages").insert({
      feedback_id: feedbackId,
      user_id: user?.id,
      content: replyText,
      role: userRole,
    });

    if (!error) {
      replyInput.value = "";
      fetchFeedbacks();
    }
  };

  if (loading) return <LoaderComp />;

  return (
    <div className="w-full max-w-lg border-2 p-4 bg-white rounded-md mx-auto">
      <h3 className="font-bold border-b pb-2 mb-4">Feedback Chat</h3>
      <ul className="space-y-6">
        {feedbackList.map((f) => (
          <li
            key={f.id}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase text-gray-400">
                Feedback
              </span>
              <p className="text-sm font-bold ">{f.note}</p>
            </div>

            <div className="space-y-3 mb-4">
              {f.feedback_messages?.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-2 rounded-lg text-sm ${
                    msg.role === "admin" ? "bg-blue-100 ml-6" : "bg-white mr-6 "
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {msg.role === "admin" ? "Admin" : "You"}
                    </span>
                  </div>
                  <p className="text-gray-700">{msg.content}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2 border-t border-gray-100">
              <input
                id={`reply-input-${f.id}`}
                className="flex-1 border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
                placeholder="Type your reply..."
              />
              <button
                onClick={() => handleReplyAction(f.id)}
                className="bg-green-400 hover:bg-green-600 text-white p-2 rounded-md "
              >
                <ReplyIcon size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
