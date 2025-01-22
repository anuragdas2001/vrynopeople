import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar } from "lucide-react";

const Department = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ChartBar className="mr-2 h-5 w-5" />
          Department Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { dept: "Engineering", count: 85, color: "bg-blue-600" },
            { dept: "Marketing", count: 45, color: "bg-green-600" },
            { dept: "Sales", count: 65, color: "bg-yellow-600" },
            { dept: "HR", count: 15, color: "bg-purple-600" },
          ].map((dept, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{dept.dept}</span>
                <span className="font-medium">{dept.count}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${dept.color} h-2 rounded-full`}
                  style={{ width: `${(dept.count / 100) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Department;