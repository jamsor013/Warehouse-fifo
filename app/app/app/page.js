"use client";
import { useState } from "react";
import { Package, Home, Gamepad2, Folder, FileText } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Beranda");

  const MenuButton = ({ title }) => (
    <button 
      onClick={() => alert(`Menu ${title} diklik`)}
      className="w-full bg-[#1E40AF] hover:bg-[#1D4ED8] active:scale-95 py-4 rounded-xl font-semibold text-lg transition"
    >
      {title}
    </button>
  );

  const NavItem = ({ icon: Icon, label }) => (
    <button 
      onClick={() => setActiveTab(label)}
      className={`flex flex-col items-center gap-1 ${activeTab === label ? 'text-white' : 'text-gray-500'}`}
    >
      <Icon size={22} />
      <p className="text-xs">{label}</p>
    </button>
  );

  return (
    <main className="bg-[#1C1C1E] min-h-screen text-white p-6 pb-24">
      {/* Profile Circle */}
      <div className="flex justify-end">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
          GI
        </div>
      </div>

      {/* Header */}
      <div className="max-w-md mx-auto text-center mb-8 mt-4">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <Package size={36} /> Warehouse FIFO System
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed px-2">
          Gunakan aplikasi setiap stok keluar-masuk, tanpa input FIFO rusak. 
          Konsisten input, gudang rapi, kerja mudah. Pilih menu di bawah untuk 
          mulai mengatur data barang masuk dan keluar.
        </p>
      </div>

      {/* Menu Buttons */}
      <div className="max-w-md mx-auto space-y-4">
        <MenuButton title="Inbound" />
        <MenuButton title="Outbound" />
        <MenuButton title="Inventory" />
        <MenuButton title="History" />
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1E] border-t border-gray-800">
        <div className="flex justify-around py-3 max-w-md mx-auto">
          <NavItem icon={Home} label="Beranda" />
          <NavItem icon={Gamepad2} label="Games" />
          <NavItem icon={FileText} label="Tab" />
          <NavItem icon={Folder} label="File" />
        </div>
      </div>
    </main>
  );
}
