"use client";

import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("Internet");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // New state for license tracker
  const [selectedLicense, setSelectedLicense] = useState(null);
  const [queuePosition, setQueuePosition] = useState(null);

  const licenses = [
    { name: "Aircraft Radio Licence", link: "https://www.bocra.org.bw/aircraft-radio-licence" },
    { name: "Amateur Radio License", link: "https://www.bocra.org.bw/amateur-radio-license" },
    { name: "Broadcasting Licence", link: "https://www.bocra.org.bw/broadcasting-licence" },
    { name: "Cellular Licence", link: "https://www.bocra.org.bw/cellular-licence-0" },
    { name: "Citizen Band Radio Licence", link: "https://www.bocra.org.bw/citizen-band-radio-licence-0" },
    { name: "Point-to-Multipoint Licence", link: "https://www.bocra.org.bw/point-multipoint-licence" },
    { name: "Point-to-Point Licence", link: "https://www.bocra.org.bw/point-point-licence" },
    { name: "Private Radio Communication Licence", link: "https://www.bocra.org.bw/private-radio-communication-licence-0" },
    { name: "Radio Dealers Licence", link: "https://www.bocra.org.bw/radio-dealers-licence" },
    { name: "Satellite Service Licence", link: "https://www.bocra.org.bw/satellite-service-licence-0" },
    { name: "Type Approval Licence", link: "https://www.bocra.org.bw/type-approval-licence-0" },
    { name: "VANS Licence", link: "https://www.bocra.org.bw/vans-licence" }
  ];

  const handleLicenseClick = (license) => {
    setSelectedLicense(license);
    setQueuePosition(null);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const randomQueue = Math.floor(Math.random() * 50) + 5;
    const randomTotal = randomQueue + Math.floor(Math.random() * 40) + 20;
    setQueuePosition({ position: randomQueue, total: randomTotal });
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    const subject = `New Complaint from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nComplaint:\n${formData.message}`;
    window.location.href = `mailto:info@bocra.org.bw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Top Quick Links */}
      <div className="bg-[#002B5B] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 justify-center md:justify-start flex-wrap">
          <a href="https://op-web.bocra.org.bw" target="_blank" className="hover:underline">BOCRA Portal</a>
          <a href="https://dqos.bocra.org.bw/" target="_blank" className="hover:underline">QoS Monitoring</a>
          <a href="https://www.bocra.org.bw/licensing" target="_blank" className="hover:underline">Licensing</a>
          <a href="https://www.bocra.org.bw/telecoms-statistics" target="_blank" className="hover:underline">Telecoms Statistics</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#002B5B] text-white py-6 sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <img src="https://www.bocra.org.bw/sites/default/files/logo_1.png" alt="BOCRA" className="h-32" />
          </div>

          <div className="relative flex-1 max-w-2xl">
            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">🔍</div>
              <input
                type="text"
                placeholder="Search BOCRA..."
                className="w-full pl-14 pr-6 py-4 rounded-2xl text-lg bg-white text-black focus:outline-none focus:ring-4 focus:ring-[#00B4D8]"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setShowResults(true); }}
              />
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="https://www.bocra.org.bw/" target="_blank" className="hover:text-[#00B4D8]">About</a>
            <a href="https://www.bocra.org.bw/mandate" target="_blank" className="hover:text-[#00B4D8]">Mandate</a>
            <a href="https://www.bocra.org.bw/projects" target="_blank" className="hover:text-[#00B4D8]">Projects</a>
            <a href="#news" className="hover:text-[#00B4D8]">News & Events</a>
            <a href="https://www.bocra.org.bw/complaints" target="_blank" className="hover:text-[#00B4D8]">Complaints</a>
            <a href="https://www.bocra.org.bw/tenders" target="_blank" className="hover:text-[#00B4D8]">Tenders</a>
          </div>
        </div>
      </nav>

      {/* Hackathon Banner */}
      <div id="hackathon" className="bg-[#00B4D8] text-white py-5 text-center font-semibold text-lg">
        BOCRA WEBSITE DEVELOPMENT HACKATHON 2026<br />
        <span className="text-sm">20 – 27 March 2026 | Submissions close 27 March at 17:00</span>
      </div>

      {/* Hero */}
      <section className="bg-[#002B5B] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">Welcome to Botswana Communications Regulatory Authority</h1>
          <p className="text-2xl">TELECOMMUNICATIONS • BROADCASTING • POSTAL • INTERNET</p>
        </div>
      </section>

      {/* Popular Services */}
      <section id="popular" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Popular Services This Week</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Licence Verification", "Apply For A License", "File A Complaint", "Register .bw Domain", "Type Approval", "Telecoms Statistics"].map((name, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${i < 3 ? 'ring-2 ring-[#00B4D8]' : ''}`}>
                {i < 3 && <div className="text-gray-800 italic text-xs mb-3">MOST VISITED</div>}
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600 mb-6 font-medium">Frequently Visited</p>
                <a href="#" className="text-[#00B4D8]">Access →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply For A License - Now with Queue Tracker */}
      <section id="license" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Apply For A License</h2>
          <div className="grid md:grid-cols-2 gap-4 text-lg">
            {licenses.map((item, i) => (
              <div 
                key={i} 
                onClick={() => handleLicenseClick(item)}
                className="p-6 border rounded-2xl hover:bg-white cursor-pointer block text-center font-medium"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* License Application Tracker Modal */}
      {selectedLicense && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelectedLicense(null)}>
          <div className="bg-white rounded-3xl p-10 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-3xl font-bold mb-6">Application for {selectedLicense.name}</h3>
            
            {!queuePosition ? (
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <input type="text" placeholder="Your Full Name" className="w-full p-4 border rounded-2xl" required />
                <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-2xl" required />
                <button type="submit" className="w-full bg-[#002B5B] text-white py-5 rounded-2xl text-xl font-semibold">
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">📋</div>
                <p className="text-2xl font-bold text-green-600">Application Received!</p>
                <p className="text-5xl font-bold mt-8 text-[#002B5B]">
                  #{queuePosition.position}
                </p>
                <p className="text-xl text-gray-600 mt-2">out of {queuePosition.total} applicants</p>
                <p className="text-lg mt-8">Estimated processing time: 8–14 working days</p>
                <button onClick={() => { setSelectedLicense(null); setQueuePosition(null); }} className="mt-10 text-[#00B4D8] font-medium">Close</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Complaint Form */}
      <section id="complaints" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">File A Complaint</h2>
          <form onSubmit={handleComplaintSubmit} className="bg-gray-50 p-10 rounded-3xl shadow-xl">
            <input type="text" placeholder="Your Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full mb-6 p-4 border rounded-xl" required />
            <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full mb-6 p-4 border rounded-xl" required />
            <textarea placeholder="Describe your complaint..." rows={6} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full mb-8 p-4 border rounded-xl" required />
            <button type="submit" className="w-full bg-[#002B5B] text-white py-5 rounded-2xl text-xl font-semibold">Send Complaint to BOCRA</button>
          </form>
          {submitted && <p className="text-center text-green-600 font-bold mt-6 text-xl">✅ Complaint ready to send to info@bocra.org.bw</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002B5B] text-white py-12 text-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>Botswana Communications Regulatory Authority</p>
          <p>Plot 50671 Independence Avenue, Gaborone, Botswana</p>
          <p>
            T: <a href="tel:+2673957755" className="hover:underline">+267 395 7755</a> | 
            E: <a href="mailto:info@bocra.org.bw" className="hover:underline">info@bocra.org.bw</a>
          </p>
          <p className="mt-8 opacity-70">© 2026 BOCRA. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}