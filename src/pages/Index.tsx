import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/pages/Dashboard";
import CreateBank from "@/pages/bank/CreateBank";
import BankList from "@/pages/bank/BankList";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bank/createbank" element={<CreateBank />} />
            <Route path="/bank/banklist" element={<BankList />} />
            <Route path="*" element={<div className="p-6">Coming soon...</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Index;