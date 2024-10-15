import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Layout/Loader";

export default function Statistics() {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader />
      </div>
    );
  }

  // dummy data
  const data = [
    { name: "Total Users", value: stats?.user || 70 },
    { name: "Active Podcasters", value: stats?.podcasters || 60 },
    { name: "Episodes", value: stats?.episodes || 50 },
  ];

  const COLORS = ["#1E3A8A", "#6B7299", "#FF0000"];
  return (
    <div className="bg-[#18181F] flex flex-col gap-5 items-center justify-center py-5 text-white">
      <div className="text-center">
        <h1 className="lg:text-2xl font-bold">
          Total Users, Active Podcasters, and Episodes Uploaded at a Glance.
        </h1>
      </div>

      {/* Pie Chart */}
      <div className="border-2 w-full lg:w-1/2">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={150}
              paddingAngle={2}
              dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-md">
          <div className="flex items-center mb-2 md:mb-0">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: "#1E3A8A" }}></div>
            <span>
              <span className="text-[#1E3A8A]">70%</span> Total Users
            </span>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: "#6B7299" }}></div>
            <span>
              <span className="text-[#6B7299]">60%</span> Active Podcasters
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: "#FF0000" }}></div>
            <span>
              <span className="text-[#FF0000]">50%</span> Episodes uploaded
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
