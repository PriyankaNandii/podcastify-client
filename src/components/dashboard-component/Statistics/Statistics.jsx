import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function Statistics() {
  const data = [
    {
      user: 100,
      podcaster: 90,
      date: "2020",
    },
    {
      user: 110,
      podcaster: 150,
      date: "2021",
    },
    {
      user: 90,
      podcaster: 130,
      date: "2023",
    },
    {
      user: 100,
      podcaster: 150,
      date: "2024",
    },
  ];

  return (
    <div className="bg-[#18181F] flex items-center justify-center md:p-5 h-screen">
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="user" stroke="#8884d8" />
        <Line type="monotone" dataKey="podcaster" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
