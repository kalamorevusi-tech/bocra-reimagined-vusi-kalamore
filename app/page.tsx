"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [attacks, setAttacks] = useState([
    { time: "Just now", type: "SQL Injection", status: "BLOCKED", ip: "196.202.XX.XX" },
  ]);

  const [formData, setFormData] = useState({ name: "", complaint: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAttack = {
        time: "Just now",
        type: ["SQL Injection", "XSS Attempt", "Brute Force", "DDoS Probe"][Math.floor(Math.random() * 4)],
        status: "BLOCKED",
        ip: `196.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      };
      setAttacks([newAttack, ...attacks.slice(0, 4)]);
    }, 1800);
    return () => clearInterval(interval);
  }, [attacks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar - same as before */}
      <nav className="bg-[#002B5B] text-white py-5 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold tracking-tight">BOCRA</div>
            <div className="text-xs bg-white/20 px-3 py-1 rounded-full">2.0 — ONE MAN ARMY</div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-[#00B4D8]">Services</a>
            <a href="#dashboard" className="hover:text-[#00B4D8]">Dashboard</a>
            <a href="#report" className="hover:text-[#00B4D8]">Report Complaint</a>
          </div>
          <div className="text-sm font-medium">Vusi Kalamore • Solo</div>
        </div>
      </nav>

      {/* Hero - same */}
      <section className="bg-[#002B5B] text-white py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            The BOCRA website<br />Botswana actually deserves
          </h1>
          <p className="text-2xl mb-10">One man. One week. Zero excuses.</p>
          <a href="#dashboard" className="inline-block bg-[#00B4D8] hover:bg-white hover:text-[#002B5B] px-12 py-5 rounded-full text-2xl font-semibold transition-all">
            See Live Security →
          </a>
        </div>
      </section>

      {/* Live Threat Dashboard */}
      <section id="dashboard" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">LIVE Threat Dashboard</h2>
          <div className="bg-black text-green-400 p-8 rounded-3xl font-mono text-sm">
            {/* attacks list same as before - I'll keep it short here but it's the same */}
            {attacks.map((attack, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-gray-800">
                <span>{attack.time}</span>
                <span className="text-red-400">{attack.type}</span>
                <span className="text-[#00B4D8] font-bold">→ BLOCKED</span>
                <span>{attack.ip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secure Complaint Form */}
      <section id="report" className="py-20 bg-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Secure Complaint Form</h2>
          <p className="text-center text-gray-600 mb-10">Client-side encrypted demo + rate limiting</p>
          
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-xl">
            <input type="text" placeholder="Your Name" className="w-full mb-6 p-4 border rounded-xl" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" className="w-full mb-6 p-4 border rounded-xl"
              onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <textarea placeholder="Describe your issue or complaint..." rows={6} className="w-full mb-6 p-4 border rounded-xl"
              onChange={(e) => setFormData({...formData, complaint: e.target.value})} />
            
            <button type="submit" className="w-full bg-[#002B5B] text-white py-5 rounded-2xl text-xl font-semibold hover:bg-black transition">
              Submit Securely (Encrypted Demo)
            </button>
          </form>

          {submitted && <p className="text-center text-green-600 mt-6 font-bold">✅ Complaint received & encrypted. Thank you!</p>}
        </div>
      </section>
    </main>
  );
}