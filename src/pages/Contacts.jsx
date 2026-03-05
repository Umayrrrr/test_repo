import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import LoaderComp from "../components/Loader";
import { redirect } from "react-router";
import { useNavigate } from "react-router";
import { ReplyIcon } from "lucide-react";

export default function Contacts() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("user");
  const [feedbackList, setFeedbackList] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const handleUserClick = () => {
    navigate("/FeedbackChat");
  };

  const fetchFeedbacks = async () => {
    const { data, error } = await supabase.from("feedbacks").select("*");
    if (!error) setFeedbackList(data || []);
  };

  const onSubmit = async (data) => {
    const { error } = await supabase.from("feedbacks").insert({
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      note: data.note,
    });

    if (!error) {
      reset();
      fetchFeedbacks();
    }
  };

  const handleReply = async (feedback, feedbackId) => {
    const replyInput = document.getElementById(`reply-input-${feedbackId}`);
    const replyText = replyInput.value;

    if (!replyText) return;

    const currentReplies = [].concat(feedback.admin_reply || []);

    const updatedReplies = [...currentReplies, replyText];

    const { error } = await supabase
      .from("feedbacks")
      .update({ admin_reply: updatedReplies })
      .eq("id", feedbackId);

    if (!error) {
      replyInput.value = "";
      fetchFeedbacks();
    }
  };

  if (loading) return <LoaderComp />;

  return (
    <div className="py-5 contacts">
      <div className="flex flex-col items-center h-full">
        {userRole !== "admin" && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap w-full max-w-lg border-2 p-4 bg-gray-200 rounded-md mb-5"
          >
            <div className="w-1/2 px-3 mb-6">
              <label className="font-bold">First Name:</label>
              <input
                className="w-full border rounded py-3 px-4"
                {...register("firstName", { required: "Required" })}
              />
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>
            <div className="w-1/2 px-3 mb-6">
              <label className="font-bold">Last Name:</label>
              <input
                className="w-full border rounded py-3 px-4"
                {...register("lastName", { required: "Required" })}
              />
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>
            <div className="w-full px-3 mb-6">
              <label className="font-bold">Email:</label>
              <input
                className="w-full border rounded py-3 px-4"
                {...register("email", { required: "Email is required" })}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="w-full px-3">
              <label className="font-bold">Note:</label>
              <textarea
                className="w-full border rounded py-3 px-4"
                {...register("note")}
                rows={4}
              />
            </div>
            <div className="w-full px-3 flex justify-end">
              <button
                className="bg-purple-500 text-white font-bold py-2 px-4 rounded mt-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        <div className="w-full max-w-lg border-2 p-4 bg-white rounded-md">
          <h3 className="font-bold border-b pb-2">Feedbacks </h3>
          <ul className="space-y-4">
            {feedbackList.map((f) => (
              <li
                key={f.id}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <p
                  className=" flex items-center gap-1 px-3 py-1 rounded-md cursor-pointer"
                  onClick={handleUserClick}
                >
                  {userRole === "admin" ? (
                    <strong className="text-green-600">{f.firstname}</strong>
                  ) : (
                    <strong>{f.note}</strong>
                  )}
                </p>

                {/* <div className="mt-3 space-y-2">
                  {f.admin_reply &&
                    [].concat(f.admin_reply || []).map((reply, index) => (
                      <div
                        key={index}
                        className=" p-2 bg-white rounded text-sm"
                      >
                        <strong>Admin:</strong> {reply}
                      </div>
                    ))}
                </div>

                <div className="mt-4 flex gap-2 ml-6">
                  <input
                    id={`reply-input-${f.id}`}
                    className="border rounded-md p-2 flex-1 text-sm "
                    placeholder="Type a reply..."
                  />
                  <button
                    className="bg-green-300 flex items-center gap-1 px-3 py-1 rounded-md text-sm"
                    onClick={() => handleReply(f, f.id)}
                  >
                    <ReplyIcon size={14} />
                    Reply
                  </button>
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
