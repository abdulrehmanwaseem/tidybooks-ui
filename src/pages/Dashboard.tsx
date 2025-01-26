import { DollarSign, TrendingUp, CreditCard, ArrowUpRight, Users, ShoppingCart, Activity, Package } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="fade-in space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back, here's what's happening with your business today.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="$24,500"
          icon={<DollarSign className="w-5 h-5" />}
          trend={{ value: 12, isPositive: true }}
          className="bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
        />
        <MetricCard
          title="Total Orders"
          value="1,240"
          icon={<ShoppingCart className="w-5 h-5" />}
          trend={{ value: 8, isPositive: true }}
          className="bg-gradient-to-br from-[#F97316] to-[#FEC6A1]"
        />
        <MetricCard
          title="Active Users"
          value="3,427"
          icon={<Users className="w-5 h-5" />}
          trend={{ value: 5, isPositive: true }}
          className="bg-gradient-to-br from-[#0EA5E9] to-[#D3E4FD]"
        />
        <MetricCard
          title="Total Products"
          value="540"
          icon={<Package className="w-5 h-5" />}
          trend={{ value: 3, isPositive: false }}
          className="bg-gradient-to-br from-[#D946EF] to-[#FFDEE2]"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RecentTransactions />
        {/* Add more dashboard components here */}
      </div>
    </div>
  );
};

export default Dashboard;