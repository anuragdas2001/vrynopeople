import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const Payroll = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="mr-2 h-5 w-5" />
          Payroll Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Next Payroll</span>
            <span className="text-sm font-medium">Jan 30, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Processing</span>
            <span className="text-sm font-medium text-green-600">On Track</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Last Processed</span>
            <span className="text-sm font-medium">Dec 30, 2024</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payroll;
