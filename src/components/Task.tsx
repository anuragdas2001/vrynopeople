import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListTodo } from "lucide-react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Review candidate applications",
      status: "Pending",
      priority: "High",
      dueDate: "Jan 24, 2025",
      assignedTo: "John D.",
    },
    {
      id: 2,
      title: "Update employee handbook",
      status: "In Progress",
      priority: "Medium",
      dueDate: "Jan 28, 2025",
      assignedTo: "Sarah M.",
    },
    {
      id: 3,
      title: "Conduct team meeting",
      status: "Completed",
      priority: "High",
      dueDate: "Jan 22, 2025",
      assignedTo: "Emma S.",
    },
  ];
  const PriorityBadge = ({ priority }: { priority: string }) => {
    const colors = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${colors[priority]}`}
      >
        {priority}
      </span>
    );
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ListTodo className="mr-2 h-5 w-5" />
          My Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-3 border rounded-lg hover:bg-gray-50 flex justify-between items-center"
            >
              <div>
                <h4 className="font-medium">{task.title}</h4>
                <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
              </div>
              <PriorityBadge priority={task.priority} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Tasks;
