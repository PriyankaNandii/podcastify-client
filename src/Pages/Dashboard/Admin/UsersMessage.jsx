import useDataFetcher from "../../../Hooks/useDataFetcher";
import Loader from "../../../Layout/Loader";

export default function UsersMessage() {
  const { data, isLoading } = useDataFetcher("contact-message");
  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#1C144C] from-5% via-[#18171E] via-30% to-[#1b1f24] to-90% bg-gray-800 p-2">
      <h1 className="text-xl text-white font-black">Messages from users</h1>
      {data.map((msg) => (
        <div
          key={msg._id}
          className="p-4 mb-4 bg-slate-400 w-full md:w-1/2 *:font-semibold">
          <h1>
            Sender's full name: {msg.firstName} {msg.lastName}
          </h1>
          <h1>Sender's email: {msg.email}</h1>
          <h1 className="mt-4">Sender's message</h1>
          <div className="py-2 bg-slate-50">{msg.message}</div>
        </div>
      ))}
    </div>
  );
}
