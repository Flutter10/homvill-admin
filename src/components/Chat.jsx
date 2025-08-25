import React from "react";
import { FiSearch } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";

const chats = new Array(6).fill({
  name: "Tiya, Amit",
  lastMsg: "Amit: Which location?",
  time: "12:30 pm",
});

const messages = [
  {
    sender: "Amit",
    role: "driver",
    message: "Where are you on the location",
    time: "12:00 am",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    sender: "Tina",
    role: "user",
    message: "Where are you on the location",
    time: "12:00 am",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    sender: "Amit",
    role: "driver",
    message: "Where are you on the location",
    time: "12:00 am",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    sender: "Tina",
    role: "user",
    message: "Where are you on the location",
    time: "12:00 am",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const LiveChatMonitoring = () => {
  return (
    <div style={{fontFamily:'Sofia sans'}} className="p-4 bg-white rounded-md shadow">
      <h2 className="text-[32px] font-bold text-[#121212] mb-4">Live Chat Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Chat List */}
        <div className="border rounded-lg col-span-1">
          {/* Search & Tabs */}
          <div className="p-3 border-b">
            <div className="relative">
              <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 text-sm focus:outline-none"
              />
              <button className="absolute right-2 top-2.5">
                <SlOptionsVertical className="text-gray-500" />
              </button>
            </div>
            <div className="flex mt-3">
              <button className="text-[20px] text-black font-medium border-b-2 border-black px-2 pb-1">Live</button>
              <button className="text-[20px] text-gray-500 ml-4">Previous</button>
            </div>
          </div>

          {/* Chat List Items */}
          <div className="overflow-y-auto max-h-[400px]">
            {chats.map((chat, index) => (
              <div key={index} className="p-3 border-b hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-[#000000] text-[22px]  text-sm">{chat.name}</h4>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-xs text-gray-500">{chat.lastMsg}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="col-span-2 border rounded-lg p-4">
          <h3 className="font-semibold text-[#000000] text-[26px] mb-4">Tina, Amit</h3>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="flex gap-3 items-start">
                <img
                  src={msg.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="text-[16px] text-black font-semibold">
                    {msg.sender}
                    <span className="text-xs text-gray-400 ml-2">{msg.role}</span>
                  </div>
                  <div
                    className={`mt-1 px-4 py-2 rounded-md text-sm max-w-xs ${
                      msg.role === "driver"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-blue-50 text-gray-800"
                    }`}
                  >
                    {msg.message}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Start Chat Button */}
          <div className="mt-4 text-right">
            <button className=" text-black px-4 py-2 rounded-md border border-[#1D26C1] text-sm">
              Start chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatMonitoring;
