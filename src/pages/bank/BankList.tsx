import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

const BankList = () => {
  const banks = [
    {
      id: 1,
      name: "Chase Bank",
      accountNumber: "1234567890",
      branch: "Main Branch",
      balance: 50000,
    },
    {
      id: 2,
      name: "Bank of America",
      accountNumber: "0987654321",
      branch: "Downtown",
      balance: 75000,
    },
  ];

  return (
    <div className="fade-in p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Bank Accounts</h1>
      
      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bank Name</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {banks.map((bank) => (
              <TableRow key={bank.id}>
                <TableCell className="font-medium">{bank.name}</TableCell>
                <TableCell>{bank.accountNumber}</TableCell>
                <TableCell>{bank.branch}</TableCell>
                <TableCell className="text-right">
                  ${bank.balance.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BankList;