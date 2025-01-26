import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Dashboard from "@/pages/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes here */}
        </Routes>
      </main>
    </div>
  );
};

export default Index;