import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateBank = () => {
  return (
    <div className="fade-in p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add New Bank Account</h1>
      
      <Card className="max-w-2xl">
        <form className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bankName">Bank Name</Label>
            <Input id="bankName" placeholder="Enter bank name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input id="accountNumber" placeholder="Enter account number" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="branch">Branch</Label>
            <Input id="branch" placeholder="Enter branch name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="initialBalance">Initial Balance</Label>
            <Input id="initialBalance" type="number" placeholder="0.00" />
          </div>
          
          <div className="pt-4">
            <Button type="submit">Add Bank Account</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateBank;