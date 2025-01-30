import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Announcements = () => {
  const announcements = [
    { title: "Office Holiday", date: "Jan 26, 2025" },
    { title: "Team Building Event", date: "Feb 15, 2025" },
    { title: "Performance Review", date: "Mar 1, 2025" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageSquare className="mr-2 h-6 w-6" />
          <span className="text-xl">Announcements</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="border-b last:border-0 pb-3 last:pb-0">
              <h4 className="text-sm font-medium">{announcement.title}</h4>
              <p className="text-xs text-gray-500">{announcement.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Announcements;
