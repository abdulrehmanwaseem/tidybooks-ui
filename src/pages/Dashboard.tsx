import { DollarSign, TrendingUp, CreditCard, ArrowUpRight } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="fade-in space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="$24,500"
          icon={<DollarSign className="w-6 h-6 text-primary" />}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Profit"
          value="$8,260"
          icon={<TrendingUp className="w-6 h-6 text-primary" />}
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="Expenses"
          value="$16,240"
          icon={<CreditCard className="w-6 h-6 text-primary" />}
          trend={{ value: 5, isPositive: false }}
        />
        <MetricCard
          title="Active Invoices"
          value="12"
          icon={<ArrowUpRight className="w-6 h-6 text-primary" />}
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