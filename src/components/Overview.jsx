import React from "react";
import totalUsersImg from "../components/assets/group3.svg"; // Replace with your left image
import listedStatesImg from "../components/assets/frame.svg"; // Replace with your right image
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FiEdit, FiTrash } from "react-icons/fi";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Dashboard = () => {
    const stats = [
    { title: "Earnings", value: "$23,425", change: "+20%", color: "bg-green-100", textColor: "text-green-600" },
    { title: "Users", value: "840", change: "-20%", color: "bg-orange-100", textColor: "text-orange-600" },
    { title: "Properties", value: "412", change: "-20%", color: "bg-pink-100", textColor: "text-pink-600" },
    { title: "Category", value: "9", change: "-20%", color: "bg-purple-100", textColor: "text-purple-600" },
  ];

  const users = [
    { name: "Jenny Wilson", date: "Dec 18, 2024", email: "example@gmail.com", id: "7452031", img: "https://via.placeholder.com/30" },
    { name: "Albert Flores", date: "Dec 18, 2024", email: "example@gmail.com", id: "7452031", img: "https://via.placeholder.com/30" },
    { name: "Marvin McKinney", date: "Dec 18, 2024", email: "example@gmail.com", id: "7452031", img: "https://via.placeholder.com/30" },
    { name: "Sharyn Honey", date: "Dec 18, 2024", email: "example@gmail.com", id: "7452031", img: "https://via.placeholder.com/30" },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Earnings",
        data: [5, 10, 12, 20, 25, 35, 50, 45, 60, 80, 65, 85],
        backgroundColor: "#f9c5d1",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { callback: (val) => `$${val}k` } },
    },
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top section: two images side by side */}
     <div className="flex gap-6 mb-6">
  {/* Total Users Card Image */}
  <div className="flex-1 bg-white rounded-xl overflow-hidden shadow h-[270px]">
    <img
      src={totalUsersImg}
      alt="Total Users"
      className="w-full h-full object-cover"
    />
  </div>

  {/* All Listed States Image */}
  <div className="flex-1 bg-white rounded-xl overflow-hidden shadow h-[250px]">
    <img
      src={listedStatesImg}
      alt="All Listed States"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Bottom section - example placeholders */}
       <div className="p-6 bg-white min-h-screen">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className={`p-4 border rounded-xl flex flex-col gap-1 ${s.color}`}>
            <span className="text-gray-500 text-sm">{s.title}</span>
            <span className="text-xl font-bold">{s.value}</span>
            <span className={`text-xs ${s.textColor}`}>{s.change}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* New Users */}
        <div className="border rounded-xl p-4">
          <h3 className="font-semibold mb-4">New Users</h3>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th>User Name</th>
                <th>Date In</th>
                <th>Email</th>
                <th>ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr key={idx} className="border-b">
                  <td className="flex items-center gap-2 py-2">
                    <img src={u.img} alt="" className="w-8 h-8 rounded-full" />
                    {u.name}
                  </td>
                  <td>{u.date}</td>
                  <td>{u.email}</td>
                  <td>{u.id}</td>
                  <td className="flex gap-2">
                    <FiEdit className="text-gray-400 cursor-pointer" />
                    <FiTrash className="text-red-400 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="border rounded-xl p-4">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Earning</h3>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Yearly</option>
              <option>Monthly</option>
            </select>
          </div>
          <Bar data={chartData} options={chartOptions} height={200} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
