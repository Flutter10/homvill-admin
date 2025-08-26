import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react"; // for icons
import fore1 from '../assets/fore1.jpg'
import fore2 from '../assets/fore2.jpg'
import fore3 from '../assets/fore3.jpg'
import fore4 from '../assets/fore4.jpg'
import fore5 from '../assets/fore5.jpg'
import fore6 from '../assets/fore6.jpg'
import fore7 from '../assets/fore7.jpg'
import fore8 from '../assets/fore8.jpg'
import { useNavigate } from 'react-router-dom';

const bannersData = [
  {
    id: 1,
    category: "Buying",
    title: "How to Find a Foreclosure",
    image: fore1,
  },
  {
    id: 2,
    category: "Financing",
    title: "HUD's Pre-Foreclosure Sales Program",
    image: fore2,
  },
  {
    id: 3,
    category: "Financing",
    title: "What Are the Types of Foreclosure?",
    image: fore3,
  },
  {
    id: 4,
    category: "Buying",
    title: "Overview of Buying a Foreclosure",
    image: fore4,
  },
  {
    id: 5,
    category: "Buying",
    title: "Buying a Pre-Foreclosure Property",
    image: fore5,
  },
  {
    id: 6,
    category: "Buying",
    title: "Buying a Home at a Foreclosure Auction",
    image: fore6,
  },
  {
    id: 7,
    category: "Buying",
    title: "Buying a Foreclosure Contract",
    image: fore7,
  },
  {
    id: 8,
    category: "Buying",
    title: "Foreclosure Financing",
    image: fore8,
  },
];

export default function Banners() {
    const navigate = useNavigate();

  const [banners, setBanners] = useState(bannersData);

  return (
    <div className="p-">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Banners</h1>
          <p className="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <button       onClick={() => navigate('/dashboard/banners/social')} className="bg-[#8B1C32] text-white px-4 py-2 rounded-lg">
          Social Media Links
        </button>
      </div>

      {/* Foreclosures button */}
      <button className="bg-[#8B1C32] text-white px-4 py-2 rounded-lg mb-6">
        Foreclosures
      </button>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="bg-white rounded-xl overflow-hidden shadow-xl  relative"
          >
            {/* Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full p-1 rounded-xl h-40 object-cover"
            />

            {/* Edit/Delete icons */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button className="bg-white rounded-full p-1 shadow">
                <Pencil size={16} className="text-gray-600" />
              </button>
              <button className="bg-white rounded-full p-1 shadow">
                <Trash2 size={16} className="text-red-500" />
              </button>
            </div>

         

            {/* Title */}
            <div className=" p-3">
              <span className=" bg-[#8A1538CC] text-white text-[14px] font-semibold px-3 py-2 rounded-md">
                {banner.category}
              </span>
              <h2 className="text-[15px] pt-2 text-[#1D1D1D] font-medium">{banner.title}</h2>
            </div>
          </div>
        ))}

        {/* Upload new banner card */}
        <div className="flex items-center justify-center border-2 border-dashed rounded-xl h-40">
          <button className="flex flex-col items-center text-[#8B1C32]">
            <Plus size={24} />
            <span className="mt-1 text-sm font-medium">Upload new banner</span>
          </button>
        </div>
      </div>
    </div>
  );
}
