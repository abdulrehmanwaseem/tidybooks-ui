import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: "income" | "expense";
}

const RecentTransactions = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Client Payment - ABC Corp",
      amount: 1500,
      date: "2024-02-20",
      type: "income",
    },
    {
      id: "2",
      description: "Office Supplies",
      amount: 250,
      date: "2024-02-19",
      type: "expense",
    },
    {
      id: "3",
      description: "Consulting Services",
      amount: 2000,
      date: "2024-02-18",
      type: "income",
    },
  ];

  return (
    <Card className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <button className="text-sm text-primary hover:underline">
          View all
        </button>
      </div>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              <span
                className={cn(
                  "font-semibold",
                  transaction.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                )}
              >
                {transaction.type === "income" ? "+" : "-"}$
                {transaction.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default RecentTransactions;