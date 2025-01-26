import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Wallet,
  FileText,
  Users,
  UserCog,
  Settings,
  MessageSquare,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

interface SubMenuItem {
  path: string;
  label: string;
  children?: SubMenuItem[];
}

interface MenuItem {
  path: string;
  icon: any;
  label: string;
  subItems?: SubMenuItem[];
}

const Sidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    {
      path: "/bank",
      icon: Building2,
      label: "Bank",
      subItems: [
        { path: "/bank/createbank", label: "Add Bank" },
        { path: "/bank/banklist", label: "Bank List" },
        { path: "/bank/balancetransfer", label: "Create Transfer" },
        { path: "/bank/transferlist", label: "Transfer List" },
      ],
    },
    {
      path: "/payment",
      icon: Wallet,
      label: "Payment",
      subItems: [
        {
          path: "/payment/create",
          label: "Create Payment",
          children: [
            { path: "/payment/createpayment", label: "Payment Voucher" },
            { path: "/payment/createpaymentinvoice", label: "Payment Invoice" },
          ],
        },
        {
          path: "/payment/list",
          label: "Payment List",
          children: [
            { path: "/payment/paymentlist", label: "Payment List Voucher" },
            { path: "/payment/paymentlistinvoice", label: "Payment List Invoice" },
          ],
        },
      ],
    },
    {
      path: "/voucher",
      icon: FileText,
      label: "Voucher",
      subItems: [
        {
          path: "/voucher/debit",
          label: "Debit Voucher",
          children: [
            { path: "/voucher/createdebitvoucher", label: "Create Voucher" },
            { path: "/voucher/debitlist", label: "Voucher List" },
          ],
        },
        {
          path: "/voucher/credit",
          label: "Credit Voucher",
          children: [
            { path: "/voucher/createcreditvoucher", label: "Create Voucher" },
            { path: "/voucher/creditlist", label: "Voucher List" },
          ],
        },
        {
          path: "/voucher/journal",
          label: "Journal",
          children: [
            { path: "/voucher/createjournal", label: "Create Journal" },
            { path: "/voucher/journallist", label: "Journal List" },
          ],
        },
      ],
    },
    {
      path: "/people",
      icon: Users,
      label: "People",
      subItems: [
        { path: "/people/vendor", label: "Vendor People" },
        { path: "/people/supplier", label: "Supplier People" },
        { path: "/people/biller", label: "Biller People" },
        { path: "/people/customer", label: "Customer People" },
      ],
    },
    {
      path: "/user",
      icon: UserCog,
      label: "User Management",
      subItems: [
        { path: "/user/adduser", label: "Add User" },
        { path: "/user/userlist", label: "User List" },
        { path: "/user/userrole", label: "User Role" },
      ],
    },
    {
      path: "/report",
      icon: BarChart3,
      label: "Reports",
      subItems: [
        { path: "/report/transection", label: "Transaction" },
        { path: "/report/accountsbalance", label: "Account Balance" },
        { path: "/report/incomereport", label: "Income" },
        { path: "/report/expensereport", label: "Expense" },
        { path: "/report/trialbalance", label: "Trial Balance" },
        { path: "/report/profitreport", label: "Income vs Expense" },
        { path: "/report/netincomereport", label: "Profit & Loss" },
        { path: "/report/balancesheet", label: "Balance Sheet" },
      ],
    },
    { path: "/company", icon: Building2, label: "Company" },
    { path: "/rolepermission", icon: Settings, label: "Administrative Tools" },
  ];

  const toggleMenu = (path: string) => {
    setOpenMenus((prev) =>
      prev.includes(path)
        ? prev.filter((p) => p !== path)
        : [...prev, path]
    );
  };

  const renderSubMenu = (subItems: SubMenuItem[], level: number = 0) => {
    return subItems.map((subItem) => (
      <div key={subItem.path} className={cn("ml-4", level > 0 && "ml-6")}>
        {subItem.children ? (
          <Collapsible
            open={openMenus.includes(subItem.path)}
            onOpenChange={() => toggleMenu(subItem.path)}
          >
            <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-gray-600 hover:bg-gray-100">
              <div className="h-1.5 w-1.5 rounded-full bg-current" />
              <span className="flex-1 text-sm">{subItem.label}</span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  openMenus.includes(subItem.path) && "rotate-90"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {renderSubMenu(subItem.children, level + 1)}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link
            to={subItem.path}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2 py-2 text-gray-600 hover:bg-gray-100",
              location.pathname === subItem.path &&
                "bg-primary/10 text-primary font-medium"
            )}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="text-sm">{subItem.label}</span>
          </Link>
        )}
      </div>
    ));
  };

  return (
    <aside className="sidebar">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Cashier</h1>
      </div>

      <nav className="px-4">
        {menuItems.map((item) => (
          <div key={item.path}>
            {item.subItems ? (
              <Collapsible
                open={openMenus.includes(item.path)}
                onOpenChange={() => toggleMenu(item.path)}
              >
                <CollapsibleTrigger
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors",
                    openMenus.includes(item.path) &&
                      "bg-primary/10 text-primary font-medium"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="flex-1">{item.label}</span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openMenus.includes(item.path) && "rotate-90"
                    )}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>{renderSubMenu(item.subItems)}</CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors",
                  location.pathname === item.path &&
                    "bg-primary/10 text-primary font-medium"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;