import useDataFetcher from "../../../Hooks/useDataFetcher";
import Loader from "../../../Layout/Loader";

export default function UsersMessage() {
  const { data, isLoading } = useDataFetcher("contact-message");
  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#2A1D6B] via-[#1B1B1B] to-[#2A2A2A] p-6">
      <h1 className="text-3xl text-white font-extrabold mb-8 text-center shadow-md">
        Messages from Users
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((msg) => (
          <div
            key={msg._id}
            className="p-6 bg-gradient-to-br from-[#3B3A56] to-[#5C5C78] text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-lg font-bold mb-2">Sender's Name:</h2>
            <p className="text-md mb-4">
              {msg.firstName} {msg.lastName}
            </p>
            <h2 className="text-lg font-bold mb-2">Sender's Email:</h2>
            <p className="text-md mb-4">{msg.email}</p>
            <h2 className="text-lg font-bold mb-2">Message:</h2>
            <div className="py-2 px-4 bg-slate-200 text-black rounded-md border-l-4 border-blue-500">
              {msg.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
