import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Receipt,
  BarChart3,
  Users,
  Settings,
  CreditCard,
  PieChart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/invoices", icon: FileText, label: "Invoices" },
    { path: "/expenses", icon: Receipt, label: "Expenses" },
    { path: "/payments", icon: CreditCard, label: "Payments" },
    { path: "/reports", icon: PieChart, label: "Reports" },
    { path: "/customers", icon: Users, label: "Customers" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="sidebar">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Cashier</h1>
      </div>

      <nav className="px-4">
        {menuItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors",
              location.pathname === path &&
                "bg-primary/10 text-primary font-medium"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;