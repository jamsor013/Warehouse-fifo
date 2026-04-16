"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, PackagePlus } from "lucide-react";

export default function InboundPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    nama_barang: "", kode_barang: "", qty: "", lokasi_rak: "",
    tanggal_masuk: new Date().toISOString().slice(0, 10),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataLama = JSON.parse(localStorage.getItem("stok") || "[]");
    const dataBaru = [...dataLama, {...form, id: Date.now(), qty: Number(form.qty) }];
    localStorage.setItem("stok", JSON.stringify(dataBaru));
    alert("Barang masuk tercatat. FIFO aman.");
    router.push("/");
  };

  return (
    <main className="min-h-screen text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => router.back()} className="p-2 hover:bg-gray-800 rounded-full"><ArrowLeft /></button>
          <h1 className="text-2xl font-bold flex items-center gap-2"><PackagePlus /> Inbound Barang</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input label="Nama Barang" name="nama_barang" value={form.nama_barang} setForm={setForm} form={form} />
          <Input label="Kode Barang / SKU" name="kode_barang" value={form.kode_barang} setForm={setForm} form={form} />
          <div className="flex gap-4">
            <Input label="Qty" name="qty" type="number" value={form.qty} setForm={setForm} form={form} />
            <Input label="Lokasi Rak" name="lokasi_rak" value={form.lokasi_rak} setForm={setForm} form={form} />
          </div>
          <Input label="Tanggal Masuk" name="tanggal_masuk" type="date" value={form.tanggal_masuk} setForm={setForm} form={form} />
          <button type="submit" className="w-full bg-[#1E40AF] hover:bg-[#1D4ED8] py-4 rounded-xl font-semibold text-lg mt-6">
            Simpan Barang Masuk
          </button>
        </form>
      </div>
    </main>
  );
}

function Input({label, name, type="text", value, setForm, form}) {
  return (
    <div className="flex-1">
      <label className="text-sm text-gray-300">{label}</label>
      <input
        name={name} type={type} value={value} required
        onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
        className="w-full mt-1 bg-[#2C2C2E] p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  )
}
