import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Calendar, UserMinus, UserPlus } from "lucide-react";

const Activities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Briefcase className="mr-2 h-5 w-5" />
          Recent Activities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            {
              icon: UserPlus,
              text: "New employee John Doe joined Engineering",
              time: "2 hours ago",
            },
            {
              icon: Calendar,
              text: "Team meeting scheduled for Marketing",
              time: "3 hours ago",
            },
            {
              icon: UserMinus,
              text: "Sarah Smith submitted resignation",
              time: "5 hours ago",
            },
            {
              icon: Award,
              text: "Performance reviews completed for Q1",
              time: "1 day ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center p-2 hover:bg-gray-50 rounded-lg"
            >
              <activity.icon className="h-5 w-5 text-gray-600 mr-3" />
              <div className="flex-1">
                <p className="text-sm text-gray-800">{activity.text}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


export default Activities